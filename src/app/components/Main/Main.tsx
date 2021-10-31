import React, { Suspense, lazy } from "react";

import './Main.scss';

import {Preloader} from "@components/Preloader/Preloader";
const MainPage = lazy(() => import("@components/Main/MainPage/export"));
const About = lazy(() => import("@components/Main/About/export"));
const Works = lazy(() => import("@components/Main/Works/export"));
const Contacts = lazy(() => import("@components/Main/Contacts/export"));

import IconShow from './assets/list.svg?tsx';

interface IProps {
    activeTab: string,
    setMenu: (a: string) => void
    setAside: (e: string) => void
    stateAside: boolean
}

export const Main = ({ activeTab, setMenu, setAside, stateAside }: IProps) => {
    const deviceWidth = window.screen.width;
    return <main className='main'>
        <div className='main__show' onClick={() => setAside('open')} style={{
            display: (deviceWidth > 800 && stateAside) ? 'none' : 'flex',
        }}>
            <IconShow/>
        </div>
        <Suspense fallback={<Preloader/>}>
            {activeTab === 'main' && <MainPage setMenu={setMenu}/>}
            {activeTab === 'about' && <About/>}
            {activeTab === 'works' && <Works/>}
            {activeTab === 'contacts' && <Contacts/>}
        </Suspense>
    </main>
}