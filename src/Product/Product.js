import React from 'react';
import './Product.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;

    return (
        <div className='product'>
                <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <br/>
                <p> ${price}  </p>
                <p><small> by: {seller} </small> </p>
                <p><small>Ratings: {ratings} stars </small> </p>
            </div>
                <button className='btn-cart' onClick={() => props.handleAddProduct(props.product)}>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;