import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";

import './Modal.scss';

import IconClose from './assets/x-lg.svg?tsx';

interface IModalProps {
    onClose: () => void;
    name: string;
    img: string;
    description: string
}

export const Modal = ({ onClose, name, img, description }: IModalProps) => {
    const modal = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (e.target instanceof Node && !modal.current?.contains(e.target)) {
                onClose();
            }
        }

        const handlePress = (e: KeyboardEvent) => {
            if(e.keyCode === 27) {
                onClose();
            }
        }

        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handlePress)

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handlePress)
        }
    }, [])

    const node = document.querySelector('#modal-root');
    if(!node) return null;

    return ReactDOM.createPortal(<div className='modal__wrapper'>
        <div ref={modal} className='modal__root'>
            <IconClose className='modal__close' onClick={onClose}/>
            <img className='modal__img' src={img} alt={name}/>
            <h1 className='modal__heading'>{`Название проекта: ${name}`}</h1>
            {description && <p>{`Описание проекта: ${description}`}</p>}
        </div>
    </div>, node);
}