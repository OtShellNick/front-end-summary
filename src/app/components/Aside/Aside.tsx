import React, {useEffect, useRef} from "react";

import './Aside.scss';

import {Header} from "@components/Aside/components/Header/Header";
import {Menu} from "@components/Aside/components/Menu/Menu";
import {Footer} from "@components/Aside/components/Footer/Footer";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../store/store";
import {setAsideActionCreator} from "@/actions/setAsideAction";

export const Aside = () => {
    const aside = useRef<HTMLDivElement>(null);
    const deviceWidth = useSelector<IInitialState, number>(state => state.deviceWidth);
    const asideMenu = useSelector<IInitialState, boolean>(state => state.asideMenu);
    const activeMenu = useSelector<IInitialState, string>(state => state.activeMenu);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (deviceWidth < 800 && asideMenu && e.target instanceof Node && !aside.current?.contains(e.target)) {
                console.log(deviceWidth < 800)
                dispatch(setAsideActionCreator(false));
            }
        }

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick)
    }, [asideMenu, deviceWidth])
    return <aside ref={aside} className={classNames(asideMenu ? 'aside' : 'aside__closed')}>
        <Header onClose={() => dispatch(setAsideActionCreator(false))} isOpen={asideMenu}/>
        {asideMenu && <Menu activeTab={activeMenu}/>}
        {asideMenu && <Footer/>}
    </aside>
}