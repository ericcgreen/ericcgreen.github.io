import React, { useRef } from 'react';
import Hero from './components/hero';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Section from './components/section';
import Cards from './ui/cards';
import Contact from './ui/contact';
import Timeline from './ui/timeline';

function Description() {
  return (
    <div className="text-lg md:text-xl">
      <span className="block mb-4">
        I love to learn, I love to build, and I love to be creative. I am passionate about web development and creating user-friendly and aesthetically pleasing applications.
      </span>{' '}
      <span className="block mb-4">
        I am skilled in front- and back-end technologies, frameworks, tools, and methods. I know video editing and production, additionally I can craft print and online media
        content.
      </span>
    </div>
  );
}

const sections = [
  {
    id: 'intro',
  },
  {
    id: 'about',
    title: 'About Me',
    icon: 'user',
    iconColor: 'text-secondary',
    bgColor: 'bg-secondary',
    quote:
      'As a Full-Stack Web Developer with a background in mass-media and education, I am an effective communicator who uses practical and resourceful methods to achieve goals. I create an innovative and productive work environment through fostering strong and cohesive working relationships.',
    component: Description,
  },
  { id: 'portfolio', icon: 'terminal', iconColor: 'text-sec-green', bgColor: 'bg-sec-green', title: 'Portfolio', component: Cards },
  { id: 'resume', icon: 'document-text', iconColor: 'text-sec-blue', bgColor: 'bg-sec-blue', title: 'Resume', component: Timeline },
  { id: 'contact', icon: 'mail', iconColor: 'text-sec-purple', bgColor: 'bg-sec-purple', title: 'Contact Me', component: Contact },
];

function App() {
  let sectionRefs = useRef([]);
  sectionRefs.current = sections.map((ref, index) => (sectionRefs.current[index] = React.createRef()));

  const handleScrollTo = (e, index) => {
    sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navigation handleScrollTo={handleScrollTo} sections={sections} />
      <main className="pl-0 md:pl-48 portfolio">
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
