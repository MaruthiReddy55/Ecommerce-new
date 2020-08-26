import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import { Provider } from 'react-redux';
import { loadProducts } from './actionCreators';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

store.dispatch(loadProducts());

ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>,
    rootElement);

