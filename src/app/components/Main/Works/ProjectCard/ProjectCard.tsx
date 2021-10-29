import React from "react";

import './ProjectCard.scss';

interface IProjectCardProps {
    name: string;
    tags: Array<string>;
    img?: string;
}

export const ProjectCard = ({ name, tags, img }: IProjectCardProps) => {
console.log(img)
    return <div className='card'>
        <img src={img} alt="resume"/>
        <div className='card__hover'>
            <span className='card__name'>{name}</span>
            <button className='card__watch'>Посмотреть</button>
        </div>
    </div>
}