

export const loginMiddleWare = store => next => action => {
    let user = {};
    switch (action.type) {
        case 'LOGIN_DATA':
            user = {
                userDataHandler: {
                    email: action.payload.nickname,
                    password: action.payload.password
                },
                loginHandler: {
                    isLoggedIn: true
                }

            };

            async function login() {
                let response = await fetch("https://loft-taxi.glitch.me/auth", {
                    body: JSON.stringify(user),
                    method: 'POST',
                    headers: {
                        "content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    console.log(response.message);

                    let oldData = localStorage.getItem('user')
                    if (oldData) {

                        user = {
                            userDataHandler: { ...JSON.parse(oldData).userDataHandler, ...user.userDataHandler },
                            loginHandler: { ...JSON.parse(oldData).loginHandler, ...user.loginHandler },
                        }
                    }

                    localStorage.setItem('user', JSON.stringify(user))
                    return next(action);

                }
            };

            login();

            break;
        case 'SIGNIN_DATA':

            user = {
                userDataHandler: {
                    email: action.payload.email,
                    password: action.payload.password,
                    name: action.payload.name,
                    surname: action.payload.surname,
                }
            };

            async function register() {
                let response = await fetch("https://loft-taxi.glitch.me/register", {
                    body: JSON.stringify(user),
                    method: 'POST',
                    headers: {
                        "content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    let oldData = localStorage.getItem('user')
                    if (oldData) {
                        user = {
                            userDataHandler: { ...JSON.parse(oldData).userDataHandler, ...user.userDataHandler },
                            loginHandler: { ...JSON.parse(oldData).loginHandler, ...user.loginHandler },
                        }
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    return next(action);

                }

            };

            register();

            break;

        case 'LOGOUT':

            user = {
                loginHandler: {
                    isLoggedIn: false
                }
            };

            async function logout() {
                let response = await fetch("https://loft-taxi.glitch.me/register", {
                    body: JSON.stringify(user),
                    method: 'POST',
                    headers: {
                        "content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    return next(action);
                }

            };

            logout();

            break;
            

        case 'CARD_DATA':

            let card = {
                cardHolder: '',
                cardNumber: '',
                cardExp: '',
                cvv: ''
            };

            async function addCard() {
                let response = await fetch("https://loft-taxi.glitch.me/register", {
                    body: JSON.stringify(card),
                    method: 'POST',
                    headers: {
                        "content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    let oldData = localStorage.getItem('card')
                    if (oldData) {
                        card = {
                            ...JSON.parse(oldData),
                            ...card
                        }
                    }
                    localStorage.setItem('card', JSON.stringify(card))
                    return next(action);

                }

            };

            addCard();

            break;
    }
}