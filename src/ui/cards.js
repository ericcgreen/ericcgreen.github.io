import React, { useState } from 'react';
import Icon from './icon';

function Card({ card }) {
  const [open, toggleOpen] = useState(false);
  const { title, image, alt, href, github, information, description } = card;
  return (
    <div
      aria-label={`Click to ${open ? 'close' : 'open'} ${title} details`}
      className="relative overflow-hidden text-left border border-gray-100 rounded-sm shadow-lg cursor-pointer bg-quaternary"
      onClick={() => toggleOpen(!open)}>
      <img className="object-cover object-center w-full h-48 rounded-t-sm" src={image} alt={alt} />
      <p className="flex-1 block h-12 px-4 pt-4 mb-4 text-lg font-bold text-primary hover:text-secondary md:text-xl">{title}</p>
      <div className="h-auto px-4 pb-4 mt-4 md:h-24">
        <div className="block leading-relaxed text-primary">{description}</div>
      </div>
      <div className={`absolute h-full w-full rounded-sm bg-quaternary shadow-lg transition-all ease-in-out duration-500 z-10 ${open ? 'top-0' : 'top-96'}`}>
        <div className="flex items-center p-4">
          <div className="flex-1 text-xl font-bold text-primary">Accomplishments</div>
          <button className="block group" onClick={() => toggleOpen(!open)} aria-label={`Click to close ${title} details`}>
            <Icon name="x" className="w-5 h-5 text-primary group-hover:text-secondary" />
          </button>
        </div>
        <ul className="block py-4 pl-8 pr-4 list-disc list-outside text-primary">
          {information.map((info) => {
            return <li key={info}>{info}</li>;
          })}
        </ul>
        <div className="absolute bottom-0 flex justify-center w-full p-4 border-t border-primary">
          <a
            href={href}
            aria-label={`Open ${title} in new tab`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 mr-4 rounded-full shadow-xl group bg-tertiary">
            <Icon name="external-link" className="w-6 h-6 text-primary group-hover:text-secondary" />
          </a>
          <a
            href={github}
            aria-label={`View ${title} in Github`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 mr-4 rounded-full shadow-xl group bg-tertiary">
            <Icon name="github" className="w-6 h-6 text-primary group-hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
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
