import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import fakeData from '../../fakeData';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // });

    const handleAddProduct = (product) => {
        // console.log('Product Added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
   
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    //  products.map(product=> <Product 
                    //     key={product.id}
                    //     product={product}
                    //     handleAddProduct={handleAddProduct}
                    //     > </Product>)
                    products.map(pd => <Product product={pd} handleAddProduct = {handleAddProduct}/>) 
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;