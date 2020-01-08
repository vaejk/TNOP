import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/es/date-picker/style/css'
import { HashRouter } from 'react-router-dom';
import './scss/Head.scss'
import './scss/base.css'
import 'antd/dist/antd.css'
render(
    <HashRouter>
        <App />
    </HashRouter>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
