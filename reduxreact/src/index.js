import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';




const reducer = (state = 0, action) => {
    switch(action.type) {
    case 'INCREMENT':
    return state = state + 1;
    case 'DECREMENT':
    return state = state - 1;
    default:
    return state;
    }

    };

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

