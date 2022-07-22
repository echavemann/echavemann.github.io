import React from 'react';
import Feature from '../../components/feature/feature';
import './workexp.css';

const featuresData = [
  {
    title: 'Software Engineering Intern @ Amazon',
    text: 'Incoming, September-December 2022.',
  },
  {
    title: 'Signal Processing Engineer @ Acorn Genetics',
    text: 'Head of data processing and AWS integration, work in a team of 3 to build data digest infrastructure and machine-learning classifiation model to identify nucleotides and diseases.',
  },
  {
    title: 'Residential Assistant @ Northwestern',
    text: 'Assist with administrative tasks, customer service, crisis response, and programming for residential halls. Take action to build an inclusive and engaging residential community.',
  },
  {
    title: 'Co-Founder, Chief Trading Officer @ Havemann Capital',
    text: 'Conceptualized and built the trading infrastructure for a small-scale proprietary crypto trading and staking firm, using C++ and Rust. Deployed on personal Ubuntu infrastructure, and constantly work to improve returns. ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Work and Technical Experience.</h1>
      <p>See resume and complete history for more. </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;