import React from "react";
import classNames from "classnames";

import './Menu.scss';

import {MainPage} from "@components/Main/MainPage/MainPage";
import {About} from "@components/Main/About/About";

interface IMenuList {
    tag: string,
    title: string,
    cmp: React.ReactNode
}

interface IProps {
    setMenu: (a: string) => void,
    activeTab: string
}

export const Menu = ( props: IProps) => {
    const { setMenu, activeTab } = props;

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
                onClick={() => setMenu(item.tag)}>
                {item.title}
            </li>
        })}
    </ul>
}