import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 flex flex-col h-full">
            <Link to={`/product/${product.id}`} className="relative group">
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                {/* Discount Badge Mock */}
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                    20% OFF
                </span>
            </Link>

            <div className="p-4 flex flex-col flex-grow">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-gray-900 font-medium hover:text-indigo-600 line-clamp-2 mb-1 h-12">
                        {product.title}
                    </h3>
                </Link>

                {/* Rating Mock */}
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        <Star size={14} className="text-gray-300" fill="currentColor" />
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(128)</span>
                </div>

                <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-3">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                    </div>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-sm transition-colors text-sm"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
