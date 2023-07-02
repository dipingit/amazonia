import React from 'react';
import './Cart.css'; 

const Cart = (props) => {
    const {cart, clearCart, children} = props;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    let tax = (total * 7.5 / 100).toFixed(2);
    let grandTotal = (total + shipping + Number(tax)).toFixed(2); 
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>  
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: ${grandTotal}</p>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}

        </div>
    );
};

export default Cart;