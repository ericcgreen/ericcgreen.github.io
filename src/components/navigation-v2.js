import React from 'react';
import Icon from '../ui/icon';

function MenuOptions({ sections, handleScrollTo, whichInView, id }) {
  const wrapperClassName = 'shadow-lg overflow-hidden text-primary fixed left-0 w-48 z-50 pb-16';
  const hoverEffectClassName = 'bg-white group-hover:bg-quaternary transition-transform duration-500 ease-in-out transform group-hover:translate-x-2';
  const activeClassName = 'bg-quaternary transform translate-x-2';
  const handleClick = (e, index) => {
    e.preventDefault();
    handleScrollTo(e, index);
  };
  return (
    <ul className={wrapperClassName} id={id} style={{ height: 'calc(100% + 4rem)' }}>
      {sections.map((section, index) => {
        const isActive = whichInView === index;
        if (section.id === 'intro') {
          return (
            <li className="group border-b border-tertiary box-content bg-primary">
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

export default function Navigation({ sections, handleScrollTo, whichInView }) {
  return (
    <nav className="hidden md:block bg-quaternary w-full overflow-hidden">
      <MenuOptions sections={sections} whichInView={whichInView} handleScrollTo={handleScrollTo} id="menu-desktop" />
    </nav>
  );
}
