import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import ImageCarosule from '../components/image-carosule';
import ProductsComponent from '../components/products';
import ProductInfoComponent from '../components/productInfo';
import ProductPreivewComponent from '../components/product-preivew';
import FooterComponent from '../components/footer';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../images/slider-1.jpg').default,
        require('../images/slider-2.jpg').default,
        require('../images/slider-3.jpg').default,
      ]
    }
  }
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <ImageCarosule images={this.state.images}></ImageCarosule>
        <ProductsComponent></ProductsComponent>
        <ProductInfoComponent></ProductInfoComponent>
        <ProductPreivewComponent></ProductPreivewComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default HomePage;