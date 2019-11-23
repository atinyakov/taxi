import { combineReducers } from 'redux';

let initState = {
    user: {
        name: '',
        surname: '',
        email: '',
        password: ''
    },
    isLoggedIn: false,
    card: {
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    },
    token: ''
}
export function loginHandler(state = initState, action) {
    switch (action.type) {
        case 'LOGIN_DATA':
            return ({
                ...state,
                user: { ...state.user, email: action.payload.email, password: action.payload.password },
                isLoggedIn: true,
                token: action.payload.token
            });
        case 'LOGOUT':
            return ({ ...state, isLoggedIn: false });
        case 'SIGNIN_DATA':
            return ({
                ...state,
                user: { ...state.user, name: action.payload.name, password: action.payload.password, email: action.payload.email, surname: action.payload.surname },
                token: action.payload.token
            });
        case 'SAVE_CARD':
            return ({
                ...state,

                card: { ...state.card ,
                cardName: action.payload.cardName,
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                cvc: action.payload.cvc}

            });
        case 'ERROR':
            return state;
        default:
            return state;
    }
}

export const taxiApp = combineReducers({
    loginHandler
    // userDataHandler,
    // cardDataHandler
})