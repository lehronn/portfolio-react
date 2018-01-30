import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container text-light">
          <div className="row">
            <span className="summa text-light">&sum;</span>
            <div className="name-writer col-12">
              <span className="summa-subtext text-light">suma wszystkich możliwości.</span>
              <h1 className="display-4 line-1 typewriter text-light">Mateusz Stomski</h1>
            </div>
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
