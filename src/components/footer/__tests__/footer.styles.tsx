import * as React from 'react';
import { renderWithTheme } from '../../../utils'
import { Footer } from '../footer';

describe('<Footer />', () => {
    test('Expect Footer to render with content', () => {
        const { container } = renderWithTheme(<Footer />);
        expect(container).toBeInTheDocument();
    });
});
