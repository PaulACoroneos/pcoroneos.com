import * as React from 'react';
import Card, { CardProps } from 'src/components/Card';

const data: CardProps[] = [
  {
    title: 'Free Code Camp Scientific Computing With Python Projects',
    githubLink:
      'https://github.com/PaulACoroneos/Scientific-Computing-with-Python-Projects',
    imageSrc: '/fcc.png',
    deployedLink:
      'https://repl.it/repls/folder/Scientific-Computing-with-Python-Projects',
    height: 160,
    width: 238
  },
];

const Portfolio = () =>
  <ul className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
    {data.map(cardData =>
      <li key={cardData.title}>
        <Card {...cardData} />
      </li>
    )}
  </ul>
  ;
export default Portfolio;
