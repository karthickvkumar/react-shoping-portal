import React, { Component } from 'react';
import axios from 'axios';

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
      ],
      products: [],
      preivew: {
        topSelling: [],
        recentlyViewed: [],
        topNew: []
      }
    }
  }

  componentDidMount() {
    const latestProductURL = "https://shop143.herokuapp.com/telebuy/api/products/latest";
    const preivewURL = "https://shop143.herokuapp.com/telebuy/api/product/preview";
    axios.get(latestProductURL)
      .then((response) => {
        console.log(response)
        this.setState({
          products: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(preivewURL)
      .then((response) => {
        console.log(response)
        this.setState({
          preivew: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <ImageCarosule images={this.state.images}></ImageCarosule>
        <ProductsComponent products={this.state.products} message={"Latest Products"}></ProductsComponent>
        <ProductInfoComponent></ProductInfoComponent>
        <div class="product-widget-area">
          <div class="zigzag-bottom"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="single-product-widget">
                  <h2 class="product-wid-title">Top Sellers</h2>
                  <a href="" class="wid-view-more">View All</a>
                  <ProductPreivewComponent preivew={this.state.preivew.topSelling}></ProductPreivewComponent>
                </div>
              </div>

              <div class="col-md-4">
                <div class="single-product-widget">
                  <h2 class="product-wid-title">Recently Viewed</h2>
                  <a href="#" class="wid-view-more">View All</a>
                  <ProductPreivewComponent preivew={this.state.preivew.recentlyViewed}></ProductPreivewComponent>
                </div>
              </div>

              <div class="col-md-4">
                <div class="single-product-widget">
                  <h2 class="product-wid-title">Top New</h2>
                  <a href="#" class="wid-view-more">View All</a>
                  <ProductPreivewComponent preivew={this.state.preivew.topNew}></ProductPreivewComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default HomePage;