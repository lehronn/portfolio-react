import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="https//www.stomski.pl">Stomski</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hello">CV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">Moje prace</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Umiejętności</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carousel">O mnie</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    // start of TRANSPARENT NAV WITH SCROLL
    // document.documentElement.clientHeight is a 100vh, you can use just 50, 5, 200, as you wish.
    window.addEventListener('scroll', function () {
      document.body.classList[
        window.scrollY > document.documentElement.clientHeight ? 'add': 'remove'
      ]('scrolled');
    });
    // end of TRANSPARENT NAV WITH SCROLL
  }
}

export default Nav;
