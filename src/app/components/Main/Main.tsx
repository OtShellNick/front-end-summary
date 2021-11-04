import React, {Suspense, lazy, useEffect} from "react";

import './Main.scss';

import {Preloader} from "@components/Preloader/Preloader";
const MainPage = lazy(() => import("@components/Main/MainPage/export"));
const About = lazy(() => import("@components/Main/About/export"));
const Works = lazy(() => import("@components/Main/Works/export"));
const Contacts = lazy(() => import("@components/Main/Contacts/export"));

import IconShow from './assets/list.svg?tsx';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../store/store";
import {setAsideActionCreator} from "../../../actions/setAsideAction";
import {setDeviceWidthAction} from "../../../actions/setDeviceWidthAction";

export const Main = () => {
    const deviceWidth = window.screen.width;
    const asideMenu = useSelector<IInitialState, boolean>(state => state.asideMenu);
    const activeMenu = useSelector<IInitialState, string>(state => state.activeMenu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDeviceWidthAction(deviceWidth));
    }, [deviceWidth])

    return <main className='main'>
        <div className='main__show' onClick={() => dispatch(setAsideActionCreator(true))} style={{
            display: (deviceWidth > 800 && asideMenu) ? 'none' : 'flex',
        }}>
            <IconShow/>
        </div>
        <Suspense fallback={<Preloader/>}>
            {activeMenu === 'main' && <MainPage/>}
            {activeMenu === 'about' && <About/>}
            {activeMenu === 'works' && <Works/>}
            {activeMenu === 'contacts' && <Contacts/>}
        </Suspense>
    </main>
}