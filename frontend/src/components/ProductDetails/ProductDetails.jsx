import { useLoaderData } from 'react-router-dom';
import useCart  from '../hook/useCart'
const ProductDetails = () => {
    const products = useLoaderData();
    console.log(products);

    const { addToCart } = useCart();

    const handleCart = (product) => {
        addToCart(product); // saves to context + localStorage
        alert('✅ Items added to Cart!')
    };

    return (
        <div>
            <div className="hero bg-base-200 mb-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={products.image}
                        className="rounded-lg shadow-2xl mr-5 md:h-[70vh]"
                    />
                    <div className="card-body order-4 border-red-600 md:w-[20vw]">
                        <h2 className="card-title text-3xl md:w-[20vw] mb-3 text-left">
                            {products.title}
                        </h2>
                        <p className='text-left text-xl'>Price : {products.price}$</p>
                        <p className='text-left text-xl'>AdditionalInfo : {products.additionalInfo}</p>
                        <p className='text-left text-xl'>Description : {products.description}</p>
                        <button className="btn btn-success" onClick={() => handleCart(products)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;