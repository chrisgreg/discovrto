import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import PictureHolder from './pictureHolder';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PictureHolder />
        <Footer />
      </div>
    );
  }
}
