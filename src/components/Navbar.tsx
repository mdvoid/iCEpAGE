import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">IceMaster Pro</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-blue-700 px-3 py-2 rounded-md">Inicio</a>
              <a href="#products" className="hover:bg-blue-700 px-3 py-2 rounded-md">Productos</a>
              <a href="#about" className="hover:bg-blue-700 px-3 py-2 rounded-md">Nosotros</a>
              <a href="#contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Inicio</a>
            <a href="#products" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Productos</a>
            <a href="#about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Nosotros</a>
            <a href="#contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}