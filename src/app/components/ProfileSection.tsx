// components/ProfileSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload, FaCode, FaShieldAlt, FaMailBulk,} from "react-icons/fa";

// Type definitions
interface SocialLink {
  href: string;
  icon: React.ReactElement;
  label: string;
  color: string;
}

interface Skill {
  name: string;
  icon: React.ReactElement;
  color: string;
}

const ProfileSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentSkill, setCurrentSkill] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Skills data
  const skills: Skill[] = [
    { name: "Web Development", icon: <FaCode />, color: "from-blue-400 to-cyan-500" },
    { name: "Cybersecurity", icon: <FaShieldAlt />, color: "from-red-400 to-orange-500" }
  ];

  // Social links data
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Chonlawatsun",
      icon: <FaGithub size={30} />,
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      href: "https://www.linkedin.com/in/%E0%B8%8A%E0%B8%A5%E0%B8%A5%E0%B8%A7%E0%B8%B1%E0%B8%8A-%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C-465a3b375/",
      icon: <FaLinkedin size={30} />,
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "mailto:chonlawat.ngue@gmail.com",
      icon: <FaMailBulk size={30} />,
      label: "E-mail",
      color: "hover:text-sky-400"
    }
  ];

  // Animation effects
  useEffect(() => {
    setIsVisible(true);
    
    // Rotating skills
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax effect
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

  // Typing animation component
  const TypingText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return (
      <span>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    );
  };

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden pt-28 md:pt-4">
      {/* Full Screen Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            transition: 'transform 0.5s ease-out',
            left: '-20%',
            top: '-20%'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-400/25 to-pink-600/25 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            transition: 'transform 0.5s ease-out',
            right: '-15%',
            top: '10%',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            transition: 'transform 0.5s ease-out',
            left: '60%',
            bottom: '10%',
            animationDelay: '2s'
          }}
        />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'grid-move 30s linear infinite'
            }} />
          </div>
        </div>
      </div>

      <div className={`max-w-4xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Profile Image with enhanced effects */}
        <div className="relative group">
          {/* Glowing ring animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
            <div className="rounded-full bg-gray-900 p-2">
              <div className="w-[250px] h-[250px] rounded-full bg-gradient-to-r from-transparent to-transparent" />
            </div>
          </div>
          
          {/* Main profile image */}
          <div className="relative z-10 p-2">
            <Image
              src="/User.png"
              alt="Profile Picture"
              width={260}
              height={260}
              className="rounded-full object-cover border-4 border-gray-700 shadow-2xl shadow-cyan-500/50 group-hover:shadow-cyan-500/70 transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: '1 / 1' }}
              priority
              />
          </div>
        </div>

        {/* Profile Info with enhanced animations */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
              Chonlawat Nguensub
            </span>
            
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform scale-x-0 animate-expand-width" />
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
            <TypingText text="A student from Bangkok University" speed={160} />
          </p>

          <p className="max-w-xl text-gray-300 mb-6 leading-relaxed">
            Majoring in Computer Science - Data Science and Cybersecurity <br />
            <span className="inline-flex items-center gap-2 mt-2">
              Passionate about 
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${skills[currentSkill].color} text-white text-sm font-medium transition-all duration-500`}>
                {skills[currentSkill].icon}
                {skills[currentSkill].name}
              </span>
            </span>
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
            <a 
              href="#contact"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact Me
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>

            {/* ✅ แก้ไขตรงนี้ - ลบ <a> ซ้อนกันออก */}
            <a
              href="/resume.pdf"
              download="RESUME_Chonlawat Nguensub.pdf"
              className="group relative border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>

          {/* Enhanced social links */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative group`}
                aria-label={link.label}
              >
                {link.icon}
                
                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </span>
                
                {/* Hover effect circle */}
                <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-150 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-gray-400">Years Learning</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400">8+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400">∞</div>
              <div className="text-sm text-gray-400">Passion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes expand-width {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-expand-width {
          animation: expand-width 2s ease-out 1s forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;