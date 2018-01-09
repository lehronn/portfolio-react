import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid sticky-bottom">
        <div className="row justify-content-center footer text-center bg-dark text-light">
          <span className="col-12">Mateusz Stomski &#174; 2018</span>
          <span className="col-12">crafted with true love to open sources.</span>
        </div>
      </div>
    );
  }
}

export default Footer;
