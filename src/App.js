import React, { useRef } from 'react';
import Navigation from './components/navigation';
import Hero from './components/hero';
import Section from './components/section';
import Footer from './components/footer';
import Description from './ui/description';
import Contact from './ui/contact';
import Cards from './ui/cards';
// import Timeline from './ui/timeline';
import towersOfHanoi from './assets/towers-of-hanoi.png';
import farmart from './assets/farmart.png';

function PortfolioCards() {
  const config = [
    {
      id: 'card-1',
      title: 'The Swag Shop',
      image: 'https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80',
      alt: 'The Swag Shop Project',
      href: '#',
      github: '#',
      description: 'This app is a store that utilizes Fake Store API to demonstrate use of TypeScript and REST API.',
      accomplishments: ['ReactJS', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 'card-2',
      title: 'Farmart',
      image: farmart,
      alt: 'Farmart Project',
      href: 'https://nfiona.github.io/Project3_FarMart/',
      github: 'https://github.com/nfiona/Project3_FarMart',
      description: 'This app allows vendors to post about their stores and products for the next upcoming farmers market.',
      accomplishments: ['AngularJs', 'Rails API', 'Full CRUD functionality'],
    },
    {
      id: 'card-3',
      title: 'Towers of Hanoi Project',
      image: towersOfHanoi,
      alt: 'Towers of Hanoi Project',
      href: 'https://ericgreen.dev/eric_green_project1/',
      github: 'https://github.com/ericcgreen/eric_green_project1',
      description: 'This app was made using HTML, CSS, and JavaScript.',
      accomplishments: ['First GA project', 'Utilized HTML, CSS, JS', 'Pokemon theme!'],
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
  // { id: 'timeline', icon: 'document-text', iconColor: 'text-sec-blue', bgColor: 'bg-sec-blue', title: 'Resume', component: Timeline },
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
