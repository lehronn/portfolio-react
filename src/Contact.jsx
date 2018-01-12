import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container-fluid contact">
        <div className="container">
          <div className="row justify-content-center text-light">
          <div className="col-12">
            <h5>Skontaktuj się ze mną!</h5>
          </div>
            <div className="col">
              <h5>Javascript</h5>
              <p>JavaScript dzisiaj to nie tylko zwykły język ale wspaniała i bardzo aktywna społeczność dzięki której codziennie mają miejsce nowe innowacyjne rozwiązania. Jeśli chcesz być zawsze na bieżąco przyda się na pewno <strong>Babel, ReactJS, ReduxJS</strong> oraz <strong>React-Router</strong>.</p>
            </div>
            <div className="col">
              <h5>Mateusz Stomski</h5>
              <p>Rybnik, śródmieście.</p>
              <p>email: <a href="mailto:mateusz.stomski@gmail.com">mateusz.stomski@gmail.com</a></p>
              <p>telefon: 887 6666 06</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
