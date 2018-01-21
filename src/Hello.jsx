import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
        <div id="hello" className="container-fluid hello">
          <div className="container">
            <div className="row">
              <div className="col-12 text-light">
                Tworzenie stron internetowych interesuje mnie od dawna, przez ponad dwa lata prowadziłem sklep internetowy, a od pół roku pracuję nad tym by Webdev stał się moim zawodem. Ukończyłem <strong>półroczny kurs Kodilli</strong> traktujący o tworzeniu stron internetowych przy pomocy JavaScript w zakresie frontend i backend a teraz czas by nabrać doświadczenia i obycia z technologiami które poznałem.
                <br/><br/>
                <button type="button" className="btn btn-primary float-right">
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;&nbsp;Moje CV
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Hello;
