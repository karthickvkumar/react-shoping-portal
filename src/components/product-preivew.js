import React, { Component } from 'react';

class ProductPreivewComponent extends Component {
    render() {
        let productPreview = this.props.preivew.map((value, index) => {
            return (
                <div class="single-wid-product" key={index}>
                    <a href="single-product.html">
                        <img src={value.image} alt=""
                            class="product-thumb"></img></a>
                    <h2><a href="single-product.html">{value.name}</a></h2>
                    <div class="product-wid-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product-wid-price">
                        <ins>{value.actual_price}</ins> <del>{value.discount_price}</del>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {productPreview}
            </div>
        );
    }
}

export default ProductPreivewComponent;