import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const {products, initialCart} = useLoaderData(); //{products: products, initialCart: initialCart}
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);     //remove from localStorage
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id} product={product} handleRemoveItem={handleRemoveItem}>
                    </ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No items available for review! Please <Link to='/'>Shop More</Link> </h2>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link> 
                </Cart>
            </div>
        </div>
    );
};

export default Order;