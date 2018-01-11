import React, { Component } from 'react';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './images/landscape-sky-night-stars-29435.jpg';
import styles from './App.css';
import Nav from './Nav';
import Slider from './Slider';
import Works from './Works';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <div className="jumbotron">
          <div className="container jumbotron-header text-light">
            <span className="summa text-light">&sum;</span>
            <span className="summa-subtext text-light">suma wszystkich możliwości.</span>
            <h1 className="display-4">Mateusz Stomski</h1>
            <p className="lead">Cześć, jestem początkującym web developerem i mogę pomóc Ci z Twoim następnym projektem, jeśli jesteś zainteresowany współpracą zapraszam do kontaktu.</p>
          </div>
        </div>
        <div data-spy="scroll" data-target="#navbar" data-offset="0">
          <div id="about" className="container-fluid hello">
            <div className="row justify-content-center about">
              <div className="container">
                <div className="col text-light">Tworzenie stron internetowych interesuje mnie od dawna, przez ponad dwa lata prowadziłem sklep internetowy a od pół roku pracuję nad tym by Webdev stał się moim zawodem. Ukończyłem półroczny kurs Kodilli traktujący o tworzeniu stron internetowych przy pomocy JavaScript w zakresie frontend i backend a teraz czas by nabrać doświadczenia i obycia z technologiami które poznałem.</div>
                </div>
              </div>
            </div>
          <Slider />
          <div id="skills" className="container-fluid technology">
            <div className="container">
              <div className="row justify-content-center text-light skills">
              <div className="col-12">
                <h5>Technologie</h5>
              </div>
                <div className="col">
                  <h5>HTML&SASS</h5>
                  <p>Technologie będące u samych podstaw dzisiejszej mobilnej rewolucji nie stoją w miejscu a zastosowanie ich w dzisiejszych aplikacjach wymaga coraz bardziej zaawansowanych technik.<strong>Sass</strong> i <strong>PUG</strong> pozwalają na więcej, szybciej i wygodniej!</p>
                </div>
                <div className="col">
                  <h5>Javascript</h5>
                  <p>JavaScript dzisiaj to nie tylko zwykły język ale wspaniała i bardzo aktywna społeczność dzięki której codziennie mają miejsce nowe innowacyjne rozwiązania. Jeśli chcesz być zawsze na bieżąco przyda się na pewno <strong>Babel, ReactJS, ReduxJS</strong> oraz <strong>React-Router</strong>.</p>
                </div>
                <div className="col">
                  <h5>ReactJS, Redux</h5>
                  <p>JavaScript dzisiaj to nie tylko zwykły język ale wspaniała i bardzo aktywna społeczność dzięki której codziennie mają miejsce nowe innowacyjne rozwiązania. Jeśli chcesz być zawsze na bieżąco przyda się na pewno <strong>Babel, ReactJS, ReduxJS</strong> oraz <strong>React-Router</strong>.</p>
                </div>
                <div className="col">
                  <h5>Grunt, Gulp, Webpack</h5>
                  <p>Tworzenie aplikacji internetowych jest dużo bardziej skomplikowane niż jeszcze kilka lat temu. By poradzić sobie z dzisiejszymi i przyszlymi zadaniami konieczne są dodatkowe narzędzia, takie jak: <strong>Git, Grunt, Gulp</strong> czy <strong>Webpack.</strong></p>
                </div>
              </div>
            </div>
          </div>
          <Works />
          <div id="findme" className="container">
            <div className="row justify-content-center findme">
              <div className="col">
                <p>Linki społecznościowe</p>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Znajdź mnie
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Hashnode</a>
                    <a className="dropdown-item" href="#">LinkedIn</a>
                    <a className="dropdown-item" href="#">GitHub</a>
                    <a className="dropdown-item" href="#">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
