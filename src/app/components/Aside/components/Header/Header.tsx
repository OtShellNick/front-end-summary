import React from "react";

import './Header.scss';

import ava from '@components/Aside/components/Header/assets/ava.png';


export const Header = () => {

    return <header className='header'>
        <div className='header__ava-wrapper mb-3'>
            <img className='header__ava' src={ava} alt="avatar"/>
            <div className='header__ava-background'></div>
        </div>
        <div className='header__description'>
            <span className='header__description_name mb-2'>Александр Гура</span>
            <h1 className='header__description_prof'>Front-end разработчик</h1>
        </div>
    </header>
}