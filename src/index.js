import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {loginHandler} from './reducer'


let store = createStore(loginHandler);
// console.log(store.getState());
// store.dispatch({type: 'LOGIN'})
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
