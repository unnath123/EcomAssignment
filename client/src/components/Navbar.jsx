import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

const Navbar = ({ cartCount }) => {
    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 min-w-max">
                    <span className="text-2xl font-bold tracking-tight text-white">TechStore</span>
                    <span className="text-xs text-yellow-400 mt-1">Plus</span>
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl hidden md:flex relative">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="w-full py-2 px-4 rounded-l-sm text-gray-800 focus:outline-none"
                    />
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-r-sm transition-colors">
                        <Search size={20} />
                    </button>
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-6 min-w-max">
                    <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                        <User size={20} />
                        <span className="font-medium">Login</span>
                    </div>

                    <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-300 relative">
                        <div className="relative">
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-gray-900">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <span className="font-medium hidden sm:block">Cart</span>
                    </Link>
                </div>
            </div>

            {/* Categories Bar */}
            <div className="bg-gray-800 text-sm border-t border-gray-700">
                <div className="container mx-auto px-4 py-2 flex items-center space-x-6 overflow-x-auto no-scrollbar">
                    <div className="flex items-center space-x-1 font-bold cursor-pointer">
                        <Menu size={18} />
                        <span>All</span>
                    </div>
                    {['Electronics', 'Mobiles', 'Laptops', 'Accessories', 'Fashion', 'Home & Kitchen', 'New Arrivals'].map((cat) => (
                        <span key={cat} className="whitespace-nowrap cursor-pointer hover:text-white text-gray-300 transition-colors">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
