import React, { Component } from 'react';
import './Slider.css';
import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';

class Slider extends Component {
  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="false">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img0} alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <p>Aktualnie uczę się JavaScriptu i Reactjs. Skupiam się na front-endzie i ćwiczę CSS by w następnej kolejności przejść do Node.js i MongoDB.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <p>W mojej pracy i życiu prywatnym, wszędzie tam gdzie to możliwe używam otwartego oprogramowania takiego jak <strong>Fedora, Atom, Wordpress, Gimp, Inkscape czy Firefox</strong>. Jestem zdania, że otwarte źródła gwarantują bezpieczeństwo, poszanowanie prywatności, innowacyjność i najwyższą jakość.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <p>Tych cech wymagam od oprogramowania którego używam, oraz projektów które sam tworzę. Dzięki OpenSources ja i moi klienci nie są narażeni na przywiązanie do jedynego, konkretnego dostawcy. Gdy Gimp i Inkscape nie wystarczają używam <strong>Affinity Photo i Affinity Designer</strong>.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
