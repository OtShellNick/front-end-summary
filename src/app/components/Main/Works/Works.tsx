import React, { useState } from "react";
import * as classnames from "classnames";

import './Works.scss';

import {ProjectCard} from "./ProjectCard/ProjectCard";
import {PROJECTS} from "./Projects";

interface INav {
    key: string;
    title: string;
}

const NAV: Array<INav> = [
    {
        key: 'all',
        title: 'Все'
    },
    {
        key: 'html',
        title: 'HTML'
    },
    {
        key: 'js',
        title: 'JavaScript'
    },
    {
        key: 'rjs',
        title: 'ReactJS'
    }
]

export const Works = () => {
    const [activeTab, setActiveTab] = useState('all');
    return <section className='works'>
        <h1 className='works__heading'>Мои работы</h1>
        <nav className='works__nav'>
            <ul className='works__nav_list'>
                {NAV.map(nav_item => <li
                    key={Math.random().toString(24)}
                    className={classnames({
                        'works__nav_list_item': true,
                        'works__nav_list_item-active': nav_item.key === activeTab
                    })}
                onClick={() => setActiveTab(nav_item.key)}>
                    {nav_item.title}
                </li>)}
            </ul>
        </nav>
        <div className='works__mobile'>
            <span className='works__mobile_text'>Фильтровать:</span>
            <select className='works__mobile_select' value={activeTab} onChange={e => setActiveTab(e.target.value)}>
                {NAV.map(option => {
                    return <option key={Math.random().toString(24)} value={option.key}>{option.title}</option>
                })}
            </select>
        </div>
        <main className='works__projects'>
            {PROJECTS.filter(project => activeTab === 'all' ? project : project.tags.includes(activeTab)).map(project => <ProjectCard key={Math.random().toString(24)} name={project.name} tags={project.tags} img={project.img}/>)}
        </main>
    </section>
}