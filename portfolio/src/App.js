import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Projects, Coursework, WorkExp, AboutMe, Header } from './containers';
import { Resume, Brand, Navbar } from './components';
import './app.css';


const App = () => {

  return (
    <div className="App">
      <Helmet>
        <title>Ethan Havemann</title>
      </Helmet>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <AboutMe />
    <WorkExp />
    <Coursework />
    <Resume />
    <Projects />
    <Footer />
  </div>
  )
}

export default App;