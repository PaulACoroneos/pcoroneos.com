import * as React from 'react';
import { PortfolioWrapper } from './portfolio-page.styles';
import { Hero } from '../hero';

const header = 'Portfolio';
const subHeader = 'Here are some projects I have worked on! For additional content please feel free to visit my GitHub link.'

export const PortfolioPage: React.FC = () =>
  <PortfolioWrapper>
    <Hero header={header} subHeader={subHeader} />
    <span>Check back soon!</span>
  </PortfolioWrapper>;
