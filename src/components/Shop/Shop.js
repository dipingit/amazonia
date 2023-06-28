import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    setCart(savedCart);
    }, [products])

    const handleAddToCart = (SelectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === SelectedProduct.id);
        if(exist){
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            exist.quantity = exist.quantity + 1; 
            newCart = [...rest, exist];
        }
        else{
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }
        setCart(newCart);
        addToDb(SelectedProduct.id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
   
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   products.map(product => <Product key = {product.id} product={product} handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;