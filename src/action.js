export const login = (email, password) => ({ type: 'LOGIN', payload: { email, password } });
export const logout = () => ({ type: 'LOGOUT' });
export const SIGNIN = (email, password, name, surname) => ({ type: 'SIGNIN', payload: { email, password, name, surname } });
export const loginData = (email, password) => ({ type: 'LOGIN_DATA', payload: { email, password } });
export const signUpData = (email, password, name, surname) => ({ type: 'SIGNIN_DATA', payload: { email, password, name, surname } });
export const cardData = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD_DATA', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const SAVE_CARD = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'SAVE_CARD', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const POST_CARD = (cardNumber, expiryDate, cardName, cvc, token) => ({ type: 'POST_CARD', payload: { cardNumber, expiryDate, cardName, cvc, token } });
export const GET_CARD = (token) => ({type: 'GET_CARD', payload: token});