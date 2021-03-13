import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jerome - Dev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Jerome V. Canolang',
  subtitle: 'Junior Web Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic.jpg',
  paragraphOne: 'I am a Junior Web Developer - Graduated from Lyceum of Alabang',
  paragraphTwo:
    'Seeking a challenging career with a progressive organization that provides an opportunity to capitalize my technical skills & abilities in the field of information technology (IT).',
  paragraphThree: 'Tech Stack: ReactJS, JavaScript, TypeScript',
  resume: 'Jerome Villanueva Canolang CV 2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fleet.png',
    title: 'Fleet.ph - Web App and Mobile App',
    info:
      'Fleet.ph provides the operational visibility a data-driven business would need to elevate its last-mile delivery to the next level.',
    info2:
      'Fleet is a last-mile delivery management platform that allows the business to plan, dispatch, and track riders in real-time. ',
    url: 'https://www.fleet.ph/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'principia.png',
    title: 'Principia Biopharma',
    info:
      'At Principia Biopharma, a Sanofi company, we are focused on bringing transformative therapies to patients with serious immune-mediated diseases by changing the way small molecules are developed.',
    info2: '',
    url: 'https://www.principiabio.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sytec.png',
    title: 'Sytec',
    info:
      'Sytec Corporation is one of the leading distributors of high-quality cables and wires products, as well as structured cabling components in the Philippines. Since its establishment in 1997, the company engaged in providing integrated circuit chips, power transistors, various cables, and wires, as well as a wide variety of spare parts for many electronic products.',
    info2: '',
    url: 'https://www.sytec.com.ph/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact me',
  email: 'jvillanueva@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jerome-canolang/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yommoodev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
