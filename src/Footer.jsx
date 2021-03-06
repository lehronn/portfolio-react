import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid sticky-bottom footer">
        <div className="row justify-content-center text-center text-light">
          <span className="col-12">
            Mateusz Stomski &#174; 2018
          </span>
          <span className="col-12">
            crafted with true
            &nbsp;<i className="fa fa-heart" aria-hidden="true"></i>&nbsp;
            to open sources.
           </span>
         </div>
      </div>
    );
  }
}

export default Footer;
