import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-16 mb-12 relative overflow-hidden">
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
              <div className="relative w-[600px] h-[400px]">
                {/* Placeholder for Hero Image - using a div for now to avoid Next.js Image errors if remote patterns aren't set */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <span className="text-4xl font-bold text-white">Hero Image</span>
                </div>
              </div>
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
              <Link key={idx} href={`/products/${cat}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 group text-center h-full">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold text-gray-700 group-hover:text-indigo-600">{cat}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
