'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLine, FaInstagram, FaGithub, FaLinkedin, FaShieldAlt, FaLock, FaBug, FaKey } from 'react-icons/fa';

const FooterSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [currentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      id: 'facebook',
      icon: <FaFacebook size={24} />,
      link: 'https://www.facebook.com/ChonlawatSun/',
      color: 'hover:text-blue-400',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      id: 'line',
      icon: <FaLine size={24} />,
      link: 'https://line.me/ti/p/kU9caOa0Sx',
      color: 'hover:text-green-400',
      gradient: 'from-green-600 to-green-400'
    },
    {
      id: 'instagram',
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com/sun_day.clw/',
      color: 'hover:text-pink-400',
      gradient: 'from-purple-600 via-pink-500 to-orange-400'
    },
    {
      id: 'github',
      icon: <FaGithub size={24} />,
      link: 'https://github.com/Chonlawatsun',
      color: 'hover:text-cyan-400',
      gradient: 'from-cyan-600 to-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const securitySkills = [
    { icon: <FaShieldAlt />, text: 'Cybersecurity' },
    { icon: <FaLock />, text: 'Network Security' },
    { icon: <FaBug />, text: 'Vulnerability Assessment' },
    { icon: <FaKey />, text: 'Penetration Testing' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            left: '-10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            right: '-10%',
            bottom: '30%',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]"></div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30">
                  <FaShieldAlt className="text-red-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-red-400 via-orange-500 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                    Chonlawat Nguenyuang
                  </h3>
                  <p className="text-sm text-gray-400 font-semibold">Security Engineer Intern</p>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-red-500 via-orange-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              ผู้สนใจด้านความปลอดภัยทางไซเบอร์ พร้อมเรียนรู้และพัฒนาทักษะด้าน Security Engineering เพื่อปกป้องระบบและข้อมูลสำคัญ
            </p>
            
            {/* Security Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {securitySkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full text-xs text-gray-300 hover:border-red-400/50 transition-all duration-300"
                >
                  <span className="text-red-400">{skill.icon}</span>
                  {skill.text}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                <FaLock className="text-cyan-400" />
              </div>
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-red-400 to-cyan-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Professional Info */}
            <div className="mt-6 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-xl border border-gray-700/30">
              <p className="text-xs text-gray-500 mb-2">🎓 Education</p>
              <p className="text-sm text-gray-300 font-semibold">Computer Science Student</p>
              <p className="text-xs text-gray-400 mt-1">Focused on Cybersecurity</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg">
                <FaKey className="text-pink-400" />
              </div>
              Get In Touch
            </h4>
            
            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Connect with me:</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`}></div>
                    <div className={`relative p-3 bg-gray-800/40 backdrop-blur-xl rounded-full border border-gray-700/30 text-gray-400 ${social.color} transition-all duration-500 transform group-hover:scale-110 group-hover:border-transparent`}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-xl p-4 border border-gray-700/30">
              <p className="text-gray-400 text-xs mb-2 flex items-center gap-2">
                <span>📧</span> Email
              </p>
              <a href="mailto:chonlawat.ngue@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm break-all">
                chonlawat.ngue@gmail.com
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-xl p-4 border border-gray-700/30">
              <p className="text-gray-400 text-xs mb-2 flex items-center gap-2">
                <span>📱</span> Phone
              </p>
              <a href="tel:+66936150842" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                +66 93-615-0842
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start flex-wrap mb-1">
              © {currentYear} Chonlawat Nguenyuang. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-2 justify-center md:justify-start">
              Website designed and developed by Chonlawat Nguenyuang
              <span className="flex items-center gap-1">
                <FaShieldAlt className="text-red-400 inline" size={10} /> 
                Aspiring Security Engineer
              </span>
            </p>
          </div>

          {/* Status Badge & Scroll to Top Button */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-red-500/20">
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-white font-medium text-xs">Seeking Internship Opportunities</span>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-full border border-red-500/20 hover:border-red-400 transition-all duration-500 hover:scale-110"
            >
              <svg className="w-5 h-5 text-red-400 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;