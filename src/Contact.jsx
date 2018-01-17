import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container-fluid contact">
        <div className="container">
          <div className="row justify-content-center text-light">
          <div className="col-12">
          </div>
            <div className="col">
              <h5>Kontakt</h5>
              <p>Jeśli mogę Ci w czymś pomóc, masz dla mnie ciekawe zlecenie lub jesteś zainteresowany współpracą długoterminową proszę Skontaktuj się ze mną. Zbudujmy coś razem.</p>
              <h2>;)</h2>
            </div>
            <div className="col">
              <h5>Mateusz Stomski</h5>
              <p><i className="fa fa-building-o" aria-hidden="true"></i>
&nbsp;Rybnik, śródmieście.</p>
              <p><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;
 <a className="text-light" href="mailto:mateusz.stomski@gmail.com">mateusz.stomski@gmail.com</a></p>
              <p><i className="fa fa-phone" aria-hidden="true"></i>
&nbsp;
 887 6666 06</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
