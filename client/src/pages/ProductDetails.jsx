import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
                setLoading(false);
            });
    }, [id]);

    const addToCart = () => {
        if (!product) return;

        fetch('http://localhost:5000/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(() => {
                window.dispatchEvent(new Event('cartUpdated'));
                alert('Added to cart!');
            });
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (!product) return <div className="text-center py-10">Product not found</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
                    <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                    <div className="text-3xl font-bold text-indigo-600 mb-8">${product.price}</div>
                    <button
                        onClick={addToCart}
                        className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
                    >
                        <ShoppingCart size={24} />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
