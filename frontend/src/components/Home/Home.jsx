import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='md:grid grid-cols-3'>
            {
                products.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default Home;