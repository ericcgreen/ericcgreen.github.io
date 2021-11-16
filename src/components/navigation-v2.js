import React, { useState } from 'react';

function MenuOptions({ sections, handleScrollTo, className, id }) {
  const wrapperClassName = 'text-primary fixed left-0 w-48 z-50 pb-16';
  const linkClassName = 'inline-block no-underline hover:text-secondary font-medium text-lg py-2 px-4 lg:-ml-2';
  const handleClick = (e, index) => {
    e.preventDefault();
    handleScrollTo(e, index);
  };
  return (
    <ul className={wrapperClassName} id={id} style={{ height: 'calc(100% + 4rem)' }}>
      {sections.map((section, index) => {
        if (section.id === 'intro') {
          return (
            <li className="border-b border-tertiary box-content px-7 pt-7 pb-8">
              <a href={`/${section.id}`} onClick={(e) => handleClick(e, index)}>
                <h1 className="text-lg sm:text-xl md:text-3xl">Eric C. Green</h1>
                <span className="text-sm">Full Stack Developer</span>
              </a>
            </li>
          );
        }
        return (
          <li key={`nav-${section.id}`}>
            <a className={linkClassName} href={`/${section.id}`} onClick={(e) => handleClick(e, index)}>
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
    <nav className="hidden md:block bg-quaternary w-full overflow-hidden">
      <MenuOptions sections={sections} handleScrollTo={handleScrollTo} id="menu-desktop" />
    </nav>
  );
}
