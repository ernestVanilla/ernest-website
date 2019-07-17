import React from 'react';

const Resume = () => (
  <section className="resume-section">
    <div className="section">
      <h1>Resume</h1>
    </div>
    <div className="divider"></div>
    <div className="divider"></div>
    <div className="divider"></div>
    <div className="divider"></div>
    <div className="section"><br />
      <div className="row">
        <div className="col s12 center">
          <br />
          <embed src={require('../../resume.pdf')} width="100%" height="1250vw" />
        </div>
      </div>
    </div>
  </section>
);

export default Resume;