// components/ContactSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLine, FaEnvelope, FaInstagram, FaPhone ,FaGithub} from 'react-icons/fa';

interface ContactMethod {
  id: string;
  name: string;
  icon: React.ReactElement;
  value: string;
  link: string;
  color: string;
  hoverColor: string;
  gradient: string;
  bgGlow: string;
}

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const contactMethods: ContactMethod[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FaFacebook size={36} />,
      value: 'HHsoft X Sun',
      link: 'https://www.facebook.com/ChonlawatSun/',
      color: 'text-blue-400',
      hoverColor: 'group-hover:text-blue-300',
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      bgGlow: 'shadow-blue-500/50'
    },
    {
      id: 'line',
      name: 'LINE',
      icon: <FaLine size={36} />,
      value: 'id : sun_day0',
      link: 'https://line.me/ti/p/kU9caOa0Sx',
      color: 'text-green-400',
      hoverColor: 'group-hover:text-green-300',
      gradient: 'from-green-600 via-green-500 to-green-400',
      bgGlow: 'shadow-green-500/50'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FaEnvelope size={36} />,
      value: 'chonlawat.ngue@gmail.com',
      link: 'mailto:chonlawat.ngue@gmail.com',
      color: 'text-red-400',
      hoverColor: 'group-hover:text-red-300',
      gradient: 'from-red-600 via-orange-500 to-orange-400',
      bgGlow: 'shadow-red-500/50'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram size={36} />,
      value: 'sun_day.clw',
      link: 'https://www.instagram.com/sun_day.clw/',
      color: 'text-pink-400',
      hoverColor: 'group-hover:text-pink-300',
      gradient: 'from-purple-600 via-pink-500 to-orange-400',
      bgGlow: 'shadow-pink-500/50'
    },
    {
      id: 'Github',
      name: 'Github',
      icon: <FaGithub size={36} />,
      value: 'Chonlawatsun',
      link: 'https://github.com/Chonlawatsun',
      color: 'text-blue-400',
      hoverColor: 'group-hover:text-blue-300',
      gradient: 'from-cyan-600 via-cyan-500 to-blue-400',
      bgGlow: 'shadow-blue-500/50'
    },
    {
      id: 'phone',
      name: 'Phone',
      icon: <FaPhone size={36} />,
      value: '+66 93-615-0842',
      link: 'tel:+66936150842',
      color: 'text-cyan-400',
      hoverColor: 'group-hover:text-cyan-300',
      gradient: 'from-cyan-600 via-cyan-500 to-blue-400',
      bgGlow: 'shadow-cyan-500/50'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section id="contact" className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            left: '-15%',
            top: '5%'
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            right: '-15%',
            bottom: '15%',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            left: '40%',
            top: '50%',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
              Let&apos;s Connect
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            มีคำถามหรือต้องการติดต่อ? เลือกช่องทางที่สะดวกและติดต่อมาได้เลย
          </p>
        </div>

        {/* Enhanced Contact Methods Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.id}
                href={method.link}
                target={method.id !== 'phone' && method.id !== 'email' ? '_blank' : undefined}
                rel={method.id !== 'phone' && method.id !== 'email' ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 ${
                  hoveredCard === method.id ? `hover:shadow-2xl ${method.bgGlow}` : ''
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Enhanced Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`}></div>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-gray-800/90 rounded-3xl"></div>
                </div>
                
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${method.color} opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500`}>
                    {method.icon}
                  </div>
                  <div className={`${method.color} ${method.hoverColor} transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12 relative z-10`}>
                    {method.icon}
                  </div>
                </div>
                
                {/* Name with Gradient */}
                <h4 className="text-white font-bold text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                  {method.name}
                </h4>
                
                {/* Value */}
                <p className="text-gray-400 text-sm break-all group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {method.value}
                </p>

                {/* Animated Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>

                {/* Shimmer Effect */}
                {hoveredCard === method.id && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-slow"></div>
                  </div>
                )}

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors duration-500"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/30 shadow-2xl">
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Available for Work</p>
              <p className="text-gray-400 text-xs">Ready to collaborate on exciting projects</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-full px-8 py-4 border border-cyan-500/20">
            <svg className="w-5 h-5 text-cyan-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="text-gray-300 font-medium">Let&lsquo;s Create Something Amazing Together!</span>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) rotate(45deg);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 3s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        @media (max-width: 640px) {
          .sm\\:grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;