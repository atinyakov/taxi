import { combineReducers } from 'redux';

let initState = {
    user: {
        name: '',
        surname: '',
        email: '',
        password: ''
    },
    isLogin: false,
    card: {
        cardHolder: '',
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
                isLogin: true,
                token: action.payload.token
            });
        case 'LOGOUT':
            return ({ ...state, isLogin: false });
        case 'SIGNIN_DATA':
            return ({
                ...state,
                user: { ...state.user, name: action.payload.name, password: action.payload.password, email: action.payload.email, surname: action.payload.surname },
                token: action.payload.token
            });
        case 'CARD_DATA':
            return ({
                ...state,

                card: { ...state.card },
                cardHolder: action.payload.cardHolder,
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.cardExp,
                cvc: action.payload.cvv,

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