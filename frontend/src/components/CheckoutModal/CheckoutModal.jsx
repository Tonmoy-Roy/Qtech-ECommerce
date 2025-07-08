import React, { useState } from 'react';
import useCart from '../hook/useCart';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cart, totalAmount } = useCart();
    const [form, setForm] = useState({ name: '', email: '', address: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.address) {
            alert('Please fill out all fields');
            return;
        }

        console.log('Order submitted:', { ...form, cart, total: totalAmount });
        alert('✅ Order placed successfully!');
        localStorage.removeItem('cart'); // clear cart
        window.location.reload(); // optional: force UI reset
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
                <h2 className="text-xl font-bold mb-4">Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                    <textarea
                        name="address"
                        placeholder="Your Address"
                        value={form.address}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                    />
                    <div className="flex justify-between mt-4">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="button" onClick={onClose} className="btn btn-ghost">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutModal;
