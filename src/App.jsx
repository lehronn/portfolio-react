import React, { Component } from 'react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import './images/landscape-sky-night-stars-29435.jpg';
import './images/pexels-photo-176851.jpeg';

import './App.css';

import Nav from './Nav.jsx';
import Jumbotron from './Jumbotron.jsx';
import Hello from './Hello.jsx';
import Social from './Social.jsx';
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
        <Social />
        <Hello />
        <Works />
        <Skills />
        <Slider />
        <Contact />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    // start of LOCALSCROLL ANIMATE
    $("#navbar ul li a[href^='#']").on('click', function(e) {
      // prevent default anchor click behavior
      var target = this.hash;
      e.preventDefault();

      // animate
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1300, function(){
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = target;
          });
    });
    // end of LOCALSCROLL ANIMATE
  }
}

export default App;
