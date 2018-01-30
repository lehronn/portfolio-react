import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Works.css';

import './images/landscape-sky-night-stars-29435.jpg';

import sodakit from './images/works/sodakit.png';
import picturePerfect from './images/works/picturePerfect.jpg';
import bluesky from './images/works/bluesky.jpg';
import githubSearch from './images/works/githubSearch.jpg';
import giphySearch from './images/works/giphySearch.jpg';
import reactChat from './images/works/reactChat.jpg';

class Works extends Component {
  render() {
    return (<div id="works" className="container-fluid">
      <div className="row works">
        <div className="works-container">
          <div className="card-deck justify-content-center align-self-center">
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={reactChat} alt="React Chat"/>
              <div className="card-body text-light">
                <h5 className="card-title">React Chat</h5>
                <p className="card-text">Aplikacja czatu internetowego napisana za pomocą Node.js, biblioteki Express i React w ramach kursu <strong>Kodilla WebDeveloper</strong>.</p>
                <div className="text-center">
                  <span className="badge badge-success">Node.js</span>
                  <span className="badge badge-primary">Express.js</span>
                  <span className="badge badge-success">React.js + JSX</span>
                  <span className="badge badge-secondary">Socket.io</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="http://www.chat.stomski.pl"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/18-Chat-Application"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card inside-card col-xl-4 col-lg-4 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={bluesky} alt="Blue Sky"/>
              <div className="card-body text-light">
                <h5 className="card-title">Blue Sky Portfolio</h5>
                <p className="card-text">To moje portfolio na którym właśnie się znajdujesz. Stworzone za pomocą React, Bootstrap4, zawiera scroll-spying i localscroll. W pełni responsywne i wspiera technologię Progressive Web Apps, więc możesz jej używać na swoim telefonie i tablecie nawet bez dostępu do sieci, tak jak zwykłą aplikację.</p>
                <div className="text-center">
                  <span className="badge badge-success">React.js + JSX</span>
                  <span className="badge badge-bootstrap">Bootstrap 4</span>
                  <span className="badge badge-gulp">Webpack</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/portfolio-react"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={picturePerfect} alt="Green Perfect"/>
              <div className="card-body text-light">
                <h5 className="card-title">Green Perfect</h5>
                <p className="card-text">Szablon responsywnej strony internetowej którą stworzyłem w trakcie ćwiczeń Kodilli o CSS i Gridzie. Szablon pociąłem na podstawie PDF który dostałem jako zadanie dodatkowe w trakcie kursu Kodilli. </p>
                <div className="text-center">
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">12 Grid + Flex</span>
                  <span className="badge badge-gulp">Grunt.js</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="http://stomski.pl/projects/greenPerfect/index.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-deck justify-content-center align-self-center">
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={githubSearch} alt="GitHub Search"/>
              <div className="card-body text-light">
                <h5 className="card-title">GitHub Search</h5>
                <p className="card-text">Wyszukiwarka użytkowników GitHub, którą napisałem w trakcie kursu Kodilli na podstawie API GitHuba.</p>
                <div className="text-center">
                  <span className="badge badge-success">React.js + JSX</span>
                  <span className="badge badge-gray">ES15 + Babel</span>
                  <span className="badge badge-sass">API</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="http://stomski.pl/projects/githubSearch/index.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/15.9-GitHub-User-search"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card inside-card col-xl-4 col-lg-4 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={sodakit} alt="Sodakit"/>
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
                  <a className="text-light btn btn-primary card-link" href="http://stomski.pl/projects/sodakit/index.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/sodakit-front"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card outside-card col-xl-3 col-lg-3 col-md-10 col-sm-12 col-12">
              <img className="card-img-top" src={giphySearch} alt="Giphy Search"/>
              <div className="card-body text-light">
                <h5 className="card-title">Giphy Search</h5>
                <p className="card-text">Wyszukiwarka gifów napisana za pomocą React.JS i API GIPHY.com którą napisałem w ramach kursu <strong>Kodilla WebDeveloper</strong>.</p>
                <div className="text-center">
                  <span className="badge badge-success">React.js + JSX</span>
                  <span className="badge badge-sass">API</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="http://stomski.pl/projects/giphySearch/index.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/giphy-search"><i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
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
