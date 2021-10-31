import React, {useState} from "react";

import './ProjectCard.scss';

import {Modal} from "@components/Modal/Modal";

interface IProjectCardProps {
    name: string;
    tags: Array<string>;
    img?: string;
}

export const ProjectCard = ({name, tags, img}: IProjectCardProps) => {
    const [isModal, setIsModal] = useState(false);

    console.log(img)
    return <div className='card'>
        <img className='card__img' src={img} alt="resume"/>
        <div className='card__hover'>
            <span className='card__name'>{name}</span>
            <button
                className='card__watch'
                onClick={e => {
                    e.preventDefault();
                    setIsModal(!isModal)
                }}>Посмотреть
            </button>
        </div>

        {isModal && <Modal onClose={() => setIsModal(false)}/>}
    </div>
}