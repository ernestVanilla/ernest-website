import Project from '../../classes/Project.js';
import Origin from '../../classes/Origin.js';

let ProjectData = [];

let harpLabs = new Origin({ 
  name: 'harpLabs Inc.', 
  color: 'amber', 
  description: 'I worked on this project under the employment of harpLabs Inc. ' +
    'harpLabs is a small consulting company that I worked for ' +
    'under the University of Toronto Personal Experience Year (PEY) Program. My internship period ' +
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
  color: 'blue',
  tldr: 'TaperMD is a web application designed to track ' +
    'and moderate medications taken by seniors.',
  description: 'TaperMD is a web application designed to track ' +
    'and moderate medications taken by seniors. \n\n' +
    'TaperMD provides health care providers with a clinical pathway to ' +
    'easily review all medications a patient is taking, along with warnings, ' +
    'tools, and protocols to help reduce and manage the medication burden in seniors.',
  contribution: 'I was given the project at the start of my internship. ' +
    'For over a year I worked on adding features, updates and bug fixes. Maintaining ' +
    'the database involved a lot of problem solving and creative SQL queries. ' +
    'This is the project in which I gained familiarity and specialty in the React ' +
    'framework. I also created a remote API to improve data maintenance and accessibility.',
  visitLink: '',
  readMoreLink: 'https://tapermd.com/',
  img: '/images/projects/TaperMD_sai2.jpg',
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
  color: 'brown',
  tldr: 'Brochure/Eccommerce website for a pet dog boarding, breeding, ' +
    ' and training facility.',
  description: 'Dogs Reformed is a privately owned boarding, breeding, ' +
    'and training facility located in Stoney Creek founded in 2012 by Mina ' +
    'El Meniawy. His desire was to provide a home away from home for your dog. ' +
    'The website showcases their variety of services such as their pet hotel ' +
    '(dog boarding), doggie day care, rehabilitation, dog training, and raw ' +
    'dog food.',
  contribution: 'The website is powered by Wordpress. While I was employed at harpLabs,' +
    'I mainly worked on ' +
    'designing the look and structure of the website using the Divi 3.0 plugin. ' +
    'I also had to configure a booking system plugin to handle dog boarding ' +
    'and day care services along with additional add on items for each booking. ' +
    'The project was really interesting, and while it hardly involved any code, ' +
    'I was able to exercise creative design and awareness for customer usability.',
  visitLink: 'https://dogsreformed.com/',
  readMoreLink: 'https://dogsreformed.com/about-us/',
  img: '/images/projects/dogsreformed_homepage.jpeg',
  imgList: ['/images/projects/dogsreformed_homepage.jpeg',
    '/images/projects/dogsreformed_homepage2.jpeg',
    '/images/projects/dogsreformed_hotel.jpeg',
    '/images/projects/dogsreformed_shop.jpeg'
  ]
}));


ProjectData.push(new Project({
  name: 'KNB Learning',
  origin: harpLabs,
  color: 'red',
  tldr: 'Main website for KNB Learning, a kids educational center located in Oakville.',
  description: 'KNB Learning is an Educational Center located in Oakville ' +
    'that offers learning opportunities for kids. They spcialize in classes ' +
    'and camps incorporating themes that cater to children\'s interests. ' +
    'Themes such as LEGO Robotics, Minecraft, Programming, Stop Motion Animation ' +
    'etc. These customized programs integrate school concepts while taking ' +
    'advantage of the motivation kids have when they are having fun. Information ' +
    'about these programs and services are easily accessible on the website.',
  contribution: 'The website was incomplete when I was given responsibility ' +
    'for it. During my internship, I worked with the client to help make the website dynamic and ' +
    'most importantly, intuitive for visitors. Most of it was hardcoded for ' +
    'quick release so a lot of my work involved making the content dynamic ' +
    'and editable through the custom-made admin CMS. I also focused efforts into SEO, ' +
    'creating a sitemap generator that is accessible at the URL ' +
    'https://knblearning.com/sitemap.xml. Additionally I created and managed ' +
    'an Adwords campaign to kickstart the summer season for KNB Learning.',
  visitLink: 'https://knblearning.com/',
  readMoreLink: '',
  img: '/images/projects/knblearning.jpg',
  imgList: ['/images/projects/knblearning.jpg',
    '/images/projects/knblearning2.jpg',
    '/images/projects/knblearning3.jpg',
    '/images/projects/knblearning4.jpg'
  ]
}));



export default ProjectData;
