import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from '../../data/project-data';

export default class AllProjects extends Component { 

  constructor(props) {
    super(props);
  }

  render() {

    let projects = ProjectData;
    let pairedNum = Math.floor(projects.length / 2);
    let isOdd = projects.length%2 == 1;

    let projectDivs = [];
    
    // for (let i = 0; i < projects.length; i++) {
    //   projectDivs.push(
    //     <ProjectCard project={projects[i]} />
    //   );
    // }

    for (let i=0; i<projects.length-1; i+=2) {
      projectDivs.push(
        <div key={i} className="row">
          <div className="col s6">
            <ProjectCard project={projects[i]}/>
          </div>
          {i != projects.length - 1 && 
            <div className="col s6">
              <ProjectCard project={projects[i+1]}/>
            </div>}
        </div>
      );
    }

    if (isOdd) {
      projectDivs.push(
        <div key={projects.length - 1} className="row">
          <div className="">
            <div className="col s6">
              <ProjectCard project={projects[projects.length-1]} />
            </div>
            <div className="col s6">
              
            </div>
          </div>
        </div>
      )
    }

    return (
      <section className="projects-section">
      <div className="section">
        <h1>Projects</h1>
      </div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="section"><br />
        <h4 className="center">Sorry, this area is under construction!</h4>
        <br/>
        {projectDivs}
      </div>
    </section>
    );
  }
};

