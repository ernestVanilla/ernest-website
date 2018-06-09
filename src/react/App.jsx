import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import { NavBar, Main } from './NavBar.jsx';
import { NAV_COLORS } from './global/Constants.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      overflow: false
    }
  }


  componentDidMount() {
    // Set state to match URL when initially loaded
    let page = window.location.href.split("/");
    page = page[page.length - 1];
    this.setState({ page });

    // Detect overflow value.
    this.updateOverflow();
    let content = document.getElementById('content');
    window.addEventListener("resize", this.updateOverflow.bind(this));
  }


  // Detect overflow when page changes.
  componentDidUpdate() {
    this.updateOverflow();
  }


  // Detects overflow status.
  updateOverflow() {
    let { overflow } = this.state;

    // Get height of content and container.
    let content = document.getElementById('content');
    let container = document.getElementsByClassName('content-background')[0];

    // Compare height to determine if overflow is triggered.
    if (content.clientHeight > container.clientHeight && overflow == false) {
      this.setState({ overflow: true });
    } else if (content.clientHeight <= container.clientHeight && overflow == true) {
      this.setState({ overflow: false });
    }
  }


  // Set state of page. 
  onSelect(page) { this.setState({ page: page }); }
  

  render() {

    let { page, overflow } = this.state;

    return (
      <div className="outer">
        <Link exact to='/admin'
          className="admin-btn waves-effect waves-light btn right modal-trigger" href="#modal1">Admin</Link>
        <div className="middle bgImage">
          <div className="inner">
            {/* <div className={"nav-strip " + NAV_COLORS[page]} ></div> */}
            <div className={"content-background content-" + NAV_COLORS[page] +
              (!overflow ? " scroll-bg-" + NAV_COLORS[page] : '')}>
              <div id="content" className="container">
                <Main />
              </div>
            </div>
            <NavBar onSelect={this.onSelect.bind(this)} page={page}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
