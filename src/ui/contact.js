import React from 'react';

function Contact() {
  return (
    <form className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-primary text-xs font-bold mb-2" for="grid-password">
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-primary border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
          />
          <p className="text-gray-600 text-xs italic">Remove if not needed</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-primary text-xs font-bold mb-2" for="grid-password">
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-primary border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
          />
          <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-primary text-xs font-bold mb-2" for="grid-password">
            Message
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-primary border border-gray-200 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"></textarea>
          <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button className="shadow bg-primary hover:bg-pri-blue focus:shadow-outline focus:outline-none text-quaternary font-bold py-2 px-4 rounded-sm" type="button">
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}

export default Contact;
