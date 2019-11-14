export const login = () => ({type: 'LOGIN'});
export const logout = () => ({type: 'LOGOUT'});
export const loginData = (nickname, password) => ({type: 'LOGIN_DATA', payload: {nickname, password}});
export const signUpData = () => ({type: 'SIGNIN_DATA'});