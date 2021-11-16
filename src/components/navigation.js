import React, { useState } from 'react';
import Logo from '../assets/logo';

function MenuOptions({ sections, handleScrollTo, className, id }) {
  const wrapperClassName = className;
  const linkClassName = 'inline-block no-underline hover:text-secondary font-medium text-lg py-2 px-4 lg:-ml-2';
  const handleClick = (e, index) => {
    e.preventDefault();
    handleScrollTo(e, index)
  }
  return (
    <ul className={wrapperClassName} id={id}>
      {sections.map((section, index) => {
        return (
          <li key={`nav-${section.id}`}>
            <a className={linkClassName} href={`/${section.id}`} onClick={e => handleClick(e,index)}>
              {section.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navigation({ sections, handleScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between bg-quaternary shadow-lg py-3 px-6 h-18">
        <Logo title="Eric Christopher Green" className="w-32 h-9" />
        <MenuOptions sections={sections} handleScrollTo={handleScrollTo} className="hidden md:flex items-center justify-between text-base text-primary pt-4 md:pt-0" id="menu-desktop" />
        <div className="flex items-center justify-center w-12 h-12 md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </nav>
      <div className={`${isOpen ? 'h-48 opacity-100' : 'h-0 opacity-0'} w-full absolute top-18 inset-x-0 z-10 transition-all ease-in-out duration-700 md:hidden`}>
        <MenuOptions sections={sections} handleScrollTo={handleScrollTo} className="flex flex-col items-start justify-start text-base text-primary relative bg-white pb-4 shadow-lg" id="menu-mobile" />
      </div>
    </>
  );
}
