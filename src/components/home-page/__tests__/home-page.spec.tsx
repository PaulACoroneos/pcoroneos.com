import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from '..';
import '@testing-library/jest-dom/extend-expect'

describe('<HomePage />', () => {
  test('Expect header with text content Recent Blog Posts', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Recent Blog Posts')).toBeInTheDocument();
  });
});
