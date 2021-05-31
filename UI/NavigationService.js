import { NavigationActions } from 'react-navigation';

class NavigationService {
    _navigator = null;

    static setNav(_navigator) {
        this._navigator = _navigator;
    }


    static setTopLevelNavigator(_navigator) {
        this._navigator = _navigator;
        //console.log(this._navigator);
    }

    static navigate(routeName, params) {
        this._navigator && this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }

    static goBack(key) {
        this._navigator && this._navigator.dispatch(
            NavigationActions.back({
                key: key
            })
        );
    }
}

export default NavigationService;