import React, { useRef } from 'react';
import Hero from './components/hero';
import Navigation from './components/navigation-v2';
import Footer from './components/footer';
import Section from './components/section';
import Cards from './ui/cards';

const sections = [
  {
    id: 'intro',
  },
  {
    id: 'about',
    title: 'About Me',
    description:
      'As a Full-Stack Web Developer with a background in mass-media and education, I am an effective communicator who uses practical and resourceful methods to achieve goals. I create an innovative and productive work environment through fostering strong and cohesive working relationships.',
  },
  { id: 'portfolio', title: 'Portfolio', component: Cards },
  { id: 'resume', title: 'Resume' },
  { id: 'contact', title: 'Contact Me' },
];

function App() {
  let sectionRefs = useRef([]);
  sectionRefs.current = sections.map((ref, index) => (sectionRefs.current[index] = React.createRef()));

  const handleScrollTo = (e, index) => {
    sectionRefs.current[index].current.scrollIntoView();
  };
  return (
    <>
      <Navigation handleScrollTo={handleScrollTo} sections={sections} />
      <main className="pl-48 portfolio">
        {sections.map((section, index) => {
          if (section.id === 'intro') {
            return <Hero sectionRefs={sectionRefs} index={index} key={`section-${section.id}`} />;
          }
          return <Section sectionRefs={sectionRefs} index={index} key={`section-${section.id}`} section={section} />;
        })}
        <Footer />
      </main>
    </>
  );
}

export default App;
