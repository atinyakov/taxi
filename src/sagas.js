import { call, all, takeLatest, takeEvery, put } from 'redux-saga/effects';
import { login, logout, loginData, signUpData, cardData } from './action';

// let data = {
//     user: {
//         name: '',
//         surname: '',
//         email: '',
//         password: ''
//     },
//     loginHandler: {
//         isLoggedIn: true
//     },
//     card: {
//         expiryDate: '',
//         cvc: ''
//     },
//     token: ''
// };

function postAuth(email, password) {
    let data = JSON.stringify({ email, password });

    return fetch("https://loft-taxi.glitch.me/auth", {
        body: data,
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        }
    }).then(responce => responce.json());
}

function postCard(name, surname, expiryDate, cvc) {
    let data = JSON.stringify({ name, surname, expiryDate, cvc });

    return fetch("https://loft-taxi.glitch.me/card", {
        body: data,
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        }
    }).then(responce => responce.json());
}

function postRegister({ email, password, name, surname }) {
    let data = JSON.stringify({ email, password, name, surname });
    return fetch("https://loft-taxi.glitch.me/register", {
        body: data,
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        }
    }).then(responce => responce.json());
}

export function* registrationSaga() {
    yield takeEvery('SIGNIN', function* (action) {
        console.log(action.payload)
        const responce = yield call(postRegister, action.payload);
        if (responce.success) {

            yield put({ type: 'SIGNIN_DATA', payload: { ...action.payload, token: responce.token } })
        } else {
            console.log('ERROR')
        }
    });
}

export function* authorizationSaga() {
    yield takeEvery('LOGIN', function* (action) {
        const responce = yield call(postAuth, action.payload);
        if (responce.success) {
            yield put({ type: 'LOGIN_DATA', payload: { ...action.payload, token: responce.token } })
        } else {
            console.log('ERROR')
        }
    });
}

export function* paymentSaga() {
    yield takeEvery('CARD', function* (action) {
        const responce = yield call(postCard, action.payload);
        if (responce.success) {
            yield put({ type: 'CARD', payload: { ...action.payload, token: responce.token } })
        } else {
            console.log('ERROR')
        }
    });
}

export function* dataSaga() {
    yield all([
        registrationSaga(),
        authorizationSaga(),
        paymentSaga()
    ])
}

// export function* rootSaga() {
//     yield all([
//         sagaLogger(),
//         yield takeEvery(fetchAddressListRequest, sagaGetAddressList),
//         yield takeEvery(fetchGetCardRequest, sagaGetCard),
//         yield takeEvery(fetchGetRouteListRequest, sagaGetRoute),
//         yield takeEvery(fetchAuthRequest, sagaPostAuth),
//         yield takeEvery(fetchRegisterRequest, sagaPostRegister),
//         yield takeEvery(fetchPostCardRequest, sagaPostCard),
//     ])
// }

// export function* sagaGetRoute(action) {
//     try {
//         const result = yield call(callGetRoute, action)
//         yield put(fetchGetRouteListSuccess(result))
//     } catch (error) {
//         yield put(fetchGetRouteListFailure(error))
//     }
// }