import React from "react";

import IconMail from './assets/mail.svg?tsx';
import IconTel from './assets/phone.svg?tsx';
import IconTG from './assets/telegram.svg?tsx';
import IconGit from './assets/github.svg?tsx';
import IconLinkedIn from './assets/lind.svg?tsx';

import './Footer.scss';

export const Footer = () => {
    return <footer className='footer'>
        <ul className='footer__list'>
            <li className='footer__list_item'>
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
            </li>
            <li className='footer__list_item footer__list_item_contacts'>
                <IconTel/>
                <a href="tel:+79782362326">+79782362326</a>
            </li>
            <li className='footer__list_item footer__list_item_contacts'>
                <IconMail/>
                <a className='link mail__link' href={`mailto:otshellnick@yandex.ru`}>otshellnick@yandex.ru</a>
            </li>
            <li className='footer__list_item footer__list_item_copyright'>
                <span className='footer__list_item_copyright__text'>2021 Designed by: <a className='footer__list_item_copyright__designer' href="tg://resolve?domain=@k_orlova_8888">Екатерина Орлова</a></span>
            </li>
        </ul>
    </footer>
}