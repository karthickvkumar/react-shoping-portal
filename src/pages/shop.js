import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productAction from '../redux/actions/product-action';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import ProductsComponent from '../components/products';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProduct: []
    }
  }

  componentDidMount() {
    //this.props.actions.addToCart({name: 'Iphone 12'})
    const url = "https://shop143.herokuapp.com/telebuy/api/products";
    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({
          allProduct: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <div class="product-big-title-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="product-bit-title text-center">
                  <h2>Smartphones</h2>
                </div>
                <ProductsComponent products={this.state.allProduct} 
                message={''}></ProductsComponent>
              </div>
            </div>
          </div>
          <FooterComponent></FooterComponent>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(productAction, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);