import React, { Component } from 'react';

class ProductsComponent extends Component {

  render() {
    let productList = this.props.products.map((value, index) => {
      return (
        <div className="single-product col-md-3" key={index}>
          <div className="product-f-image">
            <img src={value.image} alt=""></img>
            <div className="product-hover">
              <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                          cart</a>
              <a href="single-product.html" className="view-details-link"><i
                className="fa fa-link"></i> See details</a>
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
                <h2 className="section-title">Latest Products</h2>
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

export default ProductsComponent;