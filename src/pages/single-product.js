import React, { Component } from 'react';
import axios from 'axios';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';


class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount() {
    let data = this.props.match.params;
    if (data && data.id) {
      let url = "https://shop143.herokuapp.com/telebuy/api/product/" + data.id;
      console.log(url)
      axios.get(url)
          .then((response) => {
            console.log(response.data)
            this.setState({
              product: response.data
            })
          })
          .catch((error) => {

          })
    } else {
      alert("Invalid URL")
    }
  }
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <div className="product-big-title-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-bit-title text-center">
                  <h2>Preview</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.product.id ? 
             <div className="single-product-area">
             <div className="zigzag-bottom"></div>
             <div className="container">
               <div className="row">
   
   
                 <div className="col-md-12">
                   <div className="product-content-right">
                     <div className="product-breadcroumb">
                       <a href="">Home</a>
                       <a href="">Category Name</a>
                       <a href="">{this.state.product.product}</a>
                     </div>
   
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="product-images">
                           <div className="product-main-img">
                             <img src={this.state.product.image} alt=""></img>
                           </div>
   
   
                         </div>
                       </div>
   
                       <div className="col-sm-6">
                         <div className="product-inner">
        <h2 className="product-name">{this.state.product.product}</h2>
                           <div className="product-inner-price">
                             <ins>{this.state.product.discount_price}</ins> <del>{this.state.product.actual_price}</del>
                           </div>
   
                           <form action="" className="cart">
                             <div className="quantity">
                               <input type="number" size="4" className="input-text qty text" title="Qty"
                                  name="quantity" min="1" step="1"></input>
                             </div>
                             <button className="add_to_cart_button" type="submit">Add to cart</button>
                           </form>
   
                           <div className="product-inner-category">
                             <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a
                               href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                           </div>
   
   
                           <div className="tab-content">
                             <div role="tabpanel" id="home">
                               <h2>Product Description</h2>
        <p>{this.state.product.description}</p>
                             </div>
   
                           </div>
                         </div>
   
                       </div>
                     </div>
   
                     </div>
                   </div>
                 </div>
               </div>
             </div>
         : 
         <div style={{height: '65.5vh'}}>
           <img src={require('../images/loader.gif').default} style={{width: '100px'}}/> 
          </div>
        }
       
          <FooterComponent></FooterComponent>
        </div >
    );
  }
}

export default SingleProductPage;