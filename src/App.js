import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.min.css"

import HomePage from './pages/home';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import ShopPage from './pages/shop';
import SingleProductPage from './pages/single-product';

import configureStore from './redux/store/configure-store';
const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/product/:id" component={SingleProductPage}></Route>
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;