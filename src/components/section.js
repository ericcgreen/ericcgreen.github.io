import React from 'react';

function Section({ sectionRefs, index, section }) {
  const { title, id, quote, description, component } = section;
  return (
    <section ref={sectionRefs.current[index]} id={id} className="">
      <div className="bg-primary w-full py-8">
        <div className="max-w-screen-lg	mx-auto">
          <h3 className="text-gray-200 font-extrabold text-xl xs:text-2xl md:text-3xl leading-tight">{title}</h3>
        </div>
      </div>
      {quote ? <div className="border-l-4 border-secondary pl-8 my-4 py-4 max-w-screen-lg mx-auto text-lg md:text-xl">{quote}</div> : null}
      {description ? <div className="py-8 max-w-screen-lg	mx-auto text-lg md:text-xl">{description}</div> : null}

      {component ? <div className="py-8 max-w-screen-lg	mx-auto">{component()}</div> : null}
    </section>
  );
}

export default Section;
