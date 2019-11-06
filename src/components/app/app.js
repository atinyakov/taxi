import React, { Component } from 'react';
import Header from '../header';
import Popup from '../popup';
import Map from '../map';
import Profile from '../profile';
import { isLoggedIn, status, login, toggleStatus } from '../context/index';
import { userData, user, reducer } from '../context/user';

// const isLoggedIn  = React.createContext(false);

export default function App() {

    const [state, dispatch] = React.useReducer(reducer, userData);

    // handleLogin = () => {
    //     this.setState({ isLoggedIn: !this.state.isLoggedIn })
    // }

    // toggleMap = () => {
    //     this.setState({ showMap: !this.state.showMap })
    // }

    // handleOpenClose = (src) => {
    //     this.setState(() => {
    //         return this.toggleProperty(src);
    //     })
    // }

    // render() {
    //     const { showMap, showProfile } = this.state;

    return (
        <div>
            <Header
            />
            <user.Provider value={{
                ...state,
                handleLogin: () =>
                    dispatch({ type: 'login' })
            }}>
                <user.Consumer>
                    {props =>
                        <Popup props={props} />
                    }
                </user.Consumer>
            </user.Provider>

            {/* 
                {showMap && <Map />}
                {showProfile && <Profile />} */}
        </div >
    )
    // }
}