import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types'
import { DotIndicator} from 'react-native-indicators';

export default class ButtonSpinner extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            animation: false,
            disabled: this.props.disabled,
            opacityStyle: this.props.disabled ? this.props.opacityDisabled : this.props.opacity
        }

        // console.log(this.props)
        // console.log(this.props.children)
        // console.log(this.props.children.length)
        // console.log(typeof this.props.children)
    }

    componentDidMount() {
        this._isMounted = true;
        // if(!this.props.children)
        if (!this.props.pendingRequest) {
            this._automaticTimeEnable();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.disabled!==this.state.disabled){
            //Perform some operation
            this.setState({
              disabled: nextProps.disabled,
              opacityStyle: nextProps.disabled ? this.props.opacityDisabled : this.props.opacity
            });
        }
      }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _automaticTimeEnable() {
        let startTime = setTimeout(() => {
            this._isMounted && this.setState({
                animation: false,
                disabled: false,
                opacityStyle: this.props.opacity
            })
            clearTimeout(startTime)
        }, this.props.automaticTimeEnable)

    }
    _renderButtonContent() {
        if (typeof this.props.children == 'object') {
            return this.props.children
        }
        if (this.props.children) {
            return <Text style={this.props.styleText}>{this.props.children}</Text>
        }
        return <Text style={this.props.styleText}>{this.props.textButton}</Text>
    }

    _renderIndicator() {
        switch (this.props.typeSpinner) {
            case 'custom':
                return this.props.customSpinnerComponent
            default:
                const _styleSpinner = this.props.positionSpinner === 'centered-over-text' ? Object.assign({}, this.props.styleSpinner.style, { position: 'absolute' }) : this.props.styleSpinner.style;
                return (
               // <ActivityIndicator style={_styleSpinner} size={this.props.styleSpinner.size} color={this.props.styleSpinner.color} />
                <DotIndicator color='white' size={5} style={{ flex: 0, marginLeft: 5 }}/>   
               )

        }
    }

    _positionSpinnerWithText() {
        if (this.state.animation) {
            if (this.props.positionSpinner === "centered-without-text" ||
                this.props.positionSpinner === "left-without-text" ||
                this.props.positionSpinner === "right-without-text") {
                return false
            }
        }
        return true
    }

    _getStyleButton() {
        switch (this.props.positionSpinner) {
            case 'right':
                return {
                    flex: 1,
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }
            case 'above-text':
                return {
                    flexDirection: 'column-reverse',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            case 'below-text':
                return {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }

            case 'centered-without-text':
                return {

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            case 'left-without-text':
                return {
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }
            case 'right-without-text':
                return {
                    flexDirection: 'row-reverse',
                    justifyContent: 'flex-start',
                }

            default:
                return {}
        }
    }


    render() {
        // positionSpinner
        const _styleButton = this.state.animation ? Object.assign({}, this.props.styleButton, this._getStyleButton()) : this.props.styleButton;
        const style = Object.assign({}, _styleButton, this.props.style);
        // console.log(style);
        return (
            <TouchableOpacity
                style={{

                    ...style,

                    opacity: this.state.opacityStyle
                }}
                disabled={this.state.disabled}
                onPress={async () => {

                    this._isMounted &&
                    this.setState({
                        animation: true,
                        disabled: true,
                        opacityStyle: this.props.opacityDisabled
                    })

                    if (!this.props.pendingRequest) {
                        this._automaticTimeEnable();
                    }
                    var myfunc = await this.props.onPress();
                    
                    this._isMounted &&
                    this.setState({
                        animation: false,
                        disabled: false,
                        opacityStyle: this.props.disabled ? this.props.opacityDisabled : this.props.opacity
                    })

                    // this.customOnPress()
                    // console.log(this.props)
                    // console.log(this.props.onPress)
                    // console.log(this.props.onPress.prototype)

                    // console.log(JSON.stringify(this.props.onPress.prototype.toString()))
                    // console.log(this.props.onPress.prototype.valueOf)
                    // this.initLoader();
                    // this.props.onPress.bind(this)();
                }
                }

            >
                {
                    this._positionSpinnerWithText() ?
                        this._renderButtonContent()
                        :
                        null
                }
                {
                    this.state.animation ?
                        this._renderIndicator()
                        :
                        null
                }
            </TouchableOpacity>
        );
    }

}

ButtonSpinner.propTypes = {
    children: PropTypes.any,
    textButton: PropTypes.string,
    disabled: PropTypes.bool,
    opacity: PropTypes.number,
    opacityDisabled: PropTypes.number,

    pendingRequest: PropTypes.bool,
    automaticTimeEnable: PropTypes.number,
    style: PropTypes.object,

    styleText: PropTypes.object,

    styleSpinner: PropTypes.object,
    typeSpinner: PropTypes.string,
    customSpinnerComponent: PropTypes.object,

    onPress: PropTypes.func
}

ButtonSpinner.defaultProps = {
    children: '',
    textButton: 'My Button text',
    disabled: false,
    opacity: 1,
    opacityDisabled: 0.55,

    pendingRequest: true,
    automaticTimeEnable: 0,
    styleButton: {
        alignItems: 'center',

        backgroundColor: 'f5f5f5',
        color: '#dddddd',

        paddingVertical: 10,
        paddingHorizontal: 25,

        margin: 10,

        borderColor: '#c2c2c2',
        borderRadius: 5,
        borderWidth: 1,

        flex: 1,

        flexDirection: 'row',
        justifyContent: 'center',
    },
    styleText: {
        color: '#000000',
    },
    styleSpinner: {
        style: {
            marginRight: 15,
        },
        color: '#a6a6a6', //'#dddddd',
        size: 'small', // small | large
    },
    typeSpinner: 'defaut', // defaut | custom
    positionSpinner: 'left', // 'left', 'right', 'centered-over-text', 'centered-without-text', 'left-without-text', 'right-without-text', 'above-text', 'below-text'
    customSpinnerComponent: {},

    onPress: () => { }
};