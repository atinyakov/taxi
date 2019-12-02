export const login = (email, password) => ({
  type: "LOGIN",
  payload: { email, password }
});
export const logout = () => ({ type: "LOGOUT" });
export const signInAction = (email, password, name, surname) => ({
  type: "SIGNIN",
  payload: { email, password, name, surname }
});
export const loginData = (email, password, token) => ({
  type: "LOGIN_DATA",
  payload: { email, password, token }
});
export const signUpData = (email, password, name, surname, responce) => ({
  type: "SIGNIN_DATA",
  payload: { email, password, name, surname, token: responce.token }
});
// export const cardData = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD_DATA', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const saveCard = responce => ({
  type: "SAVE_CARD",
  payload: {
    cardName: responce.cardName,
    cardNumber: responce.cardNumber,
    expiryDate: responce.expiryDate,
    cvc: responce.cvc
  }
});
export const postCard = ({ cardNumber, expiryDate, cardName, cvc}, token) => ({
  type: "POST_CARD",
  payload: { cardNumber, expiryDate, cardName, cvc, token }
});
export const getCard = token => ({
  type: "GET_CARD",
  payload: token
});
export const saveAddresses = responce => ({
  type: "SAVE_ADDRESSES",
  payload: responce.addresses
});
export const getAddresses = () => ({ type: "GET_ADDRESSES" });
export const getRoute = (address1, address2) => ({
  type: "GET_ROUTE",
  payload: { address1, address2 }
});

export const saveRoute = responce => {
  return {
    type: "SAVE_ROUTE",
    payload: { route: responce.route }
  };
};
