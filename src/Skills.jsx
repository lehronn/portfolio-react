import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="container-fluid skills">
        <div className="container">
          <div className="row justify-content-center text-light">
            <div className="col-12">
              <h5>Czego używam?</h5>
            </div>
            <div className="col-12 col-lg-3">
              <h5>HTML&SASS</h5>
              <p>Technologie będące u samych podstaw dzisiejszej mobilnej rewolucji nie stoją w miejscu a zastosowanie ich w dzisiejszych aplikacjach wymaga coraz bardziej zaawansowanych technik.<strong>Sass</strong> i <strong>PUG</strong> pozwalają na więcej, szybciej i wygodniej!</p>
            </div>
            <div className="col-12 col-lg-3">
              <h5>Javascript</h5>
              <p>JavaScript zmienił oblicze dzisiejszych stron internetowych. Od blokowanego i znienawidzonego języka client-side stał się uniwersalną technologią w której powstaje nie tylko front-end, ale i back-end stron internetowych oraz aplikacje dostępne na telefony i komputery.</p>
            </div>
            <div className="col-12 col-lg-3">
              <h5>ReactJS, Redux</h5>
              <p>JavaScript dzisiaj to nie tylko zwykły język ale wspaniała i bardzo aktywna społeczność dzięki której codziennie mają miejsce nowe innowacyjne rozwiązania. Jeśli chcemy być zawsze na bieżąco przyda się na pewno <strong>Babel, ReactJS, ReduxJS, JSX</strong> oraz <strong>React-Router</strong>.</p>
            </div>
            <div className="col-12 col-lg-3">
              <h5>Grunt, Gulp, Webpack</h5>
              <p>Tworzenie aplikacji internetowych jest dużo bardziej skomplikowane niż jeszcze kilka lat temu. By poradzić sobie z dzisiejszymi i przyszlymi zadaniami konieczne są dodatkowe narzędzia, takie jak: <strong>Git, Grunt, Gulp</strong> czy <strong>Webpack.</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
