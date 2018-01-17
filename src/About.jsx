import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
        <div id="about" className="container-fluid about">
          <div className="row">
            <div className="container">
              <div className="col text-light">
                <p>
                  Aktualnie uczę się JavaScriptu i Reactjs. Skupiam się na front-endzie i ćwiczę CSS by w następnej kolejności chcę przejść do Node.js i MongoDB.
                </p>
                <p>
                  W mojej pracy i życiu prywatnym, wszędzie tam gdzie to możliwe używam otwartego oprogramowania takiego jak Fedora Linux, Atom, Gimp, Inkscape czy Firefox. Jestem zdania, że otwarte źródła gwarantują bezpieczeństwo, poszanowanie prywatności, innowacyjność i najwyższą jakość.
                </p>
                <p>
                  Tych cech wymagam od oprogramowania którego używam, oraz projektów które sam tworzę. Dzięki OpenSources ja i moi klienci nie są narażeni na przywiązanie do jedynego, konkretnego dostawcy. Gdy Gimp i Inkscape nie dają rady używam Affinity Photo i Affinity Designer. 
                </p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default About;
