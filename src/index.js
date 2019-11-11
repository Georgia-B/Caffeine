import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from './redux';
import App from './app';
import './index.css';

const { store } = createReduxStore();

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
