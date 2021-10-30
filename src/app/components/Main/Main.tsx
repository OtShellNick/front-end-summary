import React from "react";

import './Main.scss';

import {MainPage} from "@components/Main/MainPage/MainPage";
import {About} from "@components/Main/About/About";
import {Works} from "@components/Main/Works/Works";
import {Contacts} from "@components/Main/Contacts/Contacts";

import IconShow from './assets/aside-open.svg?tsx';

interface IProps {
    activeTab: string,
    setMenu: (a: string) => void
    setAside: (e: string) => void
    stateAside: boolean
}

export const Main = ({ activeTab, setMenu, setAside, stateAside }: IProps) => {
    return <main className='main'>
        <div className='main__show' onClick={() => setAside('open')} style={{
            display: stateAside ? 'none' : 'flex'
        }}>
            <IconShow/>
        </div>
        {activeTab === 'main' && <MainPage setMenu={setMenu}/>}
        {activeTab === 'about' && <About/>}
        {activeTab === 'works' && <Works/>}
        {activeTab === 'contacts' && <Contacts/>}
    </main>
}