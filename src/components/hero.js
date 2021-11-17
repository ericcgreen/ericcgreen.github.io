import React from 'react';

export default function Hero({ sectionRefs, index }) {
  return (
    <section ref={sectionRefs.current[index]} id="hero" className="hero-background bg-center bg-fixed bg-no-repeat bg-cover h-screen relative">
      <div className="relative h-screen bg-opacity-20 bg-black">
        <div className="absolute top-2/4 right-0 px-6">
          <h2 className="px-8 mt-7 mb-5 text-tertiary font-extrabold text-xl xs:text-3xl md:text-6xl">
            I want to <span className="bg-primary p-1">build things</span> <br /> for a <span className="border-b-4 border-primary">better tomorrow</span>.
          </h2>
        </div>
      </div>
    </section>
  );
}
