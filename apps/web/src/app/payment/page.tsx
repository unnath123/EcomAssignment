'use client';

import Navbar from '@/components/navbar';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { CreditCard, Wallet, Smartphone } from 'lucide-react';

export default function PaymentPage() {
    const router = useRouter();
    const { clearCart, cartTotal } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handlePayment = () => {
        // Simulate payment processing
        setTimeout(() => {
            clearCart();
            router.push('/success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold mb-6 text-gray-800">Payment</h1>

                    <div className="mb-8">
                        <p className="text-gray-600 mb-2">Total Amount to Pay</p>
                        <p className="text-3xl font-bold text-gray-900">${cartTotal.toFixed(2)}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'hover:bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mr-4"
                            />
                            <CreditCard className="mr-3 text-gray-600" />
                            <span className="font-medium">Credit/Debit Card</span>
                        </label>

                        <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50' : 'hover:bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={paymentMethod === 'upi'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mr-4"
                            />
                            <Smartphone className="mr-3 text-gray-600" />
                            <span className="font-medium">UPI</span>
                        </label>

                        <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'wallet' ? 'border-indigo-600 bg-indigo-50' : 'hover:bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="payment"
                                value="wallet"
                                checked={paymentMethod === 'wallet'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mr-4"
                            />
                            <Wallet className="mr-3 text-gray-600" />
                            <span className="font-medium">Wallets</span>
                        </label>
                    </div>

                    {paymentMethod === 'card' && (
                        <div className="space-y-4 mb-8 p-4 bg-gray-50 rounded-md">
                            <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border rounded-md" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border rounded-md" />
                                <input type="text" placeholder="CVV" className="w-full px-4 py-2 border rounded-md" />
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handlePayment}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}
