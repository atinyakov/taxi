import { call, all, takeLatest, takeEvery, put } from 'redux-saga/effects';
import { login, logout, loginData, signUpData, cardData } from './action';

let data = {
    user: {
        name: '',
        surname: '',
        email: '',
        password: ''
    },
    loginHandler: {
        isLoggedIn: true
    },
    card: {
        expiryDate: '',
        cvc: ''
    }

};

function postData(email, password) {
    data = {
        email:email,
        password: password
    }

    return fetch("https://loft-taxi.glitch.me/auth", {
        body: JSON.stringify({email, password}),
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        }
    }).then(responce => {
        responce.json();
    });
}

export function* handleSignUp() {
    yield takeEvery('SIGNIN', function* (action) {
        // yield call(postData, action);
        yield put({ type: 'SIGNIN_DATA', payload: action.payload });
    });
}

export function* handleLogin() {
    yield takeEvery('LOGIN', function* (action) {
        const responce = yield call(postData, action.payload);
        console.log(responce) // не работает
        yield put({ type: 'LOGIN_DATA', payload: action.payload });
    });
}

export function* handleCard() {
    yield takeEvery('CARD', function* (action) {
        const responce = yield call(postData, action.payload);
        console.log(responce) // не работает
        yield put({ type: 'CARD_DATA', payload: action.payload });
    });
}
export function* dataSaga() {
    yield all([
        handleSignUp(),
        handleLogin(),
        handleCard()
    ])
}