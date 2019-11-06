import { createContext } from 'react'

export const status = {
    loggedIn: false
};

// export const login = () => {

// }
export const toggleStatus = () => {
    status.loggedIn = !status.loggedIn;
}

export const isLoggedIn = createContext(
    status.loggedIn // значеине по умолчанию
);

export const login = createContext(
    {handleLogin : (username, password) => {
        console.log(username, password);
    }}
);