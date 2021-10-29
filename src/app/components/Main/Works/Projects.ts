import resume from '@components/Main/Works/assets/img/resume.png';

interface IProjects {
    name: string;
    tags: Array<string>;
    img?: string;
}

export const PROJECTS: Array<IProjects> = [
    {
        name: 'Test',
        tags: ['test', 'test1'],
        img: resume
    },
    {
        name: 'Test2',
        tags: ['test2', 'test1'],
        img: resume
    },
    {
        name: 'Test3',
        tags: ['test3', 'test1'],
        img: resume
    },
    {
        name: 'Test4',
        tags: ['test4', 'test1'],
        img: resume
    },
    {
        name: 'Test5',
        tags: ['test3', 'test1'],
        img: resume
    },
]