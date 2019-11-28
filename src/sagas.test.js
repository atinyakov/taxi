import {
  registrationSaga,
  postRegister,
  authorizationSaga,
  postAuth,
  paymentSaga, postCard, 
  cardSaga, getCard,
  addressListSaga,
  getAddressList,
  routeSaga, getRoute
} from "./sagas";

import { call, put } from "redux-saga/effects";

describe("SAGAS", () => {
  describe("addressListSaga", () => {
    const generator = addressListSaga();

    it("should call the getAddressList function", () => {
      const expected = call(getAddressList);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it("should dispatch SAVE_ADDRESSES", () => {
      expect(generator.next().value).toEqual(
        put({ type: "SAVE_ADDRESSES", payload: undefined })
      );
    });
  });
  describe("registrationSaga", () => {
    const action = {
      payload: {
        email: "test",
        password: "test",
        name: "test",
        surname: "test"
      }
    };
    const generator = registrationSaga(action);

    it("should call the postRegister function", () => {
      const expected = call(postRegister, action.payload);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it("should dispatch SIGNIN_DATA", () => {
      expect(generator.next().value).toEqual(
        put({
          type: "SIGNIN_DATA",
          payload: { ...action.payload, token: undefined }
        })
      );
    });
  });

  describe("authorizationSaga", () => {
    const action = {
      payload: {
        email: "test",
        password: "test"
      }
    };
    const generator = authorizationSaga(action);

    it("should call the postAuth function", () => {
      const expected = call(postAuth, action.payload);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it("should dispatch LOGIN_DATA", () => {
      expect(generator.next().value).toEqual(
        put({
          type: "LOGIN_DATA",
          payload: { ...action.payload, token: undefined }
        })
      );
    });

    it("should dispatch GET_CARD", () => {
      expect(generator.next().value).toEqual(
        put({
          type: "GET_CARD",
          payload: { ...action.payload, token: undefined }
        })
      );
    });

    it("should dispatch GET_ADDRESSES", () => {
      expect(generator.next().value).toEqual(put({ type: "GET_ADDRESSES" }));
    });
  });

  describe("paymentSaga", () => {
    const action = {
      payload: {
        cardNumber: 'test',
        expiryDate: 'test',
        cardName: 'test',
        cvc: 'test',
        token: '123'
      }
    };
    const generator = paymentSaga(action);

    it("should call the postCard function", () => {
      const expected = call(postCard, action.payload);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it("should dispatch SAVE_CARD", () => {
      expect(generator.next().value).toEqual(
        put({
          type: "SAVE_CARD",
          payload: undefined
        })
      );
    });
  });

  describe("cardSaga", () => {
    const action = {
      payload: {
        token: '123'
      }
    };
    const generator = cardSaga(action);

    it("should call the postCard function", () => {
      const expected = call(getCard, action.payload);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it("should dispatch SAVE_CARD", () => {
      expect(generator.next().value).toEqual(
        put({
          type: "SAVE_CARD",
          payload: undefined
        })
      );
    });
  });

  describe("routeSaga", () => {
    const action = {
      payload: { address1:'address1', address2:'address2' }
    };
    const generator = routeSaga(action);

    it("should call the postCard function", () => {
      const expected = call(getRoute, action.payload);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
    });

    it("should dispatch SAVE_ROUTE", () => {
      expect(generator.next().value).toEqual(
        put({
          type: "SAVE_ROUTE",
          payload: {route: undefined}
        })
      );
    });
  });
});