import React from "react";
import classNames from "classnames";

import './Menu.scss';

import {MainPage} from "@components/Main/MainPage/MainPage";
import {About} from "@components/Main/About/About";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../../../store/store";
import {setMenuActionCreator} from "../../../../../actions/setMenuAction";
import {setAsideActionCreator} from "../../../../../actions/setAsideAction";

interface IMenuList {
    tag: string;
    title: string;
    cmp: React.ReactNode;
}

interface IProps {
    activeTab: string;
}

export const Menu = ({activeTab}: IProps) => {
    const deviceWidth = useSelector<IInitialState, number>(state => state.deviceWidth);
    const dispatch = useDispatch();

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
                    dispatch(setMenuActionCreator(item.tag));
                    deviceWidth < 800 && dispatch(setAsideActionCreator(false));
                }}>
                {item.title}
            </li>
        })}
    </ul>
}