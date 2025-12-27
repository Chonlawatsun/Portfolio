// components/FooterSection.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPaperPlane, FaLine } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const FooterSection: React.FC = () => {
  // --- Logic 1: EmailJS Form (เหมือนเดิม) ---
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const currentYear = new Date().getFullYear();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm(
        'service_k0pg1tt',       // Service ID
        'template_60msfpj',      // Template ID
        form.current,
        'Qd1sDa7NjtCXig-O2'      // Public Key
      )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setIsSubmitting(false);
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setIsSubmitting(false);
      });
    }
  };

  // --- Logic 2: Mouse Tracking สำหรับพื้นหลัง (เพิ่มเข้ามา) ---
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

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
      id: 'github',
      icon: <FaGithub size={20} />,
      link: 'https://github.com/Chonlawatsun',
      label: 'Github',
      hoverColor: 'hover:text-white'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin size={20} />,
      link: 'https://www.linkedin.com/in/...', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    {
      id: 'facebook',
      icon: <FaFacebook size={20} />,
      link: 'https://www.facebook.com/ChonlawatSun/',
      label: 'Facebook',
      hoverColor: 'hover:text-blue-500'
    },
    {
      id: 'line',
      icon: <FaLine size={20} />,
      link: 'https://line.me/ti/p/kU9caOa0Sx', 
      label: 'Line',
      hoverColor: 'hover:text-green-400'
    },
    {
      id: 'email',
      icon: <FaEnvelope size={20} />,
      link: 'mailto:chonlawat.ngue@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-cyan-400'
    }
  ];

  return (
    // 1. เปลี่ยน Class Container หลักให้เป็น Gradient แบบ ContactSection
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black pt-16 pb-8 border-t border-gray-800/50">
      
      {/* 2. ใส่ Background Animation Set ใหม่ (Orbs + Grid) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Orb 1: Cyan/Blue */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            left: '-15%', top: '5%'
          }}
        />
        {/* Orb 2: Purple/Pink */}
        <div 
          className="absolute w-[700px] h-[700px] bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            right: '-15%', bottom: '15%',
            animationDelay: '1s'
          }}
        />
        {/* Orb 3: Indigo */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            left: '40%', top: '50%',
            animationDelay: '2s'
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>
      
      {/* 3. เนื้อหาเดิมทั้งหมด (Content) */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- Left Column --- */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Connect.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                กำลังมองหาโอกาสในการฝึกงานหรือร่วมงานด้าน <span className="text-cyan-400">Cybersecurity</span> และ <span className="text-blue-400">Web Development</span>? <br/>
                ทักทายเข้ามาคุยกันได้เลยครับ ผมพร้อมเรียนรู้และสร้างสรรค์ผลงานเสมอ
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center text-cyan-400">
                  <FaEnvelope />
                </span>
                <a href="mailto:chonlawat.ngue@gmail.com" className="hover:text-white transition-colors">
                  chonlawat.ngue@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center text-cyan-400">
                  <span className="text-lg">📱</span>
                </span>
                <a href="tel:+66936150842" className="hover:text-white transition-colors">
                  (+66) 93-615-0842
                </a>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-[#1E293B] border border-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-gray-600 ${social.hoverColor}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="bg-[#111625] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl shadow-black/50">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase">Name</label>
                  <input
                    type="text"
                    name="name" 
                    required
                    className="w-full px-4 py-3 bg-[#0B0F19] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#0B0F19] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0B0F19] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder-gray-600"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center animate-pulse">ส่งข้อความเรียบร้อยแล้วครับ!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">เกิดข้อผิดพลาด ลองใหม่อีกครั้งนะครับ</p>
              )}
            </form>
          </div>

        </div>

        {/* --- Bottom Footer --- */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} Chonlawat Nguenyuang.</p>
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Open to Work
             </span>
             <p>Built with Next.js & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;