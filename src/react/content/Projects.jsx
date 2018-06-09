import React, { Component } from 'react';
import ProjectDiv from '../components/ProjectDiv.jsx';
import ProjectData from '../data/project-data.jsx';

export default class Projects extends Component { 

  constructor(props) {
    super(props);
  }

  render() {

    let projects = ProjectData;

    let isPanel = false;
    let projectDivs = projects.map((p, index) => {
      isPanel = !isPanel;
      if (isPanel == true) {
        return (
          <div key={index} className="panel">
            <ProjectDiv project={p} leftAlign={true}/>
          </div>
        );
      } else {
        return (
          <div key={index} className="panel-transparent">
            <ProjectDiv project={p} leftAlign={false}/>
          </div>
        );
      }
    });

    console.log(projectDivs.length);
    console.log(projectDivs);

    return (
      <section className="projects-section">
      <div className="section">
        <h1>Projects</h1>
      </div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <div className="section">
              {projectDivs}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
};

