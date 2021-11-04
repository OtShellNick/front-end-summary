import {ActionCreator, AnyAction} from "redux";

export const SET_ASIDE = 'SET_ASIDE';

export const setAsideActionCreator: ActionCreator<AnyAction> = (asideMenu) => ({type: SET_ASIDE, asideMenu});