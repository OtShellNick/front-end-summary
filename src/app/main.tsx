import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './main.scss';

import {Aside} from "@components/Aside/Aside";
import {Main} from "@components/Main/Main";
import {StoreMenu, StoreAside} from "@/store/store";

const Store = createStore(StoreMenu);
const AsideStore = createStore(StoreAside)

const setMenu = (tab: string) => {
    Store.dispatch({type: tab});
}

const setAside = (tab: string) => {
    AsideStore.dispatch({type: tab});
}

const render = () => {
    ReactDOM.render(
        <>
            <Aside setAside={setAside} stateAside={AsideStore.getState()} setMenu={setMenu} activeTab={Store.getState()}/>
            <Main setAside={setAside} stateAside={AsideStore.getState()} setMenu={setMenu} activeTab={Store.getState()}/>
        </>,
        document.getElementById('root')
    );
}

render();
Store.subscribe(render);
AsideStore.subscribe(render)