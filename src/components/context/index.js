import { createContext } from 'react'

export const status = {
    loggedIn: true
};

export const login = (evt, email, password) => {
    evt.preventDefault();
    console.log('email:', email, 'password:', password)
}

export const isLoggedIn = createContext(
    status.loggedIn // значеине по умолчанию
);