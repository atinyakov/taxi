import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { taxiApp } from './reducer';
// import { loginMiddleWare } from './middleware';
import createSagaMiddleware from 'redux-saga';
import { dataSaga } from './sagas'

let prevState = localStorage.getItem('user');
let userData = { ...JSON.parse(prevState) };

const sagaMiddleware = createSagaMiddleware();


let store = createStore(taxiApp, userData
    , compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(dataSaga);
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
