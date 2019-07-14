import React, { Component } from 'react';
import ProjectDiv from './ProjectDiv';
import { Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom'
import Project from '../../../classes/Project.js';

/* Component for structuring each 'ProjectCard' under the Project tab.
 *
 * PROPS:
 * project: The project to be displayed.
 *  
**/
export default class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProjectDiv: false
    }
  }

  // toggleProjectDiv() {
  //   let { showProjectDiv } = this.state;
  //   console.log(!showProjectDiv);
  //   this.setState({ showProjectDiv: !showProjectDiv });
  // }

  render() {
    let { project } = this.props,
        { name, origin, tldr, img, color } = project,
        { showProjectDiv } = this.state,
        projectLink = {
          pathname: '/web/projects/' + project.formatSlug(),
          state: { project }
        }

    return (
      <div className="project-card">
        <Link to={projectLink}>
          
          <div className='card'>
            <div className="card-image">
              <img src={img} />
              <span className={"card-title " + color}>{name}</span>
            </div>
            <div className="card-content">
              <p>{tldr}</p>
            </div>
            {/* <div className="card-action center-align">
              <p className="white-text">Click for more</p>
            </div> */}
          </div>
        </Link>
      </div>
    )}
}