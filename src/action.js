export const login = (email, password) => ({ type: 'LOGIN', payload: { email, password } });
export const logout = () => ({ type: 'LOGOUT' });
export const SIGNIN = (email, password, name, surname) => ({ type: 'SIGNIN', payload: { email, password, name, surname } });
export const loginData = (email, password) => ({ type: 'LOGIN_DATA', payload: { email, password } });
export const signUpData = (email, password, name, surname) => ({ type: 'SIGNIN_DATA', payload: { email, password, name, surname } });
export const cardData = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD_DATA', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const CARD = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD', payload: { cardHolder, cardNumber, cardExp, cvv } });