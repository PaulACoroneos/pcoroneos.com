import * as React from 'react';
import Card from 'src/components/Card';

const data = [
  {
    title: 'Free Code Camp Scientific Computing With Python Projects',
    githubLink:
      'https://github.com/PaulACoroneos/Scientific-Computing-with-Python-Projects',
    imageSrc: './fcc.png',
    deployedLink:
      'https://repl.it/repls/folder/Scientific-Computing-with-Python-Projects',
  },
  {
    title: 'Where has Paul visited Around the world? 🗺️',
    githubLink: 'https://github.com/PaulACoroneos/Where-Has-Paul-Been',
    imageSrc: './world.png',
    deployedLink: 'https://where-has-paul-visited.netlify.app',
  },
  {
    title: 'What do I wear on my run?',
    githubLink: 'https://github.com/PaulACoroneos/What-Do-I-Wear-On-My-Run',
    imageSrc: './runner.jpg',
    deployedLink: 'https://whatdoiwearonmyrun.com',
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
