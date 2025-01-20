import { useState }  from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  
    return (
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-indigo-600">GlassNav</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Features</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Pricing</a>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                <Search size={20} />
              </button>
            </div>
            
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="text-gray-700" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className={`transition-all duration-300 overflow-hidden ${isSearchOpen ? 'h-16' : 'h-0'}`}>
            <div className="py-4">
              <input 
                type="search" 
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
            <div className="py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600">Pricing</a>
              <button className="block text-gray-700 hover:text-indigo-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  