import React, { Component } from 'react';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import './images/landscape-sky-night-stars-29435.jpg';
import './images/pexels-photo-176851.jpeg';

import styles from './App.css';

import Nav from './Nav.jsx';
import Jumbotron from './Jumbotron.jsx';
import Hello from './Hello.jsx';
import Works from './Works.jsx';
import Skills from './Skills.jsx';
import About from './About.jsx';
import Slider from './Slider.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Hello />
        <Works />
        <Skills />
        <About />
        <Slider />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
