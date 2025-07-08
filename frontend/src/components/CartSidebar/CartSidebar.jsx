import React from 'react';
import useCart from '../hook/useCart';

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, increaseQty, decreaseQty, totalAmount } = useCart();

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button onClick={onClose}>✖</button>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-150px)] space-y-4">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-2">
                            <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p>${item.price} x {item.qty}</p>
                                <div className="flex space-x-2 mt-1">
                                    <button className="btn btn-xs" onClick={() => decreaseQty(item.id)}>-</button>
                                    <button className="btn btn-xs" onClick={() => increaseQty(item.id)}>+</button>
                                </div>
                            </div>
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t">
                <p className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</p>
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded">Checkout</button>
            </div>
        </div>
    );
};

export default CartSidebar;
