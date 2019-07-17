import React from 'react';

const Home = () => (
  <section className="home-section">
    <div className="section">
      <h1>Welcome to my website!</h1>
    </div>
    <div className="divider"></div>
    <div className="divider"></div>
    <div className="divider"></div>
    <div className="divider"></div>
    <div className="section"><br />
      <div className="row">
        <div className="col s8">
          <p>This is my own personal website made using the technology stack below.</p><br />
          <img className="left" src={require('../../images/mernstack.png')} alt=""/>
          <p>
              &emsp; &#9656; Mongo DB<br />
              &emsp; &#9656; Express<br />
              &emsp; &#9656; React<br />
              &emsp; &#9656; Node.js
          </p>
          <br />
          <p>Here you can learn more about myself, my hobbies, skills and pretty much
            whatever I feel like posting here. This website is still under progress so expect some updates in the near future.</p>
          <p>In the meantime, feel free to roam around!</p>
        </div>
        <div className="col s4">
          <br />
          <img src={require('../../images/profile.jpg')} alt="Profile of Ernest Villa"/>
          <h3 className="center">Ernest Villa</h3>
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="section">
      <div className="row">
        <div className="col s6">
          <h2>What's Ernest up to??</h2>
          <ul>
            <li><p>&#9656; Currently working on this website.</p></li>
            <li><p>&#9656; Actively applying for full stack developer positions.</p></li>
          </ul>
        </div>
        <div className="col s6">
          <br/>
          <div className="blog panel">
            <h2>Blog Posts</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;