import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './content/Home.jsx';
import About from './content/About.jsx';
import Projects from './content/Projects.jsx';
import Hobbies from './content/Hobbies.jsx';
import Contact from './content/Contact.jsx';
import { NAV_COLORS } from './global/Constants.js';


/*
PROPS
page - current selected page.
*/
export class NavBar extends React.Component {
    
    render() {

        let { page } = this.props;

        return (
            <div className="nav-div">
                <nav className="grey darken-2">
                    <ul className="nav-ul white">
                        <a href="/"><img id='nav-logo' src={require('../images/logo.png')} alt=""></img></a>
                    </ul>
                    <ul className={"waves-effect " + (page === 'home' ? NAV_COLORS[page] : undefined)} onClick={this.props.onSelect.bind(this, 'home')}>
                        <NavLink exact to='/web/home'>Home</NavLink> 
                    </ul>
                    <ul className={"waves-effect " + (page === 'about' ? NAV_COLORS[page] : undefined)} onClick={this.props.onSelect.bind(this, 'about')}>
                        <NavLink exact to='/web/about'>About Me</NavLink>
                    </ul>
                    <ul className={"waves-effect " + (page === 'projects' ? NAV_COLORS[page] : undefined)} onClick={this.props.onSelect.bind(this, 'projects')}>
                        <NavLink exact to='/web/projects'>Projects</NavLink>
                    </ul>
                    <ul className={"waves-effect " + (page === 'hobbies' ? NAV_COLORS[page] : undefined)} onClick={this.props.onSelect.bind(this, 'hobbies')}>
                        <NavLink exact to='/web/hobbies'>Hobbies</NavLink>
                    </ul>
                    <ul className={"waves-effect " + (page === 'contact' ? NAV_COLORS[page] : undefined)} onClick={this.props.onSelect.bind(this, 'contact')}>
                        <NavLink exact to='/web/contact'>Contact</NavLink>
                    </ul>
                    {/* <ul className={"nav-workbench " + (page === 'contact' ? NAV_COLORS[page] : undefined)} onClick={this.props.onSelect.bind(this, 'contact')}>
                        <NavLink exact to='/contact'>Contact</NavLink>
                    </ul> */}
                </nav>
            </div> 
        );
    }
}

export const Main = () => (
    <Switch>
        <Route exact path='/web/home' component={Home}></Route>
        <Route exact path='/web/about' component={About}></Route>
        <Route exact path='/web/projects' component={Projects}></Route>
        <Route exact path='/web/hobbies' component={Hobbies}></Route>
        <Route exact path='/web/contact' component={Contact}></Route>
    </Switch>
);
