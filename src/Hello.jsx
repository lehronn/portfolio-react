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
                <a className="text-light btn btn-primary card-link float-right btn-hello" target="_blank" rel="noopener noreferrer" href="http://stomski.pl/others/kodilla.jpg"><i className="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;&nbsp;Certyfikat Kodilli</a>
                <a className="text-light btn btn-primary card-link float-right btn-hello" target="_blank" rel="noopener noreferrer" href="http://stomski.pl/others/cv.pdf"><i className="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;&nbsp;Moje CV</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Hello;
