import React, { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MenuIcon } from '@heroicons/react/solid';

const Link = ({ page, selected, setSelected }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selected === lowerCasePage ? 'text-white' : ''
      } text-xl hover:text-red transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelected(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default function Navbar({ topPage, selected, setSelected }) {
  const [isMenu, setIsMenu] = useState(false);
  const [navBackground, setNavBackground] = useState(topPage ? '' : 'bg-white');
  const isDesktop = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavBackground('bg-black');
      } else {
        setNavBackground(topPage ? '' : 'bg-white');
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topPage]);

  return (
    <nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold uppercase">Kali Amdie</h4>
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {/* Links for desktop */}
            <Link page="Home" selected={selected} setSelected={setSelected} />
            <Link page="Skills" selected={selected} setSelected={setSelected} />
            <Link page="Projects" selected={selected} setSelected={setSelected} />
            <Link page="Contact" selected={selected} setSelected={setSelected} />
          </div>
        ) : (
          <button
            className="rounded-full bg-black w-10 h-10 -center"
            onClick={() => setIsMenu(!isMenu)}
          >
            <MenuIcon className="h-6 w-6 text-blue-500 ml-2" />
          </button>
        )}
        {isMenu && !isDesktop && (
          <div className="fixed right-0 bottom-0 h-full bg-grey w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenu(!isMenu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 bg-black"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile menu content */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link page="Home" selected={selected} setSelected={setSelected} />
              <Link page="Skills" selected={selected} setSelected={setSelected} />
              <Link page="Projects" selected={selected} setSelected={setSelected} />
              <Link page="Contact" selected={selected} setSelected={setSelected} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
