import {Reducer} from "redux";
import {SET_MENU} from "@/actions/setMenuAction";
import {SET_ASIDE} from "../actions/setAsideAction";
import {SET_WIDTH} from "../actions/setDeviceWidthAction";

export interface IInitialState {
    activeMenu: string;
    deviceWidth: number;
    asideMenu: boolean;
}

const initialState: IInitialState = {
    activeMenu: 'main',
    deviceWidth: 0,
    asideMenu: true
}

export const rootReducer: Reducer<IInitialState> = (state = initialState, action) => {
    const {type, activeMenu, asideMenu, deviceWidth} = action;

    switch (type) {
        case SET_MENU:
            return {
                ...state,
                activeMenu
            }
        case SET_ASIDE:
            return {
                ...state,
                asideMenu
            }
        case SET_WIDTH:
            return {
                ...state,
                deviceWidth
            }
        default:
            return state;
    }
}