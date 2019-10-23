import React, { Component} from 'react';
import Header from '../header';
import Popup from '../popup';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Popup />
            </div>
        )
    }
}