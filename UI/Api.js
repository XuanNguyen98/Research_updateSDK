
import * as SessionToken from './SessionToken';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
//import config from '../config';
import * as DeviceInfo from 'expo-device';
import * as ApplicationInfo from 'expo-application';
import NavigationService from './NavigationService';
async function fetching(url, type, data, token, notiToken, DeviceType, OSType, OSVersion, AppId, AppName, AppVersion, AppBuildNumber) {
  console.log("endpoint: " + url);
  var res = await fetch(url, {
    method: type,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-TTL-SessionToken': token != null ? token : "",
      'X-TTL-NotificationToken': notiToken != null ? notiToken : "",
      'X-TTL-mDeviceType': DeviceType,
      'X-TTL-mOSType': OSType,
      'X-TTL-mOSVersion': OSVersion,
      'X-TTL-mAppId': AppId,
      'X-TTL-mAppName': AppName,
      'X-TTL-mAppVersion': AppVersion,
      'X-TTL-mAppBuildNumber': AppBuildNumber,
    },
    body: data != null ? JSON.stringify(data) : ""
  });

  return res;
}

async function _logout() {
  await SessionToken._storeData("");
  //show view login  
  setTimeout(() => {
    NavigationService.navigate('Login');
  }, 300);
}

async function _retrieveAuthenticationData(token, notiToken) {
  try {
    const response = await fetching(config.CHECK_SIGNIN_STATUS_URL, "GET", null, token, notiToken);
    if (response == null || response.status == 500) {
      await _logout();
    }
  } catch {
    await _logout();
  }
}

export const _fetch = async (url, type, data = null) => {
  try {
    //console.log("url: " + url);
    let notiToken = await SessionToken.getValueByKey(config.TTL_Notification_Token);
    var DeviceType = "";
    var OSVersion = "";
    var AppId = "";
    var AppName = "";
    var AppVersion = "";
    var AppBuildNumber = "";
    var OSType = "";
    //todo DeviceInfo va ApplicationInfo sdk 33 lay ra toan bo null, can check va improve sau khi nang cap sdk
    if (notiToken != null && notiToken !== '' && notiToken !== 'null' && notiToken !== 'undefined') {
      DeviceType = DeviceInfo.modelName;
      OSVersion = DeviceInfo.osVersion;
      OSType = DeviceInfo.osName;
      AppId = ApplicationInfo.applicationId;
      AppName = ApplicationInfo.applicationName;
      AppVersion = ApplicationInfo.nativeApplicationVersion;
      AppBuildNumber = ApplicationInfo.nativeBuildVersion;
    }
    const token = await SessionToken._getTokens();
    var response = await fetching(url, type, data, token, notiToken, DeviceType, OSType, OSVersion, AppId, AppName, AppVersion, AppBuildNumber);
    if (response != null && response.status != 500) {
      return (await response.json()).data;
    }
    else {
      await _retrieveAuthenticationData(token, notiToken);
    }
  } catch (e) {
    //console.log(JSON.stringify(e));
  }

}

