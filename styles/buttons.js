import * as Colors from './colors'

// Button radius
export const rad3 = 3;
export const rad5 = 5;
export const rad10 = 10;
export const rad15 = 15;
export const rad20 = 20;
export const rad25 = 25;
export const rad30 = 30;
export const rad35 = 35;
export const rad40 = 40;
export const rad45 = 45;
export const rad50 = 50;

// Common buttons
export const RedBtn = {
    width: '100%',
    height: 35,
    backgroundColor: Colors.CommonRed,
    color: Colors.CommonWhite,
    borderRadius: rad20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.46,
    elevation: 3,
}
export const BlueBtn = {
    // width: 40,
    // height: 40,
    // borderRadius: 40 /2,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#415dae",
    color: Colors.CommonWhite,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
}
export const CommonBlackBtn = {
    width: '100%',
    height: 44,
    backgroundColor: Colors.CommonBlack,
    color: Colors.CommonWhite,
    borderRadius: rad20
}
export const GoogleButton = {
    // width: 40,
    // height: 40,
    // borderRadius: 40 /2,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#dd4d3f',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
}
export const sendBtn = {
    height: 35,
    backgroundColor: Colors.CommonRed,
    color: Colors.CommonWhite,
    borderRadius: rad5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.46,
    elevation: 3,
}
export const confirmBtn = {
    height: 40,
    backgroundColor: '#328ed9',
    color: Colors.CommonWhite,
    borderRadius: rad3,
    borderWidth: 0
}
export const cancelBtn = {
  height: 40,
  backgroundColor: Colors.Silver,
  color: Colors.MediumGray,
  borderRadius: rad3,
}
