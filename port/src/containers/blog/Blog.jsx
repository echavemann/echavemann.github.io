import React from 'react';
import Article from '../../components/article/article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Personal <br /> Projects.</h1>
      <h2 className='ghco'>github.com/echavemann</h2>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="January 2022 - Present" text="NUFintech Club" description='Founder, president, and technical manager of the first and only fintech/quant interest group at Northwestern University. Personal coordinator for 30+ team members in a mock quant firm, and co-head of summer pre-professional operations. Chief developer and coordinator for university-wide algorithm design and trading competitons to improve the quality of fintech education at Northwestern.'/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="October 2021 - Present" text="Bobot" description='Ongoing project to build a full-stack boba-ordering application, as well as a 3D printed and CNC manufactured robotic arm to execute said orders.' />
        <Article imgUrl={blog03} date="July 2022 - Present" text="AI Real Estate" description='Data analytic project focused on using machine-learning to identify housing market trends and predict future hotspots. '/>
        <Article imgUrl={blog04} date="January 2022 - June 2022" text="Optimize.Meet" description='A productivity webapp designed by individuals drastically in need of them. '/>
        <Article imgUrl={blog05} date="August 2021 - November 2021" text="Spotify Matcher" description='Simple application to grab spotify history and genres, adn then match users with other users based on their music tastes.' />
      </div>
    </div>
  </div>
);

export default Blog;