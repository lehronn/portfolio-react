import React, { Component } from 'react';
import './Slider.css';
import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';

class Slider extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img0} alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Strony i wizytówki internetowe.</h5>
              <p>...zaoferujesz swoim klientom.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img1} alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Wdrażanie Wordpressa, tłumaczenie i obsługa wtyczek.</h5>
              <p>...to właśnie jest Internet.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Pozycjonowanie pasywne, ocena semantyki kodu.</h5>
              <p>To osiągniemy razem.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
