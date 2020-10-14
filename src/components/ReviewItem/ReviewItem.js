import React from 'react';

const ReviewItem = (props) => {

const {name, quantity, key,price} = props.product;
const reviewItemStyles = {
    borderBottom: '1px solid lightgray',
    paddingBottom: '5px',
    marginBottom: '5px',
    marginLeft: '200px',

};

    return (
        <div style={reviewItemStyles} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Order quantity : {quantity}</p>
            <p><small>Price : ${price}</small></p>
            <br/>
            <button 
            className = "cart-btn"
            onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;