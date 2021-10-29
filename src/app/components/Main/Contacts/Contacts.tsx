import React, {useRef, useState} from "react";

import './Contacts.scss';
import {sendMessage} from "@/app/actions/tsend";
import {Footer} from "@components/Footer/Footer";

export const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');


    return <section className='contact'>
        <div className='contact__wrapper'>
            <h2 className='contact__heading'>Хотите начать проект? Давайте обсудим!</h2>
            <form
                className='contact__form'
                onSubmit={(e) => {
                    e.preventDefault();

                    const data = {
                        name,
                        email,
                        text
                    }

                    sendMessage(data).then(() => {
                        setName('');
                        setEmail('');
                        setText('');
                    })
                }}>
                <input value={name} onChange={e => setName(e.target.value)} className='contact__input' placeholder='Ваше Имя' required/>
                <input value={email} onChange={e => setEmail(e.target.value)} className='contact__input' placeholder='Ваш email' required/>
                <textarea value={text} onChange={e => setText(e.target.value)} className='contact__input' rows={7} placeholder='Ваше сообщение'/>
                <button
                    className='contact__send'>Отправить
                </button>
            </form>
        </div>
        <Footer/>
    </section>
}