import * as React from 'react'
import Link from 'next/link'

const Header:React.FC = () => 
    <header className='flex items-center md:rounded-lg py-2 md:py-10 justify-between bg-secondary max-w-3xl mx-auto px-1 md:px-4 sm:px-6 xl:max-w-5xl xl:px-0 md:mt-2'>
      <Link href='/'>
          <a aria-label='Paul Coroneos Home' className='inline-flex items-center md:px-2'>
            <img
              src='/paulcoroneos.jpg'
              alt='Paul Coroneos Profile image'
              className='rounded-full h-8 wd-8 md:h-12 md:w-14'
            />
            <span className='text-sm md:text-2xl lg:text-2xl xl:text-3xl pl-2 text-white whitespace-nowrap'>Paul Coroneos</span>
          </a>
      </Link>
      <nav className='items-center ml-6'>
        <Link href='/blog'>
          <a className='text-md md:text-2xl lg:text-2xl  xl:text-3xl text-white hover:text-primary transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>Blog</a>
        </Link>
        <Link href='/leetcode'>
        <a className='text-md md:text-2xl lg:text-2xl xl:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>Leetcode</a>
        </Link>
        <Link href='/portfolio'>
        <a className='text-md md:text-2xl lg:text-2xl xl:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>Portfolio</a>
        </Link>
        <Link href='/about'>
        <a className='text-md md:text-2xl lg:text-2xl xl:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer'>About</a>
        </Link>
      </nav>
    </header>
  

export default Header;
