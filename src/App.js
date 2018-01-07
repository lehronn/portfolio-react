import React, { Component } from 'react';
import styles from './App.css';


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header>Hello!</header>
        <nav></nav>
        <div className="row">
          <div className="col-xs-6 col-md-4">a</div>
          <div className="col-xs-6 col-md-4">b</div>
          <div className="col-xs-6 col-md-4">c</div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
