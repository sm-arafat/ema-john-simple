import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "content-part">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small><b>Product By:</b> {seller}</small></p>
                <p><b>Price:</b> $ {price}</p>                
                <p><small>Only {stock} left in stock - Order soon</small></p>                
                <button className = "cart-btn" onClick = {() => props.handelAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default product;