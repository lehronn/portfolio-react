import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container jumbotron-header text-light">
          <div className="row">
            <span className="summa text-light col-12">&sum;</span>
            <span className="summa-subtext text-light col-12">suma wszystkich możliwości.</span>
            <h1 className="display-4 line-1 typewriter col-12">Mateusz Stomski</h1>
            <p className="lead col-12">
              Cześć, jestem początkującym web developerem i mogę pomóc Ci z Twoim następnym projektem.
            </p>
            <p className="lead col-12">
              Jeśli jesteś zainteresowany współpracą zapraszam do kontaktu.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
