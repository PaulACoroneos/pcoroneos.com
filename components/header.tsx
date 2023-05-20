import * as React from "react";
import Link from "next/link";

const Header = () => (
  <header className="flex items-center md:rounded-lg py-2 md:py-8 justify-between bg-secondary max-w-3xl mx-auto px-1 md:px-4 sm:px-6 xl:max-w-5xl xl:px-0 md:mt-2">
    <Link
      href="/"
      aria-label="Paul Coroneos Home"
      className="inline-flex items-center md:px-2"
    >
      <img
        src="/paulcoroneos.jpg"
        alt="Paul Coroneos Profile image"
        className="rounded-full h-8 wd-8 md:h-24 md:w-24"
      />
      <span className="text-sm md:text-2xl lg:text-2xl xl:text-3xl pl-2 text-white whitespace-nowrap">
        Paul Coroneos
      </span>
    </Link>
    <nav className="items-center ml-6">
      <Link
        href="/blog"
        className="text-md md:text-2xl lg:text-2xl  xl:text-3xl text-white hover:text-primary transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer"
      >
        Blog
      </Link>
      <Link
        href="/leetcode"
        className="text-md md:text-2xl lg:text-2xl xl:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer"
      >
        Leetcode
      </Link>
      <Link
        href="/portfolio"
        className="text-md md:text-2xl lg:text-2xl xl:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer"
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        className="text-md md:text-2xl lg:text-2xl xl:text-3xl text-white hover:text-primary  transition duration-150 ease-in-out px-1 md:px-4 cursor-pointer"
      >
        About
      </Link>
    </nav>
  </header>
);

export default Header;
