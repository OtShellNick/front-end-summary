import React from "react";

import './Aside.scss';

import {Header} from "@components/Aside/components/Header/Header";
import {Menu} from "@components/Aside/components/Menu/Menu";
import {Footer} from "@components/Aside/components/Footer/Footer";
import classNames from "classnames";

interface IProps {
    setMenu: object,
    activeTab: object,
    setAside: (e: string) => void,
    stateAside: boolean
}

export const Aside = ( { setMenu, activeTab, setAside, stateAside }: IProps) => {
    return <aside className={classNames(stateAside ? 'aside' : 'aside__closed')}>
        <Header onClose={() => setAside('close')} isOpen={stateAside}/>
        {stateAside && <Menu setMenu={setMenu} activeTab={activeTab}/>}
        {stateAside && <Footer/>}
    </aside>
}