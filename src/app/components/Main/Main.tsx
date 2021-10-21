import React from "react";

import './Main.scss';

import {MainPage} from "@components/Main/MainPage/MainPage";
import {About} from "@components/Main/About/About";
import {Works} from "@components/Main/Works/Works";
import {Contacts} from "@components/Main/Contacts/Contacts";

interface IProps {
    activeTab: string,
    setMenu: (a: string) => void
}

export const Main = ( props: IProps ) => {
    const { activeTab, setMenu} = props;
    return <main className='main'>
        {activeTab === 'main' && <MainPage setMenu={setMenu}/>}
        {activeTab === 'about' && <About/>}
        {activeTab === 'works' && <Works/>}
        {activeTab === 'contacts' && <Contacts/>}
    </main>
}