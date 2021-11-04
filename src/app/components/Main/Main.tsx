import React, {Suspense, lazy, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import './Main.scss';

import {Preloader} from "@components/Preloader/Preloader";

const MainPage = lazy(() => import("@components/Main/MainPage/export"));
const About = lazy(() => import("@components/Main/About/export"));
const Works = lazy(() => import("@components/Main/Works/export"));
const Contacts = lazy(() => import("@components/Main/Contacts/export"));

import IconShow from './assets/list.svg?tsx';
import IconMail from './assets/mail.svg?tsx';
import IconPhone from './assets/phone.svg?tsx';

import {setAsideActionCreator} from "@/actions/setAsideAction";
import {setDeviceWidthAction} from "@/actions/setDeviceWidthAction";
import {IInitialState} from "../../../store/store";

export const Main = () => {
    const deviceWidth = window.screen.width;
    const asideMenu = useSelector<IInitialState, boolean>(state => state.asideMenu);
    const activeMenu = useSelector<IInitialState, string>(state => state.activeMenu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDeviceWidthAction(deviceWidth));
    }, [deviceWidth])

    return <main className='main'>
        <div className='main__show' style={{
            display: (deviceWidth > 800 && asideMenu) ? 'none' : 'flex',
        }}>
            <IconShow onClick={() => dispatch(setAsideActionCreator(true))}/>
            <ul className='main__show_contacts-list'>
                <li>
                    <a className='link mail__link' href={`mailto:otshellnick@yandex.ru`}>
                        <IconMail/>
                    </a>
                </li>
                <li>
                    <a href="tel:+79782362326">
                        <IconPhone/>
                    </a>
                </li>
            </ul>
        </div>
        <Suspense fallback={<Preloader/>}>
            {activeMenu === 'main' && <MainPage/>}
            {activeMenu === 'about' && <About/>}
            {activeMenu === 'works' && <Works/>}
            {activeMenu === 'contacts' && <Contacts/>}
        </Suspense>
    </main>
}