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
import { call, takeEvery } from "redux-saga/effects";
import { GET_ADDRESSES } from "./action";

describe("SAGAS", () => {
  it('should dispatch action "GET_ADDRESSES" ', () => {
    const generator = addressListSaga();
    expect(generator.next().value).toEqual(call(getAddressList));
    expect(generator.next().done).toBeTruthy();
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
