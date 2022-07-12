import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Want to see more?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href = 'https://Northwestern.edu'>Further Information</a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Ethan Havemann, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Work History</p>
        <a href = 'https://www.linkedin.com/in/ethan-havemann/'>LinkedIn</a>
        <p>Extended Showcase</p>
        <a href = 'https://github.com/echavemann'>Github</a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>972-795-4019</p>
        <p>ethavemann@gmail.com</p>
        <p>ethaanhavemann2025@u.northwestern.edu</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Built by Ethan Havemann using React.</p>
    </div>
  </div>
);

export default Footer;