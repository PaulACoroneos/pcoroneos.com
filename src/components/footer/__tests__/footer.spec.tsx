import * as React from 'react';
import { renderWithTheme } from '../../../utils';
import { Footer } from '..';


describe('<Footer />', () => {
  test('Expect Footer to render with content', () => {
    const { container } = renderWithTheme(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
