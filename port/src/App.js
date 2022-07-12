import React from 'react';
import { Footer, Blog, Possibility, Features, AboutMe, Header } from './containers';
import { Resume, Brand, Navbar } from './components';
import './app.css';


const App = () => {

  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <AboutMe />
    <Features />
    <Possibility />
    <Resume />
    <Blog />
    <Footer />
  </div>
  )
}

export default App;