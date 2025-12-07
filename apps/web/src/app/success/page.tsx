'use client';

import Navbar from '@/components/navbar';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
    const orderId = Math.floor(Math.random() * 1000000);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
                <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
                <p className="text-gray-500 mb-8">Order ID: #{orderId}</p>

                <Link
                    href="/"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}
