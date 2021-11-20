import React, { useState } from 'react';
import Icon from '../ui/icon';

function DestopMenuOptions({ sections, handleScrollTo, id }) {
  const wrapperClassName = 'shadow-lg overflow-hidden text-primary fixed left-0 w-48 z-50 pb-16 bg-quaternary';
  const hoverEffectClassName = 'bg-quaternary group-hover:bg-quaternary transition-transform duration-500 ease-in-out transform group-hover:translate-x-2';
  const activeClassName = 'bg-quaternary transform translate-x-2';
  const handleClick = (e, index) => {
    e.preventDefault();
    handleScrollTo(e, index);
  };
  return (
    <ul className={wrapperClassName} id={id} style={{ height: 'calc(100% + 4rem)' }}>
      {sections.map((section, index) => {
        const isActive = false;
        if (section.id === 'intro') {
          return (
            <li key={`nav-${section.id}`} className="group border-b border-tertiary box-content bg-primary">
              <a href={`/${section.id}`} onClick={(e) => handleClick(e, index)} className={`block px-7 pt-7 pb-8 ${isActive ? activeClassName : hoverEffectClassName}`}>
                <h1 className="text-lg sm:text-xl md:text-3xl">Eric C. Green</h1>
                <span className="text-sm">Full Stack Developer</span>
              </a>
            </li>
          );
        }
        return (
          <li key={`nav-${section.id}`} className={`group ${section.bgColor}`}>
            <a
              className={`no-underline flex items-center font-bold py-3 ${isActive ? activeClassName : hoverEffectClassName}`}
              href={`/${section.id}`}
              aria-label={`Navigate to the ${section.title} section`}
              onClick={(e) => handleClick(e, index)}>
              {section.icon ? <Icon name={section.icon} className={`w-6 h-6 inline-block mx-4 ${section.iconColor}`} /> : null}
              <span className="inline-block text-primary">{section.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function MobileMenuOptions({ handleScrollTo, toggleNav, setToggleNav }) {
  const handleClick = (e, index) => {
    e.preventDefault();
    handleScrollTo(e, index);
  };
  return (
    <>
      <button href="/" onClick={() => setToggleNav(!toggleNav)} className="block relative float-left z-20 pt-3.5 px-3.5">
        <Icon name="menu" className="w-9 h-9" />
      </button>

      <div className="absolute inset-x-0 w-full flex justify-center">
        <a href="/" onClick={(e) => handleClick(e, 0)} className="block text-center pt-3.5">
          <h1 className="text-2xl font-bold text-primary leading-5">Eric C. Green</h1>
          <span className="text-sm">Full Stack Developer</span>
        </a>
      </div>
    </>
  );
}

export default function Navigation({ sections, handleScrollTo }) {
  const [toggleNav, setToggleNav] = useState(false);
  const handleClick = (e, index) => {
    e.preventDefault();
    handleScrollTo(e, index);
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <nav className="hidden md:block bg-quaternary w-full overflow-hidden">
        <DestopMenuOptions sections={sections} handleScrollTo={handleScrollTo} id="menu-desktop" />
      </nav>
      <nav className="block md:hidden bg-quaternary w-full fixed inset-x-0 top-0 h-16 z-10 shadow-lg">
        <MobileMenuOptions sections={sections} handleScrollTo={handleScrollTo} toggleNav={toggleNav} setToggleNav={setToggleNav} id="menu-mobile" />
      </nav>

      {toggleNav && (
        <button
          type="button"
          aria-label="Toggle visibility of mobile navigation menu"
          onClick={() => setToggleNav(!toggleNav)}
          className={`fixed inset-0 bg-black h-full w-full z-30 bg-opacity-60 transition-opacity ease-in-out duration-500 ${toggleNav ? 'opacity-100' : 'opacity-0'}`}></button>
      )}

      <ul
        className={`fixed inset-y-0 bg-quaternary shadow-lg transition-all ease-in-out duration-500 w-48 ${toggleNav ? 'left-0' : '-left-48'} z-30`}
        style={{ height: 'calc(100% + 60px)', paddingBottom: '60px' }}>
        {sections.map((section, index) => {
          if (section.id === 'intro') {
            return null;
          }
          return (
            <li key={`nav-${section.id}`}>
              <a
                className={`no-underline flex items-center font-bold py-4`}
                href={`/${section.id}`}
                aria-label={`Navigate to the ${section.title} section`}
                onClick={(e) => handleClick(e, index)}>
                {section.icon ? <Icon name={section.icon} className={`w-6 h-6 inline-block mx-4 ${section.iconColor}`} /> : null}
                <span className="inline-block text-primary">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
