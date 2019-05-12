import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from '../src/components/header.components';

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Route path='/' component={Home} />
    <Route path='/' component={About} />
    <Route path='/' component={Contact} />
    <Route path='/' component={Header} />
    </div>
    </BrowserRouter>,
    document.getElementById('root')
    );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
