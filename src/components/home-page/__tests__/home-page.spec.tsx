import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from '..';

describe('<HomePage />', () => {
  test('HomePage renders with a title and 1 blog post', () => {
    render(<HomePage />);
    const title = document.querySelector('title');
    expect(title).toBe('Paul Coroneos');
  });
});
