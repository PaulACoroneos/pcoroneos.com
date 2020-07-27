import * as React from 'react'
import Link from 'next/link'
import paulcoroneos from '../img/paulcoroneos.jpg'

const Header:React.FC = () => 
    <header className='flex items-center py-10 justify-between bg-secondary rounded-lg mt-1'>
      <Link href='/'>
          <a aria-label='Paul Coroneos Home' className='flex inline-flex items-center md:px-2'>
            <img
              src={paulcoroneos}
              alt='Paul Coroneos Profile image'
              className='rounded-full h-8 wd-8 md:h-12 md:w-14'
            />
            <span className='text-sm md:text-2xl lg:text-3xl pl-2 text-white'>Paul Coroneos</span>
          </a>
      </Link>
      <nav className='items-center ml-6'>
        <Link href='/'>
          <a className='text-md md:text-2xl lg:text-3xl text-white hover:text-primary transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>Blog</a>
        </Link>
        <Link href='/portfolio'>
        <a className='text-md md:text-2xl lg:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>Portfolio</a>
        </Link>
        <Link href='/about'>
        <a className='text-md md:text-2xl lg:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>About</a>
        </Link>
      </nav>
    </header>
  

export default Header;
