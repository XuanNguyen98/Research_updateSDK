import React from 'react';
//import config from '../config';
import WithBadge from "./WithBadge";
import TabBarIcon from './TabBarIcon';
import { Notifications } from 'expo';
import { DeviceEventEmitter } from 'react-native'
import * as Api from '../UI/Api'
export default class TabBarIconWithBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BadgeCount: 0,
      IsShowBadgeValue: true
    }
    if (this.props.title === "account") {
      this._FetchCheckingAccountBadgeFromAPI();
    }
    if (this.props.title === "notification") {
      this._FetchNotificationCountFromAPI();
    }
  }

  async _FetchNotificationCountFromAPI() {
    //Enum: MobileNotificationType:  Notification = 1,  Issue = 2, null || 0 To Get Total
    const type = 0;
    const res = await Api._fetch(`${config.GET_NOTIFICATION_COUNT_BADGE_API_URL}?type=${type}`, 'GET');
    if (res.code == 200) {
      this.setState({ BadgeCount: Number(res.results) });
    }
  }

  _FetchCheckingAccountBadgeFromAPI = async () => {
    const res = await Api._fetch(`${config.CHECK_ACCOUNT_TAB_BADGE_URL}`, 'GET');
    if (res.code == 200) {
      this.setState({ IsShowBadgeValue: !res.isTurnBadgeOn });
    }
  }

  UNSAFE_componentWillMount() {
    if (this.props.title === "account") {
      this.eventCheckingAccountBadgeListener = DeviceEventEmitter.addListener('TabBarIconWithBadge-CheckingAccountBadge', this._FetchCheckingAccountBadgeFromAPI);
    }
    if (this.props.title === "notification") {
      this._notificationSubscription = Notifications.addListener(this._handleNotification);
      this.eventUpdateBadgeCountListener = DeviceEventEmitter.addListener('TabBarIconWithBadge-updateBadgeCount-Total', this._handleNotification);
    }
  }

  componentWillUnmount() {
    if (this.props.title === "account") {
      this.eventCheckingAccountBadgeListener.remove();
    }
    if (this.props.title === "notification") {
      this.eventUpdateBadgeCountListener.remove();
      this._notificationSubscription.remove();
    }
  }

  _handleNotification = (notification) => {
    if (this.props.title === "account") {
      this._FetchCheckingAccountBadgeFromAPI();
      DeviceEventEmitter.emit('TabBarIconWithBadge-CheckingSupportBadge');
    }
    if (this.props.title === "notification") {
      this._FetchNotificationCountFromAPI();
    }
  };

  render() {
    var IconsWithBadge = WithBadge(this.state.BadgeCount)(TabBarIcon);
    return (
      <IconsWithBadge
        IsShowBadgeValue={this.state.IsShowBadgeValue}
        {...this.props}
      />
    );
  }

}
