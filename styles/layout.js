import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Colors from './colors';
export const FlexCenterItem = {
    alignItems: 'center',
    justifyContent: 'center'
}
export const FlexAlignCenterItem = {
    alignItems: 'center',
}
export const FlexCenterEndItem = {
    justifyContent: 'flex-end',
    alignItems: 'center',
}

export const FlexCenterStartItem = {
    justifyContent: 'flex-start',
    alignItems: 'center',
}

export const FlexEndCenterItem = {
    justifyContent: 'center',
    alignItems: 'flex-end',
}

export const FlexColumn = {
    flexDirection: 'column',
}
export const FlexRowCenter = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

export const ClassLayout = {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
}
export const AccountLayout = {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 15,
}

export const ScreenNamePosition= {
    alignItems: 'center',
    justifyContent: 'center'
}

export const ScreenLayout = {
    flex: 1,
    paddingTop: 10,
    backgroundColor: Colors.NaviGray
}
export const ScreenName = {
    fontSize:20,
    fontWeight: 'bold',
    color: '#696969',
    margin: 20,
    alignItems: 'center'
}

export const ViewLoading = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 10
}
export const ViewLoadingIssue = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
}
export const SubTab = {
    paddingLeft: 16,
    backgroundColor: Colors.CommonWhite,
    marginLeft: 0,
  }

// Attributes of Flex
export const FlexStretch = 'stretch';