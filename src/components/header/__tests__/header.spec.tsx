import * as React from 'react';
import { renderWithTheme } from '../../../utils'
import { Header } from '..';

describe('<Header />', () => {
    test('Expect header with text content Recent Blog Posts', () => {
        const { getByText } = renderWithTheme(<Header />);
        expect(getByText('Blog')).toBeInTheDocument();
        expect(getByText('Portfolio')).toBeInTheDocument();
        expect(getByText('About')).toBeInTheDocument();
    });
});
