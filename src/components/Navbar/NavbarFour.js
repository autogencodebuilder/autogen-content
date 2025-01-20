import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav>
        {/* Top Bar */}
        <div className="bg-gray-100 py-2 text-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Store Locator</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Sign In</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Register</a>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="text-2xl font-bold">SplitNav</div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Shop</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">New Arrivals</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Sale</a>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-700 hover:text-blue-600">
                    <Search size={20} />
                  </button>
                  <button className="text-gray-700 hover:text-blue-600">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
              
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="space-y-2">
                <a href="#" className="block text-gray-700">Shop</a>
                <a href="#" className="block text-gray-700">New Arrivals</a>
                <a href="#" className="block text-gray-700">Sale</a>
              </div>
              <div className="pt-4 border-t space-y-2">
                <a href="#" className="block text-gray-700">Support</a>
                <a href="#" className="block text-gray-700">Store Locator</a>
                <a href="#" className="block text-gray-700">Sign In</a>
                <a href="#" className="block text-gray-700">Register</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;