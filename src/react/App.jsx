import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import { NavBar, Main } from './NavBar';
import { NAV_COLORS, WALLPAPERS, DOMAIN } from './global/Constants';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      overflow: false,
      backgroundId: 0,
      timer: null
    }
  }


  componentDidMount() {

    // Set state to match URL when initially loaded
    let page = window.location.href.split("/"),
      { backgroundId } = this.state;
    page = page[page.length - 1];
    this.setState({ page });

    // Detect overflow value.
    this.updateOverflow();
    let content = document.getElementById('content');
    window.addEventListener("resize", this.updateOverflow.bind(this));

    // Fade in first background image.
    setTimeout(() => {
      window.$('.bgImage' + backgroundId).fadeTo(1000, 1);
    }, 1000);
    this.setState({ backgroundId: backgroundId + 1 });

    // Sets a timer to cycle through background images.
    let timer = setInterval(this.cycleBackground.bind(this) , 15000);
    this.setState({ timer });

    // Starter URL
    if (window.location.href == DOMAIN) {
      this.props.history.push('/web/home');
      this.setState({ page: 'home' });
    }
  }


  // componentWillUnmount() {
  //   clearInterval(this.state.timer);
  // }


  // Cycles through bakcground images.
  cycleBackground() {
    console.log('cycle');
    // Set index values for current and previous images.
    let { backgroundId } = this.state, previous = backgroundId - 1;
    if (backgroundId == WALLPAPERS.length) backgroundId = 0;
    if (backgroundId == 0) previous = WALLPAPERS.length - 1;
    
    // Fade previous image to black, then fade in current image.
    window.$('.bgImage' + previous).fadeTo(1000, 0, () => {
      window.$('.bgImage' + previous).css('display', 'none');
      setTimeout(() => {
        window.$('.bgImage' + backgroundId).fadeTo(1000, 1);
      }, 100);
    });
    
    // Update backgroundId in the state.
    this.setState({ backgroundId: backgroundId + 1 });
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

    let { page, overflow, backgroundId } = this.state;

    let bgImages = WALLPAPERS.map((bg, index) => 
      <div className={"image bgImage" + index} key={index} style={{ backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover' }}>
        {/* <img className={"bgImage" + index} src={bg} alt="" /> */}
      </div>
    );

    return (
      <div className="outer">
        <Link exact to='/admin'
          className="admin-btn waves-effect waves-light btn right modal-trigger" href="#modal1">Admin</Link>
        <div className="middle middleImage">
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
          <div className="bg-container">
          {bgImages}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
