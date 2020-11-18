import React, { Component } from 'react';
import { NavLink } from  'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productAction from '../redux/actions/product-action';

class ProductsComponent extends Component {
  
  addToCart(value){
    value.count = 1;
    value.price = value.discount_price;
    this.props.actions.addToCart(value)
  }

  render() {
    let productList = this.props.products.map((value, index) => {
      return (
        <div className="single-product col-md-3" key={index}>
          <div className="product-f-image">
            <img src={value.image} alt=""></img>
            <div className="product-hover">
              <a onClick={() => this.addToCart(value)} className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                          cart</a>
              <NavLink to={"/product/"+value.id} className="view-details-link"><i
                className="fa fa-link"></i> See details</NavLink>
            </div>
          </div>

      <h2><a href="single-product.html">{value.name}</a></h2>

          <div className="product-carousel-price">
            <ins>{value.actual_price}</ins> <del>{value.discount_price}</del>
          </div>
        </div>
      )


    })

    return (
      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="latest-product">
                <h2 className="section-title">{this.props.message}</h2>
                <div className="row">

                {productList}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(productAction, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);