import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default class About extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="about-section">
        <div className="section">
          <h1>About Me</h1>
        </div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="section"><br/>
          <div className="row">
            <div className="col s7">
              <p>My name is Ernest Villa and I'm an aspiring Full Stack Web Developer.</p><br/>

              <p>I live in Milton with my parents and brother. I recently graduated from the
                University of Toronto Mississauga (UTM Campus), double majoring in Computer Science
                and Statistics as well as minoring in Mathematics. I also have over a year of professional development experience in web and app consulting.
              </p><br/>

              <p>While I'm not coding away, I like to play guitar, exercise,
                watch shows and catch a cold drink with friends from time to time. I'm also 
                an occasional gamer with friends online from around the globe. 
              </p><br/>

              <h2>Why Web Development?</h2>

              <p>I consider myself a curious and creative person in nature. I've always loved 
                science and constantly wondered how things worked.
                At first I really wanted to be an Astronomer, then at one point I wanted to be an inventor, 
                and then an architect. There were simply too many things that I found interesting, 
                but at last I settled my sights on becoming a Full Stack Web Developer.
              </p><br/>

              <p>The field of Computer Science appeared to balance everything I wanted while staying 
              lucrative and flexible. You can work from anywhere, learn from any industry and reach wide scale impact!
              However, the selling point for me was the idea of being able to literally create anything from nothing 
              in a virtual world. This gave me a vast playground to explore, that which rivals 
              my childhood wonder for outer space.
              </p><br/>

              <p>Nothing has made me realize that more than my internship at harpLabs. Since harpLabs is
                a small consulting company, I was exposed to a multitude of different projects and given lots of
                responsibility over them. From a medical web app to an auto-login plugin for a famous airline,
                I've learned and honed essental skills as well as gained direction in my programming career.
              </p><br/>
              <p>Throughout my time at university I knew I wanted to code, but I lacked a focus. Now I have this new 
                found appreciation; that through the web, anyone can access anything at any time. For the time
                being, this is the medium in which I choose to develop and learn in.
              </p>
            </div>
            <div className="col s5 panel">
              <img id="self" src={require('../../images/self.jpg')} alt="Profile of Ernest Villa" />
              <br/>
              <br/>
              <p>Name: Ernest Villa</p>
              <p>Age: 22</p>
              <p>School: University of Toronto</p>
              <p>Developer Experience: 1 year</p>
              <Collapsible>
                <CollapsibleItem className="transparent active" header='Study &#9662;'>
                  &#9656; Computer Science (major)<br/>
                  &#9656; Statistics (major)<br/>
                  &#9656; Math (minor)<br/>
                </CollapsibleItem>
                <CollapsibleItem className="transparent" header='Skills &#9662;'>
                  &#9656; Full Stack Web Development<br/>
                  &#9656; iOS & Android Development<br/>
                  &#9656; Search Engine Optimization (SEO)<br/>
                  &#9656; Adwords Management<br/>
                  &#9656; Wordpress Development
                </CollapsibleItem>
                <CollapsibleItem className="transparent" header='Technologies &#9662;'>
                  &#9656; MERN Stack<br/>
                  &#9656; WAMP Stack<br/>
                  &#9656; Node.js<br/>
                  &#9656; Javscript (ES5, ES6)<br/>
                  &#9656; React<br/>
                  &#9656; Java<br/>
                  &#9656; Python<br/>
                  &#9656; HTML, CSS<br/>
                  &#9656; PHP<br/>
                  &#9656; MySQL<br/>
                  &#9656; MongoDB<br/>
                  &#9656; Git<br/>
                  &#9656; Appcelerator  
                </CollapsibleItem>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
