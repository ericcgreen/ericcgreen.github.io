import React, { useRef } from 'react';
import Hero from './components/hero';
import Navigation from './components/navigation-v2';
import Footer from './components/footer';
import Section from './components/section';
import Cards from './ui/cards';
import Contact from './ui/contact';
import Timeline from './ui/timeline';

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
    description: (
      <>
        <span className="block mb-4">
          I love to learn, I love to build, and I love to be creative. I am passionate about web development and creating user-friendly and aesthetically pleasing applications.
        </span>{' '}
        <span className="block mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </>
    ),
  },
  { id: 'portfolio', icon: 'terminal', iconColor: 'text-sec-green', bgColor: 'bg-sec-green', title: 'Portfolio', component: Cards },
  { id: 'resume', icon: 'document-text', iconColor: 'text-sec-blue', bgColor: 'bg-sec-blue', title: 'Resume', component: Timeline },
  { id: 'contact', icon: 'mail', iconColor: 'text-sec-purple', bgColor: 'bg-sec-purple', title: 'Contact Me', component: Contact },
];

function App() {
  let sectionRefs = useRef([]);
  sectionRefs.current = sections.map((ref, index) => (sectionRefs.current[index] = React.createRef()));

  const handleScrollTo = (e, index) => {
    sectionRefs.current[index].current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
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
