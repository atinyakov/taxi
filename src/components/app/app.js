import React, { Component } from 'react';
import Header from '../Header';
import Popup from '../Popup';
import Map from '../Map';
import Profile from '../Profile';
import { userContext, appContext } from '../context';
import {Link, Route} from 'react-router-dom';


export default class App extends Component {
    state = {
        isLoggedIn: false,
        // showMap: false,
        // showProfile: false,
        user: {
            email: '',
            nickname: '',
            name: '',
            surname: '',
            password: ''
        }
    }

    toggleLogginPopup = () => {
        this.setState({ isLoggedIn: true })

        // if (this.state.isLoggedIn) {
        //     this.toggleMap();
        // }
    }

    logout = () => {
        this.setState({ isLoggedIn: false })
        // this.toggleLogginPopup()
    }

    handleLogin = (email, password) => {
        this.setState(prevState => {
            let updated = { ...prevState.user, email, password };
            return updated;
        });

        console.log('here')
        this.toggleLogginPopup();
        // this.toggleMap();
    }

    // toggleMap = () => {
    //     this.setState({ showMap: !this.state.showMap })
    // }

    // toggleProfile = () => {
    //     this.setState({ showProfile: !this.state.showProfile })
    // }

    render() {
        const { isLoggedIn } = this.state;

        return (
            <>
                <userContext.Provider value={{ isLoggedIn, handleLogin: this.handleLogin }}>
                    {/* <appContext.Provider value={{ toggleLogginPopup: this.toggleLogginPopup, toggleMap: this.toggleMap, toggleProfile: this.toggleProfile }}> */}
                    <appContext.Provider value={{ logout: this.logout }}>

                        {/* <Route exact path="/" component={Header} />  */}
                        <Header />
                    </appContext.Provider>

                    <Route path="/" exact component={Popup} />
                    <Route path="/map" component={Map} /> 
                    <Route path="/profile" component={Profile} />
                </userContext.Provider>
{/* 
                <userContext.Provider value={{ isLoggedIn, handleLogin: this.handleLogin }}>
                    <Route path="/" exact component={Popup} />
                </userContext.Provider>

                <Route path="/map" component={Map} /> 
                <Route path="/profile" component={Profile} /> */}
            </>
        )
    }
}