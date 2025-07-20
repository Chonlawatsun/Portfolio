// components/Navbar.tsx
'use client'; // ต้องมีสำหรับ React Hooks ใน Next.js App Router

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State สำหรับเมนูมือถือ
  const [activeLink, setActiveLink] = useState('#profile'); // State สำหรับ Active Link

  // Logic สำหรับตรวจจับว่ากำลังดู section ไหนอยู่
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'experience', 'certificates', 'portfolio'];
      const scrollPosition = window.scrollY + 150; // เพิ่ม offset ให้แม่นยำขึ้น

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#profile', label: 'Profile' },
    { href: '#about', label: 'About me' },
    { href: '#portfolio', label: 'Work' },
    { href: '#certificates', label: 'Certificates' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20 shadow-xl">
      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <Link href="#profile" className="group flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 tracking-wide">
              Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeLink === link.href 
                    ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-blue-400 focus:outline-none p-2 rounded-lg hover:bg-blue-500/5 transition-all duration-300"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg border border-blue-500/20 p-4 mt-2">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)} // กดลิงก์แล้วให้เมนูปิด
                    className={`block p-3 rounded-lg font-medium transition-all duration-300 ${
                      activeLink === link.href 
                        ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30' 
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Subtle glow effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;