import {ActionCreator, AnyAction} from "redux";

export const SET_MENU = 'SET_MENU';

export const setMenuActionCreator: ActionCreator<AnyAction> = (activeMenu) => ({type: SET_MENU, activeMenu});