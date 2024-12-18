import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { NAV_LINKS } from '../utils/constants';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#3B4393] backdrop-blur-sm z-50">
      <Container>
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="Company Logo" className="h-24" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white font-bold hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Let's Talk</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-white font-bold hover:text-white/80 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Let's Talk</Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}