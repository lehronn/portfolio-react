import React, { Component } from 'react';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from './App.css';
import Nav from './Nav';
import Slider from './Slider';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Mateusz Stomski</h1>
            <p className="lead">Cześć, jestem początkującym web developerem i mogę pomóc Ci z Twoim następnym projektem, jeśli jesteś zainteresowany współpracą zapraszam do kontaktu.</p>
          </div>
        </div>
        <div data-spy="scroll" data-target="#navbar" data-offset="0">
          <div id="about" className="container">
            <div className="row justify-content-center about">
              <div className="col">Tworzenie stron internetowych interesuje mnie od dawna, przez ponad dwa lata prowadziłem sklep internetowy a od pół roku pracuję nad tym by Webdev stał się moim zawodem. Ukończyłem półroczny kurs Kodilli traktujący o tworzeniu stron internetowych przy pomocy JavaScript w zakresie frontend i backend a teraz czas by nabrać doświadczenia i obycia z technologiami które poznałem.</div>
            </div>
          </div>
          <Slider />
          <div id="skills" className="container">
            <div className="row justify-content-center skills">
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
          <div id="works" className="container-fluid">
            <div className="row justify-content-center works">
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="contact" className="container">
            <div className="row justify-content-center contact">
              <div className="col">a</div>
              <div className="col">b</div>
              <div className="col">c</div>
            </div>
          </div>
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
          <div className="container-fluid sticky-bottom">
            <div className="row justify-content-center footer text-center">
              <div className="col-12">Mateusz Stomski &#174; 2018</div>
              <div className="col-12">crafted with true love to open sources.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
