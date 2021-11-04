import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import './main.scss';

import {Aside} from "@components/Aside/Aside";
import {Main} from "@components/Main/Main";
import {rootReducer} from "@/store/store";

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <>
        <Provider store={store}>
            <Aside/>
            <Main/>
        </Provider>
    </>,
    document.getElementById('root')
);