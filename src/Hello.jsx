import React, { Component } from 'react';
import styles from './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div data-spy="scroll" data-target="#navbar" data-offset="0">
        <div id="about" className="container-fluid hello">
          <div className="row">
            <div className="container">
              <div className="col text-light">Tworzenie stron internetowych interesuje mnie od dawna, przez ponad dwa lata prowadziłem sklep internetowy a od pół roku pracuję nad tym by Webdev stał się moim zawodem. Ukończyłem półroczny kurs Kodilli traktujący o tworzeniu stron internetowych przy pomocy JavaScript w zakresie frontend i backend a teraz czas by nabrać doświadczenia i obycia z technologiami które poznałem.</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Hello;
