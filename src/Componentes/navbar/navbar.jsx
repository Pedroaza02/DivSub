import React from 'react';
import "./navbar.css"
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">DIVSUB</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Inicio</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Servicios</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Acerca de nosotros</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Blog</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contáctenos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
