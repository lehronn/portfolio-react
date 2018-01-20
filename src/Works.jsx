import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Works.css';

import './images/landscape-sky-night-stars-29435.jpg';

import sodakit from './images/works/sodakit.png';
import picturePerfect from './images/works/picturePerfect.jpg';
import activeBox from './images/works/activeBox.jpg';
import designCommunications from './images/works/designCommunications.jpg';
import designLab from './images/works/designLab.jpg';
import lifePhoto from './images/works/lifePhoto.jpg';
import niceToMeetYou from './images/works/niceToMeetYou.jpg';
import yourLogo from './images/works/yourLogo.jpg';

class Works extends Component {
  render() {
    return (<div id="works" className="container-fluid">
      <div className="row works">
        <div className="works-container">
          <div className="card-deck justify-content-center align-self-center">
            <div className="card outside-card col-lg-2">
              <img className="card-img-top" src={lifePhoto} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card inside-card col-lg-3">
              <img className="card-img-top" src={niceToMeetYou} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card outside-card col-lg-2">
              <img className="card-img-top" src={yourLogo} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-deck justify-content-center align-self-center">
            <div className="card outside-card col-lg-2">
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
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card inside-card col-lg-3">
              <img className="card-img-top" src={picturePerfect} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Picture Perfect</h5>
                <p className="card-text">Szablon na podstawie mojego boilerplateu sodakit.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
                </div>
              </div>
            </div>
            <div className="card outside-card col-lg-2">
              <img className="card-img-top" src={activeBox} alt="Card image cap"/>
              <div className="card-body text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <div className="text-center">
                  <span className="badge badge-pug">PUG</span>
                  <span className="badge badge-sass">Sass</span>
                  <span className="badge badge-bootstrap">Bootstrap</span>
                  <span className="badge badge-gulp">Gulp</span>
                </div>
                <br/><br/>
                <div className="card-links text-center">
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Zobacz</a>
                  <a className="text-light btn btn-primary card-link" href="https://github.com/lehronn/green-perfect"><i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;Github</a>
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
