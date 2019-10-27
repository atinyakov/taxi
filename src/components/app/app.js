import React, { Component} from 'react';
import Header from '../header';
import Popup from '../popup';
import Map from '../map';
import Profile from '../profile';

export default class App extends Component {
    state = {
        isLoggedIn: true,
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

    handleLogin = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }

    toggleMap = () => {
        this.setState({showMap: !this.state.showMap})
    }

    handleOpenClose = (src)  => {
        // console.log('here')
        this.setState( () => {
            return this.toggleProperty(src);
        })
    }

    toggleProperty (propName) {
        const newState = Object.assign({}, this.state)

        newState[propName] = !newState[propName];
        // console.log(newState)
        return newState;
    }

    render() {
        const {isLoggedIn, showMap, showProfile} = this.state;

        return (
            <div>
                <Header 
                    handleClick={this.handleOpenClose}
                    login = {this.handleLogin}
                    showMap={this.toggleMap}
                />
                <Popup showPopup = {!isLoggedIn}/>
                {showMap && <Map />}
                {showProfile && <Profile />}
            </div>
        )
    }
}