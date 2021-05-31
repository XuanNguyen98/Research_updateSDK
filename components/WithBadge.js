import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from "react-native-elements";
import { Icon } from 'react-native-elements';
import * as Common from '../styles/common';
const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 16,
    minWidth: 0,
    width: 16
  },
  badgeContainer: {
    position: "absolute",
    marginLeft: 13,
    marginBottom: 25
  },
  badgeText: {
    fontSize: 9,
    paddingHorizontal: 0
  }
});

const WithBadge = (value, options = {}) => WrappedComponent =>
  class extends React.Component {
    render() {
      var { top = -5, right = 0, left = 0, bottom = 0, hidden = !value, ...badgeProps } = options;
      const badgeValue = typeof value === "function" ? value(this.props) : value;
      return (
        <View>
          <WrappedComponent {...this.props} />
          {
            (this.props.IsTurnBadgeOn)
              ?
              (
                (!this.props.IsShowBadgeValue)
                  ?
                  (
                    <View style={{ position: 'absolute', top: 0, right: -10 }}>
                      <Icon
                        focused={this.props.focused}
                        name='message'
                        type='material-icons'
                        color={Common.Colors.CommonRed}
                        size={15}
                      />
                    </View>
                  )
                  :
                  (
                    (!hidden)
                    &&
                    (
                      <Badge
                        badgeStyle={styles.badge}
                        textStyle={styles.badgeText}
                        value={badgeValue}
                        status="error"
                        containerStyle={[styles.badgeContainer, { top, right, left, bottom }]}
                        {...badgeProps}
                      />
                    )
                  )
              )
              :
              (<View />)
          }
        </View>
      );

    }
  };

export default WithBadge;