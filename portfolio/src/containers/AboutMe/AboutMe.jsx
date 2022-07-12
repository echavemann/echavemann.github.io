import React from 'react';
import Feature from '../../components/feature/feature';
import './AboutMe.css';

const AboutMe = () => (
  <div className="gpt3__whatgpt3 section__margin" id="AboutMe">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Ethan Havemann" text="" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">About Me.</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Education" text="I currently study Computer Engineering, Economics, and Data Science at Northwestern University. Relevant coursework includes Linear Algebra, Data Structures, Signal Processing, Digital Logic, and Functional Programming. " />
      <Feature title="Skillset" text="Technically, I specialize in building complete systems using Python and C++. Beyond the technical, I have 5 years of direct small/medium team management experience, as well as 7 years of tutoring experience. "/>
      <Feature title="Interests" text="My interests include cooking, personal finance, and board games. My hobbies include rollerblading, reading nonfiction, and playing pickleball and tennis." />
    </div>
  </div>
);

export default AboutMe;