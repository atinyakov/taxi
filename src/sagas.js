import { call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { login, logout, loginData, signUpData, cardData } from './action';

let user = {
    userDataHandler: {
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
    user = {
        ...user,
        userDataHandler: {...user.userDataHandler}, email, password
    }

    fetch("https://loft-taxi.glitch.me/auth", {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        }
    }).then(responce => {
        responce.json();
    });
}

export function* handleUpload() {
    yield takeEvery('LOGIN_DATA', function* () {
        const result = yield call(postData);
        console.log(result)
    });
}

// export function* dataSaga() {
//     console.log('Hello Sagas!')
// }

// function* watchRegister() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// export function* postData(action) {
//     try {
//         const data = yield call(Api.fetchUser, action.payload.url)
//         yield put({ type: "FETCH_SUCCEEDED", data })
//     } catch (error) {
//         yield put({ type: "FETCH_FAILED", error })
//     }
// }

export function* dataSaga() {
    yield all([
        handleUpload(),
    ])
}