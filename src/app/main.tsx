import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './main.scss';

import {Aside} from "@components/Aside/Aside";
import {Main} from "@components/Main/Main";
import {StoreMenu} from "@/store/store";

const Store = createStore(StoreMenu);

const setMenu = (tab: string) => {
    Store.dispatch({type: tab});
}

const render = () => {

    ReactDOM.render(
        <>
            <Aside setMenu={setMenu} activeTab={Store.getState()}/>
            <Main setMenu={setMenu} activeTab={Store.getState()}/>
        </>,
        document.getElementById('root')
    );
}

render();
Store.subscribe(render)