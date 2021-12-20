import * as React from 'react';
import Header from '../header';
import { render, screen } from '@testing-library/react';

describe('<Header/>', () => {
  render(<Header />)
  it('Check header', () => {
    screen.getByRole('link', { name: /paul coroneos home/i })
    screen.getByRole('img', { name: /paul coroneos profile image/i });
    screen.getByRole('link', { name: /blog/i })
    screen.getByRole('link', { name: /portfolio/i })
    screen.getByRole('link', { name: /about/i })
  });
})
