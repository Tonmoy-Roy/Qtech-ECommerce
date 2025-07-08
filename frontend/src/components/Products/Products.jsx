import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product = {} }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={product.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Price : {product.price}$</p>
                <div className='flex'>
                    <button className='btn btn-success mr-5'>Add to cart</button>
                    <Link to={`/details/${product.id}`}>
                        <button className='btn btn-neutral'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;