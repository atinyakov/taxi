import { call, all, takeLatest, takeEvery, put } from "redux-saga/effects";
import { login, logout, loginData, signUpData, cardData } from "./action";

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

function postAuth({ email, password }) {
  let data = JSON.stringify({ email, password });

  return fetch("https://loft-taxi.glitch.me/auth", {
    body: data,
    method: "POST",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

function postCard({ cardNumber, expiryDate, cardName, cvc, token }) {
  let data = JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token });

  return fetch("https://loft-taxi.glitch.me/card", {
    body: data,
    method: "POST",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

function getCard({ token }) {
  // let data = JSON.stringify({ name, surname, expiryDate, cvc });

  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: "GET",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

function getAddressList() {
  return fetch(`https://loft-taxi.glitch.me/addressList`, {
    method: "GET",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

function getRoute({address1, address2}) {
  console.log('getRoute');
  
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
    {
      method: "GET",
      headers: {
        "content-Type": "application/json"
      }
    }
  ).then(responce => responce.json());
}

function postRegister({ email, password, name, surname }) {
  let data = JSON.stringify({ email, password, name, surname });
  return fetch("https://loft-taxi.glitch.me/register", {
    body: data,
    method: "POST",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

export function* registrationSaga() {
  yield takeEvery("SIGNIN", function*(action) {
    // console.log(action.payload);
    const responce = yield call(postRegister, action.payload);
    if (responce.success) {
      yield put({
        type: "SIGNIN_DATA",
        payload: { ...action.payload, token: responce.token }
      });
    } else {
      console.log("ERROR");
    }
  });
}

export function* addressListSaga() {
  yield takeEvery("GET_ADDRESSES", function*(action) {
    // console.log(action.payload);
    const responce = yield call(getAddressList);
    if (responce.addresses) {
      yield put({
        type: "SAVE_ADDRESSES",
        payload: { ...action.payload, addresses: responce.addresses }
      });
    } else {
      console.log("ERROR");
    }
  });
}

export function* routeSaga() {
  console.log('routeSAGA')
  yield takeEvery("GET_ROUTE", function*(action) {
    console.log('here');
    const responce = yield call(getRoute, action.payload);
    if (responce.length) {
      yield put({
        type: "SAVE_ROUTE",
        payload: { ...action.payload, route: responce }
      });
    } else {
      console.log("ERROR");
    }
  });
}
export function* authorizationSaga() {
  yield takeEvery("LOGIN", function*(action) {
    const responce = yield call(postAuth, action.payload);
    if (responce.success) {
      yield put({
        type: "LOGIN_DATA",
        payload: { ...action.payload, token: responce.token }
      });
      yield put({
        type: "GET_CARD",
        payload: { ...action.payload, token: responce.token }
      });
      yield put({
        type: "GET_ADDRESSES"
      });
    } else {
      console.log("ERROR");
    }
  });
}

export function* paymentSaga() {
  yield takeEvery("POST_CARD", function*(action) {
    const responce = yield call(postCard, action.payload);
    if (responce.success) {
      yield put({
        type: "SAVE_CARD",
        payload: {
          cardNumber: responce.cardNumber,
          expiryDate: responce.expiryDate,
          cardName: responce.cardName,
          cvc: responce.cvc
        }
      });
    } else {
      console.log("ERROR");
    }
  });
}

function* cardSaga() {
  yield takeEvery("GET_CARD", function*(action) {
    const responce = yield call(getCard, action.payload);

    if (responce.id !== "undefined") {
      yield put({
        type: "SAVE_CARD",
        payload: {
          cardNumber: responce.cardNumber,
          expiryDate: responce.expiryDate,
          cardName: responce.cardName,
          cvc: responce.cvc
        }
      });
    } else {
      console.log("NO CARD");
    }
  });
}

export function* dataSaga() {
  yield all([
    registrationSaga(),
    authorizationSaga(),
    paymentSaga(),
    cardSaga(),
    addressListSaga(),
    routeSaga()
  ]);
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
