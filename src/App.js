import React, { Component } from 'react';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from './App.css';
import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Mateusz Stomski</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>
        </div>
        <div data-spy="scroll" data-target="#navbar" data-offset="0">
          <div id="about" className="container">
            <div className="row justify-content-center about">
              <div className="col">a</div>
              <div className="col">b</div>
              <div className="col">c</div>
            </div>
          </div>
          <div id="skills" className="container">
            <div className="row justify-content-center skills">
              <div className="col">a</div>
              <div className="col">b</div>
              <div className="col">c</div>
            </div>
          </div>
          <div id="works" className="container-fluid">
            <div className="row justify-content-center works">
              <div className="col">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
              <div className="col">a</div>
              <div className="col">b</div>
              <div className="col">c</div>
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
