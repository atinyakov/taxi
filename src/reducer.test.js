import { loginHandler, userDataHandler, cardDataHandler } from './reducer';

describe('reducers', () => {

    it('LOGIN', () => {
        const action = {
            type: 'LOGIN'
        };

        expect(loginHandler({ isLoggedIn: false }, action)).toEqual({
            isLoggedIn: true
        })
    })

    it('LOGOUT', () => {
        const action = {
            type: 'LOGOUT'
        };

        expect(loginHandler({ isLoggedIn: true }, action)).toEqual({
            isLoggedIn: false
        })
    })

    it('SIGNIN_DATA', () => {
        const action = {
            type: 'SIGNIN_DATA',
            payload: {
                email:'test@test.com',
                name:'Иван',
                surname: 'Petrov',
                password: 1234
            }
        };

        const initalState = {
            email: '',
            name: '',
            surname: '',
            password: ''
        }

        expect(userDataHandler(initalState, action)).toEqual({
            ...initalState, email: 'test@test.com',
            name: 'Иван',
            surname: 'Petrov',
            password: 1234
        })
    })

    it('LOGIN_DATA', () => {
        const action = {
            type: 'LOGIN_DATA',
            payload: {
                nickname:'test@test.com',
                password: 1234
            }
        };

        const initalState = {
            email: '',
            name: '',
            surname: '',
            password: ''
        }

        expect(userDataHandler(initalState, action)).toEqual({
            ...initalState,
            nickname: 'test@test.com',
            password: 1234
        })
    })

    it('CARD_DATA', () => {
        const action = {
            type: 'CARD_DATA',
            payload: {
                cardHolder: 'Ivan Petrov',
                cardNumber: '124 567 6543',
                cardExp: '202020',
                cvv: '123'
            }
        };

        const initalState = {
            cardHolder: '',
            cardNumber: '',
            cardExp: '',
            cvv: ''
        }

        expect(cardDataHandler(initalState, action)).toEqual({
            ...initalState,
            cardHolder: 'Ivan Petrov',
            cardNumber: '124 567 6543',
            cardExp: '202020',
            cvv: '123'
        })
    })

})