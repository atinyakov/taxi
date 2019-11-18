export const login = () => ({type: 'LOGIN'});
export const logout = () => ({type: 'LOGOUT'});
export const loginData = (nickname, password) => ({type: 'LOGIN_DATA', payload: {nickname, password}});
export const signUpData = (email, name , surname, password) => ({type: 'SIGNIN_DATA', payload: {email, name , surname, password}});
export const cardData = (cardHolder, cardNumber , cardExp, cvv) => ({type: 'CARD_DATA', payload: {cardHolder, cardNumber , cardExp, cvv}});