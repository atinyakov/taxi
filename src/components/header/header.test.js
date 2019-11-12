import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { appContext, userContext } from '../context';
describe('Header', () => {
    it("matches snapshot", () => {
        const { asFragment } = render(
            <appContext.Provider value={{ toggleLogginPopup: ()=>{}, toggleMap: ()=>{}, toggleProfile: ()=>{} }}>
                <userContext.Provider value={{ isLoggedin: true }}>
                    <Header />
                </userContext.Provider>
            </appContext.Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});



