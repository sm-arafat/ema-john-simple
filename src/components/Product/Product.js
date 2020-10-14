import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const product = (props) => {
    // console.log(props);
    // 39.7 SHORTCUT DESTRUCTURING OF PROPS
    const {img, name, seller, price, stock, key} = props.product
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "content-part">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small><b>Product By:</b> {seller}</small></p>
                <p><b>Price:</b> $ {price}</p>                
                <p><small>Only {stock} left in stock - Order soon</small></p>                
                {props.showAddToCart && <button 
                className = "cart-btn" onClick = {() => props.handelAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart
                </button>}
            </div>
        </div>
    );
};

export default product;