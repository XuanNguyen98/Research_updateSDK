import * as Colors from './colors'
import { Platform } from 'react-native'
import { StatusBarHeight } from '../components/statusbar-height';
const STATUSBAR_HEIGHT = StatusBarHeight;

console.log(STATUSBAR_HEIGHT);
export const headerBar = {
  headerStyle: {
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT < 30 ? -20 : STATUSBAR_HEIGHT * -0.4 : 0,
    color: Colors.NaviGray,
    backgroundColor: Colors.Dust,
    borderBottomWidth: 0,
    shadowColor: Colors.NaviGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
    elevation: 10,
  },
  headerTintColor: Colors.NaviGray,
  headerTitleStyle: {
    color: Colors.NaviGray,
    flex: 1,
    textAlign: "center",
  },
  headerTitleContainerStyle: Platform.OS == 'android' && {
    left: 0,
  },
}
export const TabHeader = {
  fontSize: 20,
  fontWeight: 'bold',
  color: Colors.DimGray
}
