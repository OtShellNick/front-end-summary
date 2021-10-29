import React from "react";

import './Modal.scss';
import ReactDOM from "react-dom";

export const Modal = () => {
    const node = document.querySelector('#modal-root');
    if(!node) return null;

    return ReactDOM.createPortal(<div>Modal</div>, node);
}