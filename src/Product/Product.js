import React from 'react';
import './Product.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;

    return (
        <div className='product'>
                <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p><small> by: {seller} </small> </p>
                <p> ${price}  </p>
                <p><small> Only {stock} left in stock - Order soon </small> </p>
                <button className='main-button' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;