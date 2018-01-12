import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from './Works.css';

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
    return (
      <div id="works" className="container-fluid">
        <div className="row justify-content-center works">
          <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={sodakit} alt="sodakit" />
            <div className="card-body">
              <h5 className="card-title">Soda Kit</h5>
              <p className="card-text">Boilerplate który stworzyłem na swoje potrzeby, pozwala szybko zacząć pracę z PUG, Sassem, Gulpem i Bootstrapem. Optymalizacja obrazów, minimalizacja plików, mapy źródłowe, eslint, awesome icons - wszystko na pokładzie.</p>
              <span className="badge badge-pug">PUG</span>
              <span className="badge badge-sass">Sass</span>
              <span className="badge badge-bootstrap">Bootstrap</span>
              <span className="badge badge-gulp">Gulp</span>
              <br /><br />
              <div class="btn-group text-center" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Zobacz</button>
                <button type="button" class="btn btn-secondary">GitHub</button>
                <button type="button" class="btn btn-secondary">Pobierz</button>
              </div>
            </div>
          </div>
            <div className="card">
              <img className="card-img-top" src={picturePerfect} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Picture Perfect</h5>
                <p className="card-text">Szablon na podstawie mojego boilerplate`u sodakit.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={activeBox} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={designCommunications} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={designLab} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={lifePhoto} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={niceToMeetYou} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={yourLogo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <span className="badge badge-pug">PUG</span>
                <span className="badge badge-sass">Sass</span>
                <span className="badge badge-bootstrap">Bootstrap</span>
                <span className="badge badge-gulp">Gulp</span>
                <br /><br />
                <div class="btn-group text-center" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
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
