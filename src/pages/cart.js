import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productAction from '../redux/actions/product-action';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

class CartPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : this.props.products
    }
  }

  changeQuantity(mode, product, index){
    if(mode == 'plus'){
      product.count = product.count + 1;
    }
    else{
      if(product.count >= 1 ){
        product.count = product.count - 1;
      }
    }

    let priceStr = product.price.split('$')[1]; 
    let price = parseInt(priceStr);
    product.discount_price = "$" + price * product.count

    this.state.products[index] = product;
    this.setState({
      products: this.state.products
    })
  }


  render() {
    let checkOutProduct = this.state.products.map((value, index) => {
      return (
        <tr class="cart_item">
          <td class="product-remove">
            <a title="Remove this item" class="remove" href="#">×</a>
          </td>

          <td class="product-thumbnail">
            <a href="single-product.html"><img width="145" height="145"
              alt="poster_1_up" class="shop_thumbnail"
              src={value.image} /></a>
          </td>

          <td class="product-name">
            <a href="single-product.html">{value.name}</a>
          </td>

          <td class="product-price">
      <span class="amount">{ value.discount_price}</span>
          </td>

          <td class="product-quantity">
            <div class="quantity buttons_added">
              <input type="button" class="minus" value="-" onClick={() => this.changeQuantity('minus',value,index)}/>
              <input type="number" size="4" class="input-text qty text"
                title="Qty" min="0" step="1" value={value.count} />
              <input type="button" class="plus" value="+" onClick={() => this.changeQuantity('plus', value,index)} />
            </div>
          </td>

          <td class="product-subtotal">
            <span class="amount">{value.discount_price}</span>
          </td>
        </tr>
      )
    });

    let total = 0;
    if(this.state.products.length > 0){
      total = this.state.products.map((value, index) => {
        let priceStr = value.discount_price.split('$')[1]; 
        let price = parseInt(priceStr);
        return price
      }).reduce((previousValue, currentValue, index) => {
        return previousValue + currentValue
      })
    }
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <div className="product-big-title-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-bit-title text-center">
                  <h2>Shopping Cart</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product-area">
          <div class="zigzag-bottom"></div>
          <div class="container">
            <div class="row">


              <div class="col-md-12">
                <div class="product-content-right">
                  <div class="woocommerce">
                    <form method="post" action="#">
                      <table cellspacing="0" class="shop_table cart">
                        <thead>
                          <tr>
                            <th class="product-remove">&nbsp;</th>
                            <th class="product-thumbnail">&nbsp;</th>
                            <th class="product-name">Product</th>
                            <th class="product-price">Price</th>
                            <th class="product-quantity">Quantity</th>
                            <th class="product-subtotal">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {checkOutProduct}
                          {/* <tr class="cart_item">
                            <td class="product-remove">
                              <a title="Remove this item" class="remove" href="#">×</a>
                            </td>

                            <td class="product-thumbnail">
                              <a href="single-product.html"><img width="145" height="145"
                                alt="poster_1_up" class="shop_thumbnail"
                                src="img/product-thumb-2.jpg" /></a>
                            </td>

                            <td class="product-name">
                              <a href="single-product.html">Ship Your Idea</a>
                            </td>

                            <td class="product-price">
                              <span class="amount">£15.00</span>
                            </td>

                            <td class="product-quantity">
                              <div class="quantity buttons_added">
                                <input type="button" class="minus" value="-" />
                                <input type="number" size="4" class="input-text qty text"
                                  title="Qty" value="1" min="0" step="1" />
                                <input type="button" class="plus" value="+" />
                              </div>
                            </td>

                            <td class="product-subtotal">
                              <span class="amount">£15.00</span>
                            </td>
                          </tr> */}
                          <tr>
                            <td class="actions" colspan="6">
                              <div class="coupon">
                                <label for="coupon_code">Coupon:</label>
                                <input type="text" placeholder="Coupon code" value=""
                                  id="coupon_code" class="input-text" name="coupon_code" />
                                <input type="submit" value="Apply Coupon" name="apply_coupon"
                                  class="button" />
                              </div>
                              <input type="submit" value="Update Cart" name="update_cart"
                                class="button" />
                              <input type="submit" value="Checkout" name="proceed"
                                class="checkout-button button alt wc-forward" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>

                    <div class="cart-collaterals">





                      <div class="cart_totals ">
                        <h2>Cart Totals</h2>

                        <table cellspacing="0">
                          <tbody>
                            <tr class="cart-subtotal">
                              <th>Cart Subtotal</th>
                        <td><span class="amount">$ {total}</span></td>
                            </tr>

                            <tr class="shipping">
                              <th>Shipping and Handling</th>
                              <td>Free Shipping</td>
                            </tr>

                            <tr class="order-total">
                              <th>Order Total</th>
                        <td><strong><span class="amount">$ {total}</span></strong> </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>





                    </div>
                  </div>
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

function mapStateToProps(state) {
  return {
    products: state.productReducer.productList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);