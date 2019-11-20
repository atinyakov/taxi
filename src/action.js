export const login = (email, password) => ({ type: 'LOGIN', payload: { email, password }});
export const logout = () => ({ type: 'LOGOUT' });
export const SIGNIN = (email, name, surname, password) => ({ type: 'SIGNIN', payload: { email, name, surname, password } });
export const loginData = (email, password) => ({ type: 'LOGIN_DATA', payload: { email, password } });
export const signUpData = (email, name, surname, password) => ({ type: 'SIGNIN_DATA', payload: { email, name, surname, password } });
export const cardData = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD_DATA', payload: { cardHolder, cardNumber, cardExp, cvv } });
export const CARD = (cardHolder, cardNumber, cardExp, cvv) => ({ type: 'CARD', payload: { cardHolder, cardNumber, cardExp, cvv } });