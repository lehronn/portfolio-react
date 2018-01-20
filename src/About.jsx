import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
        <div id="about" className="container-fluid about">
          <div className="row">
            <div className="container">
              <div className="col text-light">
                <p className="about-paragraph">
                  Aktualnie uczę się JavaScriptu i Reactjs. Skupiam się na front-endzie i ćwiczę CSS by w następnej kolejności przejść do Node.js i MongoDB.
                </p>
                <p className="about-paragraph">
                  W mojej pracy i życiu prywatnym, wszędzie tam gdzie to możliwe używam otwartego oprogramowania takiego jak <strong>Fedora, Atom, Wordpress, Gimp, Inkscape czy Firefox</strong>. Jestem zdania, że otwarte źródła gwarantują bezpieczeństwo, poszanowanie prywatności, innowacyjność i najwyższą jakość.
                </p>
                <p className="about-paragraph">
                  Tych cech wymagam od oprogramowania którego używam, oraz projektów które sam tworzę. Dzięki OpenSources ja i moi klienci nie są narażeni na przywiązanie do jedynego, konkretnego dostawcy. Gdy Gimp i Inkscape nie wystarczają używam <strong>Affinity Photo i Affinity Designer</strong>.
                </p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default About;
