import Project from '../../classes/Project.js';
import Origin from '../../classes/Origin.js';

let ProjectData = [];

let harpLabs = new Origin({ 
  name: 'harpLabs', 
  color: 'amber', 
  description: 'harpLabs is a small consulting company that I worked for ' +
    'under the Personal Experience Year (PEY) Program. My internship period ' +
    'was 14 months and I am very grateful for the vast amount of ' +
    'experience, knowledge and skills I developed during my time there.'
});

let Personal = new Origin({ 
  name: 'Personal Project', 
  color: 'green', 
  description: 'A personal project of mine.'
});


ProjectData.push(new Project({
  name: 'TaperMD',
  origin: harpLabs,
  description: 'TaperMD is a web application designed to track ' +
    'and moderate medications taken by seniors. \n\n' +
    'TaperMD provides health care providers with a clinical pathway to ' +
    'easily review all medications a patient is taking, along with warnings, ' +
    'tools, and protocols to help reduce and manage the medication burden in seniors.',
  contribution: 'I was given the project at the start of my internship. ' + 
    'For over a year I worked on adding features, updates and bug fixes. This is ' +
    'the project in which I gained familiarity and specialty in the React ' + 
    'framework. I also created a remote API for Taper to store all non-personal ' +
    'medication-related data. This is to improve data maintenance and accessibility for ' +
    'when there will be multiple instances of Taper hosted by country.',
  visitLink: '',
  readMoreLink: 'https://tapermd.com/',
  img: 'http://localhost:3000/images/projects/api_1.jpg',
  imgList: ['/images/projects/TaperMD_sai2.jpg',
    '/images/projects/api_1.jpg', 
    '/images/projects/api_2.jpg', 
    '/images/projects/interaction_checker1.jpg',
    '/images/projects/interaction_checker2.jpg'
  ]
}));


ProjectData.push(new Project({
  name: 'Dogs Reformed',
  origin: harpLabs,
  description: 'TaperMD is a web application designed to track ' +
    'and moderate medications taken by seniors. The application is ' +
    'developed by Data Based Medicine Americas Ltd. in conjunction with ' +
    'the Department of Family Medicine at McMaster University.\n\n' +
    'TaperMD provides health care providers with a clinical pathway to ' +
    'easily review all medications a patient is taking, along with warnings, ' +
    'tools, and protocols to help reduce and manage the medication burden in seniors.',
  contribution: 'hello world',
  visitLink: 'https://dogsreformed.com/',
  readMoreLink: 'https://dogsreformed.com/about-us/',
  img: 'http://localhost:3000/images/projects/api_1.jpg',
  imgList: ['/images/projects/dogsreformed_homepage.jpeg',
    '/images/projects/dogsreformed_homepage2.jpeg',
    '/images/projects/dogsreformed_hotel.jpeg',
    '/images/projects/dogsreformed_shop.jpeg'
  ] 
}));


ProjectData.push(new Project({
  name: 'KNB Learning',
  origin: harpLabs,
  description: 'TaperMD is a web application designed to track ' +
    'and moderate medications taken by seniors. The application is ' +
    'developed by Data Based Medicine Americas Ltd. in conjunction with ' +
    'the Department of Family Medicine at McMaster University.\n\n' +
    'TaperMD provides health care providers with a clinical pathway to ' +
    'easily review all medications a patient is taking, along with warnings, ' +
    'tools, and protocols to help reduce and manage the medication burden in seniors.',
  contribution: 'hello world',
  img: 'http://localhost:3000/images/projects/api_1.jpg',
  imgList: ['/images/projects/knblearning.jpg',
    '/images/projects/knblearning2.jpg',
    '/images/projects/knblearning3.jpg',
    '/images/projects/knblearning4.jpg'
  ]
}));

export default ProjectData;
