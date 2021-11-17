import React from 'react';

function Section({ sectionRefs, index, section }) {
  const { title, id, quote, description, component } = section;
  return (
    <section ref={sectionRefs.current[index]} id={id}>
      <div className="bg-primary py-8">
        <div className="max-w-screen-lg mx-auto px-4">
          <h3 className="text-quaternary font-extrabold text-xl xs:text-2xl md:text-3xl leading-tight">{title}</h3>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 py-8 md:py-24">
        {quote ? <div className="border-l-4 border-secondary pl-8 mb-16 text-lg md:text-xl">{quote}</div> : null}
        {component ? <div className="">{component()}</div> : null}
      </div>
    </section>
  );
}

export default Section;
