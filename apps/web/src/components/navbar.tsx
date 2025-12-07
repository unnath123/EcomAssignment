'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, User, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
    const { cartCount } = useCart();
    const { logout } = useAuth();

    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 min-w-max">
                    <span className="text-2xl font-bold tracking-tight text-white">TechStore</span>
                    <span className="text-xs text-yellow-400 mt-1">Pro</span>
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
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <User size={20} />
                            <span className="font-medium">Admin</span>
                        </div>
                        <button onClick={logout} className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors">
                            <LogOut size={18} />
                            <span className="text-sm font-medium">Logout</span>
                        </button>
                    </div>

                    <Link href="/cart" className="flex items-center space-x-2 hover:text-gray-300 relative">
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
                    {['Mobiles', 'Laptops', 'Headphones', 'Watches', 'Accessories', 'Gaming'].map((cat) => (
                        <Link key={cat} href={`/products/${cat}`} className="whitespace-nowrap cursor-pointer hover:text-white text-gray-300 transition-colors">
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
