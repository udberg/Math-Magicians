import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

test('should render the Header component', () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    const header = screen.getByTestId('header');
    expect(header[0]).toHaveTextContent('Math Magician');
    expect(header[0]).toHaveTextContent('Home');
    expect(header[0]).toHaveTextContent('Calculator');
    expect(header[0]).toHaveTextContent('Quote');
});
