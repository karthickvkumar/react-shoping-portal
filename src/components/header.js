import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'

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
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/shop">Shop page</NavLink></li>
                        <li><NavLink to="/product">Single product</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default HeaderComponent;