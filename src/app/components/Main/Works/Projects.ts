import resume from '@components/Main/Works/assets/img/resume.png';

interface IProjects {
    name: string;
    tags: Array<string>;
    img?: string;
}

export const PROJECTS: Array<IProjects> = [
    {
        name: 'Резюме',
        tags: ['html', 'rjs'],
        img: resume
    },
]