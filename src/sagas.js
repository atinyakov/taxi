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

export function postAuth({ email, password }) {
  let data = JSON.stringify({ email, password });

  return fetch("https://loft-taxi.glitch.me/auth", {
    body: data,
    method: "POST",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

export function postCard({ cardNumber, expiryDate, cardName, cvc, token }) {
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

export function getAddressList() {
  return fetch(`https://loft-taxi.glitch.me/addressList`, {
    method: "GET",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

function getRoute({ address1, address2 }) {
  // console.log("getRoute");

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

export function postRegister({ email, password, name, surname }) {
  let data = JSON.stringify({ email, password, name, surname });
  return fetch("https://loft-taxi.glitch.me/register", {
    body: data,
    method: "POST",
    headers: {
      "content-Type": "application/json"
    }
  }).then(responce => responce.json());
}

export function* registrationSaga(action) {
  // yield takeEvery("SIGNIN", function*(action) {
    // console.log(action.payload);
    try {
    const responce = yield call(postRegister, action.payload);
    // if (responce.success) {
      yield put({
        type: "SIGNIN_DATA",
        // payload: { ...action.payload, token: responce }
        payload: { ...action.payload }
      });
    } catch(e) {
      console.log(e.message);
    }
  // });
}

export function* addressListSaga() {
  // yield takeEvery("GET_ADDRESSES", function*(action) {
    // console.log(action.payload);
    try {
    const responce = yield call(getAddressList);
    // if (responce.addresses) {
      yield put({
        type: "SAVE_ADDRESSES",
        payload: responce
      });
    } catch (e) {
      console.log(e.message);
    }
  // });
}

export function* routeSaga(action) {

  // yield takeEvery("GET_ROUTE", function*(action) {

    const responce = yield call(getRoute, action.payload);
    if (responce.length) {
      yield put({
        type: "SAVE_ROUTE",
        payload: { ...action.payload, route: responce }
      });
    } else {
      console.log("ERROR");
    }
  // });
}
export function* authorizationSaga(action) {
  // yield takeEvery("LOGIN", function*(action) {
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
  // });
}

export function* paymentSaga(action) {
  // yield takeEvery("POST_CARD", function*(action) {
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
  // });
}

function* cardSaga(action) {
  // yield takeEvery("GET_CARD", function*(action) {
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
  // });
}

export function* dataSaga() {
  all([
    yield takeEvery("GET_ADDRESSES", addressListSaga),
    yield takeEvery("SIGNIN", registrationSaga),
    yield takeEvery("GET_ROUTE",routeSaga),
    yield takeEvery("LOGIN", authorizationSaga),
    yield takeEvery("POST_CARD", paymentSaga ),
    yield takeEvery("GET_CARD", cardSaga)
  ]);
}
