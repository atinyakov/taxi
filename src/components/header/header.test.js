import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    // it('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<Header />, div);
    // });

    afterEach(cleanup);

    it("matches snapshot", () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});