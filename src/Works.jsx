import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Works.css';

import './images/landscape-sky-night-stars-29435.jpg';

import sodakit from './images/works/sodakit.png';
import picturePerfect from './images/works/picturePerfect.jpg';
import activeBox from './images/works/activeBox.jpg';
import lifePhoto from './images/works/lifePhoto.jpg';
import niceToMeetYou from './images/works/niceToMeetYou.jpg';
import yourLogo from './images/works/yourLogo.jpg';

class Works extends Component {
  render() {
    return (<div id="works" className="container-fluid">
      <div className="row works">
        <div className="works-container">
          <div className="card-deck justify-content-center align-self-center">
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={lifePhoto} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Biuro podróży</h5>
                <p className="card-text">Aplikacja typu single-page zawierająca listę krajów z informacjami o nich. Napisana w React.js w ramach kursu <strong>Kodilla WebDeveloper</strong>.</p>
                <div className="text-center">
                  <span className="badge badge-pug">React.js</span>
                  <span className="badge badge-sass">React Router</span>
                  <span className="badge badge-bootstrap">Redux</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/20.3"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card inside-card col-xl-4 col-lg-4 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={niceToMeetYou} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Giphy Search</h5>
                <p className="card-text">Wyszukiwarka gifów napisana za pomocą React.JS i API GIPHY.com którą napisałem w ramach kursu <strong>Kodilla WebDeveloper</strong>.</p>
                <div className="text-center">
                  <span className="badge badge-success">React.js</span>
                  <span className="badge badge-sass">REST Api</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/giphy-search"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={yourLogo} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">React Chat</h5>
                <p className="card-text">Aplikacja czatu internetowego napisana za pomocą Express i React w ramach kursu <strong>Kodilla WebDeveloper</strong>.</p>
                <div className="text-center">
                  <span className="badge badge-success">Node.js</span>
                  <span className="badge badge-primary">Express.js</span>
                  <span className="badge badge-success">React.js</span>
                  <span className="badge badge-secondary">Socket.io</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-deck justify-content-center align-self-center">
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={picturePerfect} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Picture Perfect</h5>
                <p className="card-text">Szablon responsywnej strony internetowej na podstawie mojego boilerplateu Sodakit-front. </p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card inside-card col-xl-4 col-lg-4 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={sodakit} alt="sodakit"/>
              <div className="card-body text-light">
                <h5 className="card-title">Soda Kit</h5>
                <p className="card-text">Boilerplate który stworzyłem na swoje potrzeby, pozwala szybko zacząć pracę z PUG, Sassem, Gulpem i Bootstrapem. Optymalizacja obrazów, minimalizacja plików, mapy źródłowe, eslint, awesome icons - wszystko na pokładzie.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/sodakit-front"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={activeBox} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Active Box</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/active-box-theme.git"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        );
  }
}

export default Works;
