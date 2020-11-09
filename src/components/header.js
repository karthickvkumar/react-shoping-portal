import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header" style={{"visibility": "hidden"}}>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop page</a></li>
                        <li><a href="single-product.html">Single product</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default HeaderComponent;