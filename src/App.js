import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.min.css"

import HomePage from './pages/home';

class App extends Component {

  render() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;