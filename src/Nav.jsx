import React, { Component } from 'react';
import styles from './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#">Stomski</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
              <a className="nav-link" href="#about">O mnie</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Kontakt</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.blog.stomski.pl">DevBlog</a>
            </li>
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Znajdź mnie
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="http://www.blog.stomski.pl">Mój DevBlog</a>
          <a className="dropdown-item" href="https://www.facebook.com/mateusz.stomski">Facebook</a>
          <a className="dropdown-item" href="https://twitter.com/mateuszstomski">Twitter</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="https://hashnode.com/@lehronn">Hashnode</a>
          <a className="dropdown-item" href="https://github.com/lehronn">GitHub</a>
          <a className="dropdown-item" href="http://www.linkedin.com/in/mateusz-stomski-b3337b48">LinkedIn</a>
        </div>
      </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
