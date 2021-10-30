import React, {useRef, useEffect} from "react";

import './Modal.scss';
import ReactDOM from "react-dom";

interface IModalProps {
    onClose: () => void;
}

export const Modal = ({ onClose }: IModalProps) => {
    const modal = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            console.log(e.target)
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
            Modal
        </div>
    </div>, node);
}