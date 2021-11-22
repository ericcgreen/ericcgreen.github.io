import React, { useState } from 'react';
import Icon from './icon';

function Card({ card }) {
  const [open, toggleOpen] = useState(false);
  const { title, image, alt, href, github, accomplishments, description } = card;
  return (
    <button
      aria-label={`Click to ${open ? 'close' : 'open'} ${title} details`}
      className="relative bg-quaternary rounded-sm overflow-hidden shadow-lg text-left border border-gray-100"
      onClick={() => toggleOpen(!open)}>
      <img className="rounded-t-sm h-48 w-full object-cover object-center" src={image} alt={alt} />
      <p className="h-12 px-4 pt-4 mb-4 block flex-1 text-primary hover:text-secondary font-bold text-lg md:text-xl">{title}</p>
      <div className="px-4 pb-4 mt-4 h-auto md:h-24">
        <div className="text-primary leading-relaxed block">{description}</div>
      </div>
      <div className={`absolute h-full w-full rounded-sm bg-quaternary shadow-lg transition-all ease-in-out duration-500 z-10 ${open ? 'top-0' : 'top-96'}`}>
        <div className="flex items-center p-4">
          <div className="flex-1 text-xl text-primary font-bold">Accomplishments</div>
          <button className="group block" onClick={() => toggleOpen(!open)} aria-label={`Click to close ${title} details`}>
            <Icon name="x" className="w-5 h-5 text-primary group-hover:text-secondary" />
          </button>
        </div>
        <ul className="block text-primary py-4 pr-4 pl-8 list-outside list-disc">
          {accomplishments.map((acc) => {
            return <li key={acc}>{acc}</li>;
          })}
        </ul>
        <div className="absolute w-full bottom-0 p-4 border-t border-primary flex justify-center">
          <a
            href={href}
            aria-label={`Open ${title} in new tab`}
            target="_blank"
            rel="noreferrer"
            className="shadow-xl group flex items-center justify-center rounded-full bg-tertiary h-12 w-12 mr-4">
            <Icon name="external-link" className="w-6 h-6 text-primary group-hover:text-secondary" />
          </a>
          <a
            href={github}
            aria-label={`View ${title} in Github`}
            target="_blank"
            rel="noreferrer"
            className="shadow-xl group flex items-center justify-center rounded-full bg-tertiary h-12 w-12 mr-4">
            <Icon name="github" className="w-6 h-6 text-primary group-hover:text-secondary" />
          </a>
        </div>
      </div>
    </button>
  );
}

function Cards({ config }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {config.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

export default Cards;
