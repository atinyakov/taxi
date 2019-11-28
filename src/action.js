
export const login = (email, password) => ({
  type: "LOGIN",
  payload: { email, password }
});
export const logout = () => ({ type: "LOGOUT" });
export const SIGNIN = (email, password, name, surname) => ({
  type: "SIGNIN",
  payload: { email, password, name, surname }
});
export const loginData = (email, password) => ({
  type: "LOGIN_DATA",
  payload: { email, password }
});
export const signUpData = (email, password, name, surname) => ({
  type: "SIGNIN_DATA",
  payload: { email, password, name, surname }
});
// export const cardData = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD_DATA', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const SAVE_CARD = (cardName, cardNumber, expiryDate, cvc) => ({
  type: "SAVE_CARD",
  payload: { cardName, cardNumber, expiryDate, cvc }
});
export const POST_CARD = (cardNumber, expiryDate, cardName, cvc, responce) => ({
  type: "POST_CARD",
  payload: { cardNumber, expiryDate, cardName, cvc, token: responce.token }
});
export const GET_CARD = token => ({ type: "GET_CARD", payload: token });
export const SAVE_ADDRESSES = responce => ({
  type: "SAVE_ADDRESSES",
  payload: responce.addresses
});
export const GET_ADDRESSES = () => ({ type: "GET_ADDRESSES" });
export const GET_ROUTE = (address1, address2) => ({
  type: "GET_ROUTE",
  payload: { address1, address2 }
});

export const SAVE_ROUTE = (route) => ({
  type: "SAVE_ROUTE",
  payload: { route }
});
