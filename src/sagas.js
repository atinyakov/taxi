import { call, all, takeEvery, put } from "redux-saga/effects";

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

export function getCard({ token }) {

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

export function getRoute({ address1, address2 }) {

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

    try {
    const responce = yield call(postRegister, action.payload);

      yield put({
        type: "SIGNIN_DATA",
        payload: { ...action.payload, token: responce }
      });
    } catch(e) {
      console.log(e.message);
    }

}

export function* addressListSaga() {

    try {
    const responce = yield call(getAddressList);

      yield put({
        type: "SAVE_ADDRESSES",
        payload: responce
      });
    } catch (e) {
      console.log(e.message);
    }
}

export function* routeSaga(action) {
    try {
    const responce = yield call(getRoute, action.payload);
      yield put({
        type: "SAVE_ROUTE",
        payload: {route: responce}
      });
    } catch (e) {
      console.log(e.message);
    }
}
export function* authorizationSaga(action) {
    try {
    const responce = yield call(postAuth, action.payload);
      yield put({
        type: "LOGIN_DATA",
        payload: { ...action.payload, responce }
      });
      yield put({
        type: "GET_CARD",
        payload: { ...action.payload, responce }
      });
      yield put({
        type: "GET_ADDRESSES"
      });
    } catch(e) {
      console.log(e.message);
    }

}

export function* paymentSaga(action) {

    try {
    const responce = yield call(postCard, action.payload);

      yield put({
        type: "SAVE_CARD",
        payload: responce
      });
    } catch(e) {
      console.log(e.message);
    }
 
}

export function* cardSaga(action) {

    try {
    const responce = yield call(getCard, action.payload);

      yield put({
        type: "SAVE_CARD",
        payload: responce
      });
    } catch(e) {
      console.log(e.message);
    }

}

export function* dataSaga() {
  all([
    yield takeEvery("GET_ADDRESSES", addressListSaga),
    yield takeEvery("SIGNIN", registrationSaga),
    yield takeEvery("GET_ROUTE", routeSaga),
    yield takeEvery("LOGIN", authorizationSaga),
    yield takeEvery("POST_CARD", paymentSaga ),
    yield takeEvery("GET_CARD", cardSaga)
  ]);
}
