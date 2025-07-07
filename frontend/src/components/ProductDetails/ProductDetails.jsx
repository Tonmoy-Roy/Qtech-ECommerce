import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="hero bg-base-200 mb-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={products.image}
                        className=" rounded-lg shadow-2xl mr-5"
                    />
                    <div className="card-body order-4 border-red-600 md:w-[20vw]">
                        <h2 className="card-title text-3xl md:w-[20vw] mb-3">
                            {products.name}
                        </h2>
                        <p className='text-left text-xl'>Category : {products.category}</p>
                        <p className='text-left text-xl'>Released : {products.published_date}</p>
                        <p></p>
                        <div className="md:flex justify-between mb-5">
                            <div>
                                <p className='text-left text-xl'>Ratings : {products.ratings}/10</p>
                            </div>
                            <div className="rating ">
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            </div>
                        </div>
                        <p className="mb-5 text-left">{products.details}</p>
                        {/* <button className="btn btn-neutral" onClick={() => handleCart(products)}>Add to Watchlist</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;