import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold">Brand</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-yellow-400 transition-colors duration-300"
              >
                Products <ChevronDown className="ml-1" size={16} />
              </button>
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-screen bg-gray-800 transform transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                <div className="container mx-auto p-8 grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Category 1</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-yellow-400">Product 1</a></li>
                      <li><a href="#" className="hover:text-yellow-400">Product 2</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Category 2</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-yellow-400">Product 3</a></li>
                      <li><a href="#" className="hover:text-yellow-400">Product 4</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Category 3</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-yellow-400">Product 5</a></li>
                      <li><a href="#" className="hover:text-yellow-400">Product 6</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">About</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
          </div>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
          <div className="py-4 space-y-4">
            <a href="#" className="block hover:text-yellow-400">Home</a>
            <a href="#" className="block hover:text-yellow-400">Products</a>
            <a href="#" className="block hover:text-yellow-400">About</a>
            <a href="#" className="block hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;