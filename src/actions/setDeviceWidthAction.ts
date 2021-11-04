import {ActionCreator, AnyAction} from "redux";

export const SET_WIDTH = 'SET_WIDTH';

export const setDeviceWidthAction: ActionCreator<AnyAction> = (deviceWidth) => ({type: SET_WIDTH, deviceWidth});