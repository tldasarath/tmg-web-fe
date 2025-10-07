import React from 'react';
import { Container } from '../layout/Container';

export const Navbar = () => {
  const navLinks = ['Home', 'About', 'Service', 'Workspace', 'Accounting', 'Visa', 'Company', 'Packages'];
  
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xs font-semibold">CONNECTING AT</div>
                <div className="text-2xl font-bold">TMG</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors hover:text-red-800 ${
                      index === 0 ? 'text-red-800 border-b-2 border-red-800 pb-1' : 'text-gray-700'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};