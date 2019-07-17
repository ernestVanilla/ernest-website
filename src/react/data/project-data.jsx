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




export default ProjectData;
