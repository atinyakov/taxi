import { createContext } from 'react'

export const status = {
    loggedIn: false
};

// export const login = () => {

// }

export const isLoggedIn = createContext(
    status.loggedIn // значеине по умолчанию
);

export const login = createContext(
    {handleLogin : () => {
        console.log('here');
    }}
);