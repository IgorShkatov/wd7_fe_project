import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import routes from './router/routes'
import {Provider} from 'react-redux';
import configureStore from './store/configure_store';

const store = configureStore();

ReactDOM.render(

    <React.StrictMode>
        <Provider store = {store}>
        <App>
    { 
        routes
    },
        </App>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

