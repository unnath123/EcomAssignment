import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);

    const addToCart = (product) => {
        fetch('http://localhost:5000/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                // Ideally we would update a global cart state here
                // For now, we'll just alert or rely on a page refresh/context update if we had one
                console.log('Added to cart:', data);
                window.dispatchEvent(new Event('cartUpdated')); // Simple event for demo
            });
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
                    <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">New Arrivals</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Next Gen <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Tech is Here</span></h1>
                        <p className="text-xl text-gray-300 max-w-lg">Discover the latest gadgets and accessories that elevate your lifestyle. Free shipping on orders over $50.</p>
                        <div className="flex space-x-4">
                            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg">
                                Shop Now
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all">
                                View Deals
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?w=600&q=80"
                            alt="Hero"
                            className="rounded-2xl shadow-2xl max-h-[400px] object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                    <span className="w-2 h-8 bg-yellow-400 mr-3 rounded-sm"></span>
                    Shop by Category
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {['Laptops', 'Mobiles', 'Headphones', 'Watches', 'Accessories', 'Gaming'].map((cat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 group text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="font-semibold text-gray-700 group-hover:text-indigo-600">{cat}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            <span className="w-2 h-8 bg-indigo-600 mr-3 rounded-sm"></span>
                            Trending Products
                        </h2>
                        <p className="text-gray-500 mt-2 ml-5">Handpicked selection just for you</p>
                    </div>
                    <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 hidden md:block">View All Products &rarr;</a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
