

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
                    let oldData = localStorage.getItem('user')
                    if (oldData) {

                        user = {
                            userDataHandler: {...JSON.parse(oldData).userDataHandler, ...user.userDataHandler}, 
                            loginHandler: {...JSON.parse(oldData).loginHandler,  ...user.loginHandler}, 
                        }
                    }

                    localStorage.setItem('user', JSON.stringify(user))
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
                            userDataHandler: {...JSON.parse(oldData).userDataHandler, ...user.userDataHandler}, 
                            loginHandler: {...JSON.parse(oldData).loginHandler,  ...user.loginHandler}, 
                        }
                    }
                    localStorage.setItem('user', JSON.stringify(user))
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
                    let oldData = localStorage.getItem('user')
                    if (oldData) {
                        user = {
                            ...JSON.parse(oldData),
                            ...user
                        }
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                }

            };

            logout();

            break;
    }

    return next(action);
}