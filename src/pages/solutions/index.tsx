import * as React from 'react';
import Card from 'src/components/Card';

const data = [
  {
    title: 'Free Code Camp',
    imageSrc: './fcc.png'
  },
  {
    title: 'LeetCode',
    imageSrc: './runner.jpg',
  },

];

const Solutions = () => 
  <ul className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
    {data.map(cardData => 
      <li key={cardData.title}>
        <Card {...cardData} />
      </li>
    )}
  </ul>
;
export default Solutions;
