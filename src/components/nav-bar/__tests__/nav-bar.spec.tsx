import * as React from 'react';
import { renderWithTheme } from '../../../utils'
import { NavBar } from '..';

describe('<Header />', () => {
    test('Expect NavBar to contain 3 anchor links', () => {
        const { getByText } = renderWithTheme(<NavBar />);
        expect(getByText('Blog')).toBeInTheDocument();
        expect(getByText('Portfolio')).toBeInTheDocument();
        expect(getByText('About')).toBeInTheDocument();
    });
});
