import React from "react";

import './Modal.scss';
import ReactDOM from "react-dom";

export const Modal = () => {
    const node = document.querySelector('#modal-root');
    if(!node) return null;

    return ReactDOM.createPortal(<div className='modal__wrapper'>
        <div className='modal__root'>
            Modal
        </div>
    </div>, node);
}