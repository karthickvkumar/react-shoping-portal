import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ImageCarosule extends Component {
  render() {
    let images = this.props.images.map((value, index) => {
      return(
        <div key={index}>
          <img src={value} style={{"height" : "650px"}}/>
        </div>
      )
    });
    return (
      <Carousel>
        {images}
      </Carousel>
    );
  }
}

export default ImageCarosule;