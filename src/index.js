import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './react/App';
import { Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Admin = () => (
  <div className="outer">
    <Link exact to='/web/home'
      className="admin-btn waves-effect waves-light btn right modal-trigger" href="#modal1">Website</Link>
    {/* <Link exact to='/admin'
      className="admin-btn waves-effect waves-light btn right modal-trigger" href="#modal1">Admin</Link> */}
    <div className="middle admin-background" style={{backgroundColor: 'darkgrey'}}>
      <div className="inner">
        {/* <div className={"nav-strip " + NAV_COLORS[page]} ></div> */}
        <div className="content-background">
        
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(
  <BrowserRouter> 
    <Switch>
      <Route path='/web' component={App}></Route>
      <Route exact path='/admin' render={Admin}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
