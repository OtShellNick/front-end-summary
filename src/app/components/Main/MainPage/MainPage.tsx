import React from "react";

import './MainPage.scss';

interface IProps {
    setMenu: (a: string) => void
}

export const MainPage = ( props: IProps ) => {
    const { setMenu } = props;
    return <section className='main-page'>
        <h1 className='main-page__heading'>Я, Гура Александр, Front-end разработчик</h1>
        <span className='main-page__description'>Кодирую красивые простые вещи, и люблю то, что я делаю.</span>
        <div className='main-page__my-works' onClick={() => setMenu('works')}>Мои работы</div>
    </section>
}