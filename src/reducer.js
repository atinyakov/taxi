import { combineReducers } from 'redux';

// const initialState = {
//     isLoggedIn: false,
//     user: {
//         email: '',
//         nickname: '',
//         name: '',
//         surname: '',
//         password: ''
//     }
// }

function loginHandler(state = { isLoggedIn: false }, action) {
    switch (action.type) {
        case 'LOGIN':
            return ({ ...state, isLoggedIn: true });
        case 'LOGOUT':
            return ({ ...state, isLoggedIn: false });
        default:
            return state;
    }
}


function userDataHandler(state = {

    email: '',
    nickname: '',
    name: '',
    surname: '',
    password: ''

}, action) {
    switch (action.type) {
        case 'LOGIN_DATA':
            return ({
                ...state,

                nickname: action.payload.nickname,
                password: action.payload.password

            });
        case 'SIGNIN_DATA':
            return ({
                ...state,

                email: action.payload.email,
                name: action.payload.name,
                surname: action.payload.surname,
                password: action.payload.password

            });
        default:
            return state;
    }
}

export const taxiApp = combineReducers({
    loginHandler,
    userDataHandler
})