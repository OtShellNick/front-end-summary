import React from "react";

import './About.scss';

import IconAdaptive from './assets/adaptive.svg?tsx';
import IconCross from './assets/cross.svg?tsx';
import IconFonts from './assets/font.svg?tsx';
import IconMobile from './assets/mobile.svg?tsx';
import IconProgressive from './assets/progressive.svg?tsx';
import IconSeo from './assets/seo.svg?tsx';

export const About = () => {
    return <section className='about'>
        <h2 className='about__heading'>Обо мне</h2>
        <p className='about__description'>Разработка для меня не только работа, это мое самое большое хобби. Мне
            нравится узнавать новое,
            искать нестандартные подходы к решению задач и реализовывать идеи в виде сайтов.<br/>
            Моя профессия дает мне возможность узнавать новое каждый день и не стоять на месте.</p>
        <div className='about__i-can'>
            <h2 className='about__heading'>Вот что я могу</h2>
            <ul className='about__i-can__list'>
                <li className='about__i-can__item'>
                    <div className='about__i-can__item_img'>
                        <IconCross/>
                    </div>
                    <p className='about__i-can__item_description'>
                        Кросс-браузерная
                        и платформенная разработка
                    </p>
                </li>
                <li className='about__i-can__item'>
                    <div className='about__i-can__item_img'>
                        <IconProgressive/>
                    </div>
                    <p className='about__i-can__item_description'>
                        Прогрессивное улучшение
                        и изящная деградация
                    </p>
                </li>
                <li className='about__i-can__item'>
                    <div className='about__i-can__item_img'>
                        <IconAdaptive/>
                    </div>
                    <p className='about__i-can__item_description'>
                        Адаптивная
                        и отзывчивая верстка
                    </p>
                </li>
                <li className='about__i-can__item'>
                    <div className='about__i-can__item_img'>
                        <IconMobile/>
                    </div>
                    <p className='about__i-can__item_description'>
                        Мобильная адаптация
                    </p>
                </li>
                <li className='about__i-can__item'>
                    <div className='about__i-can__item_img'>
                        <IconFonts/>
                    </div>
                    <p className='about__i-can__item_description'>
                        Веб-шрифты
                    </p>
                </li>
                <li className='about__i-can__item'>
                    <div className='about__i-can__item_img'>
                        <IconSeo/>
                    </div>
                    <p className='about__i-can__item_description'>
                        Принципы SEO-оптимизации
                    </p>
                </li>
            </ul>
        </div>
        <div>
            <h2>Ключевые навыки</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div>
            <h2>Опыт работы</h2>
            <p>В настоящее время работаю в компании Sobix. Работаю над разработкой CRM системы для управления
                поставленными задачами, схожей с Trello, работаю над автоматизацией процессов с использованием Work
                Flow. </p>
        </div>
        <div>
            <h2>Обучение</h2>
            <h3>SkillBox</h3>
            <p>Профессия: <span>Front-and разработчик PRO</span></p>
            <h3>GeekBrains</h3>
            <p>Профессия: <span>Front-end разработчик PRO</span></p>
        </div>
    </section>
}