import * as React from 'react';
import Image from 'next/image';

export type CardProps = {
  title: string;
  githubLink: string;
  deployedLink?: string;
  imageSrc: string;
  height: number;
  width: number;
};

const Card = ({
  title,
  githubLink,
  deployedLink,
  imageSrc,
  width,
  height
}: CardProps) => {
  const githubTitle = `Github link for ${title}`;
  const deployedTitle = `Deployed link for ${title}`;

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-white rounded-lg mt-5'>
        <Image src={imageSrc} className='rounded-md' alt='' height={height} width={width} />
      </div>
      <div className='bg-secondary shadow-lg rounded-lg -mt-4 w-64 h-56 flex flex-col justify-between'>
        <div className='py-5 px-5'>
          <span className='font-bold text-lg text-white'>{title}</span>
        </div>
        <div className='p-4 grid grid-cols-2 gap-1'>
          <a title={githubTitle} href={githubLink}>
            <div className='px-2 py-1 grid grid-cols-2 items-center bg-primary rounded'>
              <Image src='/github.png' alt='' width={28} height={32} />
              <span className='text-white text-sm pl-1'>Github</span>
            </div>
          </a>
          {deployedLink &&
            <a title={deployedTitle} href={deployedLink}>
              <div className='px-2 py-1 grid grid-cols-2 items-center bg-primary rounded'>
                <Image width={28} height={32} src='/deploy.png' alt='' />
                <span className='text-white text-sm pl-1'>Deploy</span>
              </div>
            </a>
          }
        </div>
      </div>
    </div>
  );
};
export default Card;
