import React from "react";

import './Aside.scss';

import {Header} from "@components/Aside/components/Header/Header";
import {Menu} from "@components/Aside/components/Menu/Menu";
import {Footer} from "@components/Aside/components/Footer/Footer";

interface IProps {
    setMenu: object,
    activeTab: object
}

export const Aside = ( props: IProps) => {
    const { setMenu, activeTab} = props;

    return <aside className='aside'>
        <Header/>
        <Menu setMenu={setMenu} activeTab={activeTab}/>
        <Footer/>
    </aside>
}