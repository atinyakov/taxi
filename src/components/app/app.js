import React, { Component, useContext } from 'react';
import Header from '../Header';
import Popup from '../Popup';
import Map from '../Map';
import Profile from '../Profile';
import { userContext, appContext } from '../context';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {login, logout} from '../../action'


class App extends Component {
    state = {
        // isLoggedIn: false,
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

    // login = () => {
    //     this.setState({ isLoggedIn: true })

    //     // if (this.state.isLoggedIn) {
    //     //     this.toggleMap();
    //     // }
    // }

    logout = () => {
        this.setState({ isLoggedIn: false })
        // this.login()
    }
    
    handleLogin = (email, password) => {
        this.setState(prevState => {
            let updated = { ...prevState.user, email, password };
            return updated;
        });

        // console.log('here')
        // this.login();
        // this.toggleMap();
    }
    
    // toggleMap = () => {
        //     this.setState({ showMap: !this.state.showMap })
    // }
    
    // toggleProfile = () => {
        //     this.setState({ showProfile: !this.state.showProfile })
        // }
        
        render() {
            // const { isLoggedIn } = this.state;
            const { login, isLoggedIn } = this.props;

        return (
            <>
                <userContext.Provider value={{ isLoggedIn, handleLogin: this.handleLogin, login }}>
                    {/* <appContext.Provider value={{ login: this.login, toggleMap: this.toggleMap, toggleProfile: this.toggleProfile }}> */}
                    <appContext.Provider value={{ logout: this.logout }}>
                        <Header />
                    </appContext.Provider>

                    <LoginPage />

                    <Route path="/" exact component={Popup} />
                    <Route path="/map" component={Map} />
                    <Route path="/profile" component={Profile} />
                </userContext.Provider>
            </>
        )
    }
}

let LoginPage = ({ isAuthorized }) =>
    isAuthorized ? (
        <Redirect to="/map" />
    ) : (
            <Redirect to="/" exact component={Popup} />
        );

LoginPage = withAuth(LoginPage);

function withAuth(WrappedComponent) {
    return class AuthHOC extends Component {
        render() {

            const { ...rest } = this.props;

            return (
                <userContext.Consumer>
                    {contextProps => (
                        <WrappedComponent {...contextProps} {...rest} />
                    )}
                </userContext.Consumer>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login)
        }
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )( App )