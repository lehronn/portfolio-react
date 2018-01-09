import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from './Works.css';

class Works extends Component {
  render() {
    return (
      <div id="works" className="container-fluid">
        <div className="row justify-content-center works">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Picture Perfect</h5>
                <p className="card-text">Szablon na podstawie mojego boilerplate`u sodakit.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Soda Kit</h5>
                <p className="card-text">Boilerplate który stworzyłem na swoje potrzeby, zawiera skonfigurowanego Gulpa, gotową paletę kolorów Metro/Material opartą na zmiennych w Sassie, struktura plików jest napisana w PUGu.</p>
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-danger">PUG</span>
                <span className="badge badge-warning">JS</span>
                <span className="badge badge-info">Sass</span>
                <span className="badge badge-light">Light</span>
                <span className="badge badge-dark">PUG</span>
                <span className="badge badge-dark">Sass</span>
                <span className="badge badge-dark">Bootstrap</span>
                <span className="badge badge-dark">Gulp</span>
                <span className="badge badge-dark">SodaKit</span>
                <br /><br />
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary">Zobacz</button>
                  <button type="button" class="btn btn-secondary">GitHub</button>
                  <button type="button" class="btn btn-secondary">Pobierz</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
          </div>

          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-block">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
