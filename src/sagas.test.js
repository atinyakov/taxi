import {
  registrationSaga,
  postRegister,
  authorizationSaga,
  paymentSaga,
  cardSaga,
  addressListSaga,
  getAddressList,
  routeSaga
} from "./sagas";
import { recordSaga } from "./testUtils";
import { call, takeEvery, put } from "redux-saga/effects";
import { GET_ADDRESSES, SAVE_ADDRESSES } from "./action";

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
        put({ type: "SIGNIN_DATA", payload: {...action.payload, token: undefined} })
      );
    });
  });
});

// describe.only('registrationSaga', () => {
//   postRegister = jest.fn();
//   selectors.isAuthenticated = jest.fn();

//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   it('auth failed', async () => {
//     const initalAction = { email: 'test@test.com', password: '123', name: 'John', surname: 'Doe' }

//     const dispatched = await recordSaga (
//       registrationSaga,
//       initalAction
//     );

//     expect(postRegister).toHaveBeenCalledWith({ email: 'test@test.com', password: '123', name: 'John', surname: 'Doe' })
//     // expect(dispatched).
//   })
// });
