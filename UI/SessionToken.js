import {
  AsyncStorage
} from "react-native";
//import config from '../config';
export const _storeData = async (value) => {
  try {
    await AsyncStorage.setItem(config.TTL_SESSION_TOKEN, value);
  } catch (error) {
    console.log(error);
  }
};
export const storeKeyData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};
export const getValueByKey = async (key) => {
  return await AsyncStorage.getItem(key);
}
export const _getTokens = async () => {
  return await AsyncStorage.getItem(config.TTL_SESSION_TOKEN);
}