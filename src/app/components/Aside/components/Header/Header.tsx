import React from "react";

import './Header.scss';

import ava from '@components/Aside/components/Header/assets/ava.png';
import IconShow from './assets/x-lg.svg?tsx';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../store/store";

interface IHeaderProps {
    isOpen: boolean
    onClose: () => void;
}

export const Header = ({ onClose, isOpen }: IHeaderProps) => {
    const deviceWidth = useSelector<IInitialState, number>(state => state.deviceWidth);

    return <header className='header'>
        <div className='header__ava-wrapper mb-3' style={{
            display: isOpen ? 'flex' : 'none'
        }}>
            <img className='header__ava' src={ava} alt="avatar"/>
            <div className='header__ava-background'></div>
        </div>
        <div className='header__show' onClick={onClose} style={{
            display: deviceWidth < 800 ? 'block' : 'none'
        }}>
            <IconShow style={{
                transform: isOpen ? 'rotate(180deg)' : '',
                display: isOpen ? 'block' : 'none'
            }}/>
        </div>
        <div className='header__description' style={{
            display: isOpen ? 'flex' : 'none'
        }}>
            <span className='header__description_name mb-2'>Александр Гура</span>
            <h1 className='header__description_prof'>Front-end разработчик</h1>
        </div>
    </header>
}