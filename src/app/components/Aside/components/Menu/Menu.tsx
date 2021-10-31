import React from "react";
import classNames from "classnames";

import './Menu.scss';

import {MainPage} from "@components/Main/MainPage/MainPage";
import {About} from "@components/Main/About/About";

interface IMenuList {
    tag: string;
    title: string;
    cmp: React.ReactNode;
}

interface IProps {
    setMenu: (a: string) => void;
    setAside: (e: string) => void;
    activeTab: string;
}

export const Menu = ({setMenu, setAside, activeTab}: IProps) => {
    const deviceWidth = window.screen.width;

    const menu: Array<IMenuList> = [
        {
            tag: 'main',
            title: 'Главная',
            cmp: MainPage
        },
        {
            tag: 'about',
            title: 'Обо мне',
            cmp: About
        },
        {
            tag: 'works',
            title: 'Мои Работы',
            cmp: About
        },
        {
            tag: 'contacts',
            title: 'Обратная связь',
            cmp: About
        }
    ];

    return <ul className='menu__list'>
        {menu.map((item, index) => {
            return <li
                key={index}
                className={classNames({
                    'menu__list_item': true,
                    'menu__list_item__active': activeTab === item.tag
                })}
                onClick={() => {
                    setMenu(item.tag);
                    deviceWidth < 800 && setAside('close')
                }}>
                {item.title}
            </li>
        })}
    </ul>
}