import React from 'react';
import Icon from './icon';

export default function Contact() {
  return (
    <div className="container mb-36">
      <p className="my-4 flex">
        <a
          aria-label="Email Eric"
          href="mailto:eric@ericgreen.dev"
          target="_blank"
          rel="noreferrer"
          className="shadow-lg bg-tertiary h-12 w-12 rounded-full flex items-center justify-center text-xl text-primary hover:text-secondary">
          <Icon name="mail" className="w-6 h-6" />
        </a>
        <a aria-label="Email Eric" href="mailto:eric@ericgreen.dev" target="_blank" rel="noreferrer" className="ml-2 p-2 inline text-xl text-primary hover:text-secondary">
          eric@ericgreen.dev
        </a>
      </p>
      <p className="my-4 flex">
        <a
          aria-label="View Eric on Github"
          href="https://github.com/ericcgreen"
          target="_blank"
          rel="noreferrer"
          className="shadow-lg bg-tertiary h-12 w-12 rounded-full flex items-center justify-center text-xl text-primary hover:text-secondary">
          <Icon name="github" className="w-6 h-6" />
        </a>
        <a
          aria-label="View Eric on Github"
          href="https://github.com/ericcgreen"
          target="_blank"
          rel="noreferrer"
          className="ml-2 p-2 inline text-xl text-primary hover:text-secondary">
          github.com/ericcgreen
        </a>
      </p>
      <p className="my-4 flex">
        <a
          aria-label="View Eric on LinkedIn"
          href="https://www.linkedin.com/in/ericcgreen"
          target="_blank"
          rel="noreferrer"
          className="shadow-lg bg-tertiary h-12 w-12 rounded-full flex items-center justify-center text-xl text-primary hover:text-secondary">
          <Icon name="linkedin" className="w-6 h-6" />
        </a>
        <a
          aria-label="View Eric on LinkedIn"
          href="https://www.linkedin.com/in/ericcgreen"
          target="_blank"
          rel="noreferrer"
          className="ml-2 p-2 inline text-xl text-primary hover:text-secondary">
          linkedin.com/in/ericcgreen
        </a>
      </p>
    </div>
  );
}
