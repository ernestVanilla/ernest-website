import React, { Component } from 'react';
import { Carousel, Button, Modal } from 'react-materialize';


/* Component for structuring each 'ProjectDiv' under the Project tab.
 *
 * PROPS:
 * project: The project to be displayed.
 * leftAlign: Aligns content according to direction.
 *  
**/
export default class ProjectDiv extends Component {
  constructor (props) {
    super(props);
  }

  onButtonClick(direction, id) {
    console.log(direction);
    let elem = document.getElementById(id);
    let instance = window.M.Carousel.getInstance(elem);
    
    if (direction == 'prev') {
      instance.prev();
    } else if (direction == 'next') {
      instance.next();
    }
  }

  render() {
    let { project, leftAlign } = this.props,
        { name, origin, description, contribution, img,
          imgList, readMoreLink, visitLink } = project;
    
    let showVisitButton = visitLink != null && visitLink != '';
    let showReadMoreButton = readMoreLink != null && readMoreLink != '';
    console.log(project);

    return (
      <div className="project-div">
        <div className="row">
          <div className="col s12">
            <Modal
              header={origin.name}
              trigger={<Button className={"chip origin-chip right " + origin.color}
              >{origin.name}</Button>}>
              <p>{origin.description}</p>
            </Modal>
            <span className="left project-name">{name}</span>
          </div>
          <div className="col s12">  
            <Carousel carouselId={name} images={imgList} options={{ fullWidth: true }}
              fixedItem={showVisitButton && <Button className="btn blue"
                node="a" href={visitLink}>Visit</Button>}/>
            <a onClick={this.onButtonClick.bind(this, 'prev', name)} 
              className="left btn waves-effect waves-light black white-text darken-text-2">previous</a>
            <a onClick={this.onButtonClick.bind(this, 'next', name)} 
              className="right btn waves-effect waves-light black white-text darken-text-2">next</a>
          </div>
          <div className="col s6">
            <br/>
            <h5>Description</h5>
            <p>{description}</p>
            {showReadMoreButton && <Button className="btn blue" node="a" 
              href={readMoreLink}>Read More</Button>}
          </div><br/>
          <div className="col s6">
            <br/>
            <h5>My Contribution</h5>
            <p>{contribution}</p>
          </div>
        </div>
      </div>
    );
  }
}