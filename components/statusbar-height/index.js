import { Dimensions, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const headerHeight = Constants.statusBarHeight;

export const StatusBarHeight = Platform.select({
    ios: headerHeight,
    android: StatusBar.currentHeight,
    default: 0
})