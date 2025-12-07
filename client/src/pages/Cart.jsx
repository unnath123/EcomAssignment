import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = () => {
        fetch('http://localhost:5000/api/cart')
            .then(res => res.json())
            .then(data => setCartItems(data));
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const removeFromCart = (id) => {
        fetch(`http://localhost:5000/api/cart/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setCartItems(data);
                window.dispatchEvent(new Event('cartUpdated'));
            });
    };

    const checkout = () => {
        fetch('http://localhost:5000/api/cart/checkout', {
            method: 'POST',
        })
            .then(res => res.json())
            .then(() => {
                setCartItems([]);
                window.dispatchEvent(new Event('cartUpdated'));
                alert('Checkout successful! Thank you for your purchase.');
            });
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6 space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-6 last:border-0 last:pb-0">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md bg-gray-100" />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-gray-500">${item.price} x {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 p-2"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-2xl font-bold mb-4 md:mb-0">
                            Total: <span className="text-indigo-600">${total.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={checkout}
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold w-full md:w-auto"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
