import React from "react";

import './MainPage.scss';
import {useDispatch} from "react-redux";
import {setMenuActionCreator} from "../../../../actions/setMenuAction";

export const MainPage = () => {
    const dispatch = useDispatch();

    return <section className='main-page'>
        <h1 className='main-page__heading'>Я, Гура Александр, Front-end разработчик</h1>
        <span className='main-page__description'>Кодирую красивые простые вещи, и люблю то, что я делаю.</span>
        <button className='main-page__my-works' onClick={(e) => {
            e.preventDefault();
            dispatch(setMenuActionCreator('works'))
        }}>Мои работы
        </button>
    </section>
}