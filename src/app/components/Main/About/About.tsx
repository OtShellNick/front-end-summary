import React from "react";

import './About.scss';

import IconAdaptive from './assets/adaptive.svg?tsx';
import IconCross from './assets/cross.svg?tsx';
import IconFonts from './assets/font.svg?tsx';
import IconMobile from './assets/mobile.svg?tsx';
import IconProgressive from './assets/progressive.svg?tsx';
import IconSeo from './assets/seo.svg?tsx';
import IconSkillBox from './assets/Skillbox.svg?tsx';
import IconGeekbrains from './assets/geekbrains.svg?tsx';

export const About = () => {
    return <section className='about'>
        <h2 className='about__heading'>Обо мне</h2>
        <p className='about__description'>Разработка для меня не только работа, это мое самое большое хобби. Мне
            нравится узнавать новое,
            искать нестандартные подходы к решению задач и реализовывать идеи в виде сайтов.<br/>
            Моя профессия дает мне возможность узнавать новое каждый день и не стоять на месте.</p>
        <section className='about__i-can'>
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
        </section>
        <section className='about__skills'>
            <h2 className='about__skills_heading'>Ключевые навыки</h2>
            <ul className='about__skills_list'>
                <li className='about__skills_list_item'>
                    <span>HTML и CSS</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>SCSS</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>JavaScript</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>NodeJS</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>Bootstrap</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>React</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>Redux</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>Git</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>NPM</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>WebPack</span>
                </li>
                <li className='about__skills_list_item'>
                    <span>Type Script</span>
                </li>
            </ul>
        </section>
        <section className='about__experience'>
            <h2 className='about__experience_heading'>Опыт работы</h2>
            <p className='about__experience_description'>В настоящее время работаю в компании Sobix. Работаю над разработкой CRM системы для управления
                поставленными задачами, схожей с Trello, работаю над автоматизацией процессов с использованием Work
                Flow. </p>
        </section>
        <section className='about__education'>
            <h2 className='about__education_heading'>Обучение</h2>
            <h3 className='about__education_subheading'>
                <IconSkillBox/>
            </h3>
            <p className='about__education_description'>Профессия: <span>Front-and разработчик PRO</span></p>
            <h3 className='about__education_subheading'>
                <IconGeekbrains/>
            </h3>
            <p className='about__education_description'>Профессия: <span>Front-end разработчик PRO</span></p>
        </section>
    </section>
}