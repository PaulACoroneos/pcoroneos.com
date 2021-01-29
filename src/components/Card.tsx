import * as React from 'react';

export type CardProps = {
  title: string;
  githubLink: string;
  deployedLink?: string;
  imageSrc: string;
};

const Card: React.FC<CardProps> = ({
  title,
  githubLink,
  deployedLink,
  imageSrc,
}) => {
  const githubTitle = `Github link for ${title}`;
  const deployedTitle = `Deployed link for ${title}`;

  return (
      <div className='flex flex-col items-center'>
        <div className='bg-white rounded-lg mt-5'>
          <img src={imageSrc} className='h-40 rounded-md' alt='' />
        </div>
        <div className='bg-secondary shadow-lg rounded-lg -mt-4 w-64 h-56 flex flex-col justify-between'>
          <div className='py-5 px-5'>
            <span className='font-bold text-lg text-white'>{title}</span>
          </div>
          <div className='p-4 grid grid-cols-2 gap-1'>
            <a title={githubTitle} href={githubLink}>
              <div className='px-2 py-1 grid grid-cols-2 items-center bg-primary rounded'>
                <img src='./github.png' alt='' />
                <span className='text-white text-md'>Github</span>
              </div>
            </a>
            {deployedLink && 
              <a title={deployedTitle} href={deployedLink}>
                <div className='px-2 py-1 grid grid-cols-2 items-center bg-primary rounded'>
                  <img width='40' height='40' src='./deploy.png' alt='' />
                  <span className='text-white text-md'>Deploy</span>
                </div>
              </a>
            }
          </div>
        </div>
      </div>
  );
};
export default Card;
