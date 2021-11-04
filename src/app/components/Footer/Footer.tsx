import React from "react";

import './Footer.scss';

import IconTG from './assets/telegram.svg?tsx';
import IconGit from './assets/github.svg?tsx';
import IconLinkedIn from './assets/lind.svg?tsx';

export const Footer = () => {

    return <footer className='main__footer'>
        <span className='main__footer__text'>2021 Designed by: <a className='main__footer__designer' href="tg://resolve?domain=@k_orlova_8888">Екатерина Орлова</a></span>
        <ul className='footer__social_list'>
            <li className='footer__social_list_item'>
                <a href="tg://resolve?domain=OtShellNick">
                    <IconTG/>
                </a>
            </li>
            <li className='footer__social_list_item'>
                <a href="https://github.com/OtShellNick" target='_blank'>
                    <IconGit/>
                </a>
            </li>
            <li className='footer__social_list_item'>
                <a href="https://www.linkedin.com/in/otshellnick/" target='_blank'>
                    <IconLinkedIn/>
                </a>
            </li>
        </ul>
    </footer>
}