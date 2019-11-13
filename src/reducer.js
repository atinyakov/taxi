const initialState = {
    isLoggedIn: false
}

export function loginHandler (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return ({ ...state, isLoggedIn: true });
        case 'LOGOUT':
            return ({ ...state, isLoggedIn: false });
        default:
            return state;
    }
}
