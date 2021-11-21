import React, { useRef } from 'react';
import Navigation from './components/navigation';
import Hero from './components/hero';
import Section from './components/section';
import Footer from './components/footer';
import Description from './ui/description';
import Contact from './ui/contact';
import Cards from './ui/cards';
import Timeline from './ui/timeline';

function PortfolioCards() {
  const config = [
    {
      id: 'card-1',
      title: 'Woman standing',
      image: 'https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80',
      alt: 'This is some text',
      href: '#',
      github: '#',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      accomplishments: ['Sed ut perspiciatis unde', 'Omnis iste natus error sit', 'Voluptatem accusantium doloremque laudantium'],
    },
    {
      id: 'card-2',
      title: 'Woman walking',
      image: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      alt: 'This is some text',
      href: '#',
      github: '#',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
      accomplishments: ['Totam rem aperiam', 'Eaque ipsa quae ab illo', 'Inventore veritatis et quasi', 'Beatae vitae dicta', 'Perspiciatis unde omnis iste'],
    },
    {
      id: 'card-3',
      title: 'Walking through',
      image: 'https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      alt: 'This is some text',
      href: '#',
      github: '#',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
      accomplishments: ['Nemo enim ipsam', 'Voluptatem quia voluptas', 'Aut odit aut fugit'],
    },
  ];
  return <Cards config={config} />;
}

const sections = [
  {
    id: 'intro',
    title: 'Introduction',
  },
  {
    id: 'about',
    title: 'About Me',
    icon: 'user',
    iconColor: 'text-secondary',
    bgColor: 'bg-secondary',
    quote: `As a Full-Stack Web Developer with a background in mass-media and education, I am an effective communicator who uses 
    practical and resourceful methods to achieve goals. I create an innovative and productive work environment through fostering 
    strong and cohesive working relationships.`,
    component: Description,
  },
  { id: 'portfolio', icon: 'terminal', iconColor: 'text-sec-green', bgColor: 'bg-sec-green', title: 'Portfolio', component: PortfolioCards },
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
      <main className="pl-0 md:pl-48 portfolio">
        <Navigation handleScrollTo={handleScrollTo} sections={sections} />
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
