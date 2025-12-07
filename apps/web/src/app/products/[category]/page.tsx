'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function ProductListing() {
    const params = useParams();
    const category = decodeURIComponent(params.category as string);
    const { addToCart } = useCart();

    const filteredProducts = products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">{category}</h1>

                {filteredProducts.length === 0 ? (
                    <p className="text-gray-500">No products found in this category.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48 w-full bg-gray-200">
                                    {/* Using img tag for simplicity with external URLs in this mock setup */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-3">{product.specs}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
