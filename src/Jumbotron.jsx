import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container jumbotron-header text-light">
          <span className="summa text-light">&sum;</span>
          <span className="summa-subtext text-light">suma wszystkich możliwości.</span>
          <h1 className="display-4 line-1 typewriter">Mateusz Stomski</h1>
          <p className="lead">
            Cześć, jestem początkującym web developerem i mogę pomóc Ci z Twoim następnym projektem.
          </p>
          <p className="lead">
            Jeśli jesteś zainteresowany współpracą zapraszam do kontaktu.
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
