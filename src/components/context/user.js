import { createContext } from 'react'

export const userData = {
    isLoggedIn: false,
    username: '',
    password: ''
}

export const reducer = (state, action) => {
    switch (action.type) {
      case 'login':
          console.log('here')
        return {
            ...state,
            isLoggedIn: true
        };
      case 'logout':
        return {
            ...state,
            isLoggedIn: false
        };
      default:
        return state
    }
  }

export const user = createContext(
    userData
);