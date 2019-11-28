export const login = (email, password) => ({
  type: "LOGIN",
  payload: { email, password }
});
export const logout = () => ({ type: "LOGOUT" });
export const SIGNIN = (email, password, name, surname) => ({
  type: "SIGNIN",
  payload: { email, password, name, surname }
});
export const loginData = (email, password, responce) => ({
  type: "LOGIN_DATA",
  payload: { email, password, token: responce.token }
});
export const signUpData = (email, password, name, surname, responce) => ({
  type: "SIGNIN_DATA",
  payload: { email, password, name, surname, token: responce.token }
});
// export const cardData = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD_DATA', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const SAVE_CARD = responce => ({
  type: "SAVE_CARD",
  payload: {
    cardName: responce.cardName,
    cardNumber: responce.cardNumber,
    expiryDate: responce.expiryDate,
    cvc: responce.cvc
  }
});
export const POST_CARD = (cardNumber, expiryDate, cardName, cvc, responce) => ({
  type: "POST_CARD",
  payload: { cardNumber, expiryDate, cardName, cvc, token: responce.token }
});
export const GET_CARD = responce => ({
  type: "GET_CARD",
  payload: responce.token
});
export const SAVE_ADDRESSES = responce => ({
  type: "SAVE_ADDRESSES",
  payload: responce.addresses
});
export const GET_ADDRESSES = () => ({ type: "GET_ADDRESSES" });
export const GET_ROUTE = (address1, address2) => ({
  type: "GET_ROUTE",
  payload: { address1, address2 }
});

export const SAVE_ROUTE = responce => {
  console.log("TYT", responce);
  return {
    type: "SAVE_ROUTE",
    payload: { route: responce.route }
  };
};
