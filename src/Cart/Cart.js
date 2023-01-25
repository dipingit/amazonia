import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }
    else if(total < 50 && total != 0){
        shipping = 5;
    }
    let tax = (total/10).toFixed(2); //wrong calculation of tax
    let grandTotal = (total + shipping + Number(tax)).toFixed(2); 
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total} </p>  
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;