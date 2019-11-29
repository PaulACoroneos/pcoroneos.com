import React from 'react';
import { HomePage } from '..';
import { renderWithTheme } from '../../../utils'

describe('<HomePage />', () => {
  test('Expect HomePage to render', () => {
    const { getByText } = renderWithTheme(<HomePage />);
    expect(getByText('Recent Blog Posts')).toBeInTheDocument();
  });
});
