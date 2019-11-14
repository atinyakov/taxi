import React, { Component } from 'react';
import Header from '../Header';
import Popup from '../Popup';
import Map from '../Map';
import Profile from '../Profile';
import { Route, Redirect } from 'react-router-dom';

export default class App extends Component {
    render() {

        return (
            <>
                <Header />

                <LoginPage />

                <Route path="/" exact component={Popup} />
                <Route path="/map" component={Map} />
                <Route path="/profile" component={Profile} />
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
                <WrappedComponent {...rest} />
            )
        }
    }
}

