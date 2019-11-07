import React, { Component } from 'react';
import Header from '../header';
import Popup from '../popup';
import Map from '../map';
import Profile from '../profile';
// import { isLoggedIn, login } from '../context/index';

// const isLoggedIn  = React.createContext(false);
import { userContext, appContext } from '../context';


export default class App extends Component {
    state = {
        isLoggedIn: false,
        showMap: false,
        showProfile: false,
        user: {
            email: '',
            nickname: '',
            name: '',
            surname: '',
            password: ''
        }
    }

    toggleLogginPopup = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })

        if (this.state.isLoggedIn) {
            this.toggleMap();
        }
    }

    handleLogin = (email, password) => {
        this.setState(prevState => {
            let updated = { ...prevState.user, email, password };
            return updated;
        });

        this.toggleLogginPopup();
        this.toggleMap();
    }

    toggleMap = () => {
        this.setState({ showMap: !this.state.showMap })
    }

    toggleProfile = () => {
        this.setState({ showProfile: !this.state.showProfile })
    }

    // handleOpenClose = (src) => {
    //     this.setState(() => {
    //         return this.toggleProperty(src);
    //     })
    // }

    // toggleProperty(propName) {
    //     const newState = Object.assign({}, this.state)

    //     newState[propName] = !newState[propName];

    //     return newState;
    // }

    render() {
        const { showMap, showProfile, isLoggedIn } = this.state;

        return (
            <div>
                <userContext.Provider value={isLoggedIn}>
                    <appContext.Provider value={{ toggleLogginPopup: this.toggleLogginPopup, toggleMap: this.toggleMap, toggleProfile: this.toggleProfile }}>
                        <Header />
                    </appContext.Provider>
                </userContext.Provider>

                <userContext.Provider value={{ isLoggedIn, handleLogin: this.handleLogin }}>
                    <Popup />
                </userContext.Provider>



                {showMap && <Map />}
                {showProfile && <Profile />}
            </div>
        )
    }
}