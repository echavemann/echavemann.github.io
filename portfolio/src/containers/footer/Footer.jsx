import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Want to see more?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href = 'https://honorable-spruce-121.notion.site/Ethan-Havemann-Further-Information-2c0edf1098d6437daf7cef492090d2fb' target = "_blank" rel = "noreferrer">Further Information</a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Ethan Havemann, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Work History</p>
        <a href = 'https://www.linkedin.com/in/ethan-havemann/' target = "_blank" rel="noreferrer">LinkedIn</a>
        <p>Extended Showcase</p>
        <a href = 'https://github.com/echavemann' target = "_blank" rel="noreferrer" >Github</a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>972-795-4019</p>
        <p>ethavemann@gmail.com</p>
        <p>ethanhavemann2025@u.northwestern.edu</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Built by Ethan Havemann using React.</p>
    </div>
  </div>
);

export default Footer;