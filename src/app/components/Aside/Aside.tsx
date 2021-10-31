import React, {useEffect, useRef} from "react";

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
    const aside = useRef<HTMLDivElement>(null);
    const deviceWidth = window.screen.width;
    const card = document.querySelector('.card');

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (card && deviceWidth < 800 && stateAside && e.target instanceof Node && !aside.current?.contains(e.target)) {
                setAside('close');
            }
        }

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick)
    }, [stateAside])
    return <aside ref={aside} className={classNames(stateAside ? 'aside' : 'aside__closed')}>
        <Header onClose={() => setAside('close')} isOpen={stateAside}/>
        {stateAside && <Menu setMenu={setMenu} activeTab={activeTab} setAside={setAside}/>}
        {stateAside && <Footer/>}
    </aside>
}