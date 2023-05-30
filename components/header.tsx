import * as React from "react";
import Link from "next/link";

const Header = () => (
  <header className="bg-secondary mx-auto flex max-w-3xl items-center justify-between px-1 py-2 sm:px-6 md:mt-2 md:rounded-lg md:px-4 md:py-8 xl:max-w-5xl xl:px-0">
    <Link
      href="/"
      aria-label="Paul Coroneos Home"
      className="inline-flex items-center md:px-2"
    >
      <img
        src="/paulcoroneos.jpg"
        alt="Paul Coroneos Profile image"
        className="h-8 w-8 rounded-full md:h-24 md:w-24"
      />
      <span className="whitespace-nowrap pl-2 text-sm text-white md:text-2xl lg:text-2xl xl:text-3xl">
        Paul Coroneos
      </span>
    </Link>
    <nav className="ml-6 items-center">
      <Link
        href="/blog"
        className="hover:text-primary cursor-pointer  px-1 text-white transition duration-150 ease-in-out md:px-4 md:text-2xl lg:text-2xl xl:text-3xl"
      >
        Blog
      </Link>
      <Link
        href="/leetcode"
        className="hover:text-primary cursor-pointer px-1 text-white transition  duration-150 ease-in-out md:px-4 md:text-2xl lg:text-2xl xl:text-3xl"
      >
        Leetcode
      </Link>
      <Link
        href="/portfolio"
        className="hover:text-primary cursor-pointer px-1 text-white transition  duration-150 ease-in-out md:px-4 md:text-2xl lg:text-2xl xl:text-3xl"
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        className="hover:text-primary cursor-pointer px-1 text-white transition  duration-150 ease-in-out md:px-4 md:text-2xl lg:text-2xl xl:text-3xl"
      >
        About
      </Link>
    </nav>
  </header>
);

export default Header;
