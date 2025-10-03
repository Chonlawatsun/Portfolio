"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

// Type definitions
interface WorkExperience {
  role: string;
  company: string;
  duration:string;
  responsibilities: string[];
}

interface Education {
  logoUrl: string;
  school: string;
  major: string;
  degree: string;
  grade: string;
}

// --- ✏️ แก้ไขข้อมูลประวัติการทำงานของคุณตรงนี้ ---
const workExperience: WorkExperience[] = [
   {
    role: "Logistics",
    company: "J.I.B. COMPUTER GROUP COMPANY LIMITED",
    duration: "Feb 2025 - Sep 2025",
    responsibilities: [
      "ประสานงานกับรถส่งของ",
      "ดูแลวางแผนการส่งของด่วน",
      "ตรวจเช็คข้อมูลความถูกต้องในระบบ",
    ]
  },
  {
    role: "graphic design",
    company: "CHOOPRINT DESIGN CO., LTD.",
    duration: "Mar 2023 - Jan 2024",
    responsibilities: [
      "ออกแบบนามบัตร โบวชัว ป้ายแท็กสินค้า",
      "ออกแบบภาพลงเพจเฟสบุ๊ค",
      "ประสานงานคุยกับลูกค้า",
    ]
  },
 
  // --- เพิ่มประวัติการทำงานอื่นๆ ที่นี่ ---
];

// --- ✏️ แก้ไขข้อมูลการศึกษาของคุณตรงนี้ (เพิ่มได้หลายที่) ---
const educationHistory: Education[] = [
    {
        logoUrl: "/BULogo.svg.png",
        school: "มหาวิทยาลัยกรุงเทพ",
        degree: "กำลังศึกษาปริญญาตรี",
        major: "สาขาวิชาวิทยาการคอมพิวเตอร์ (มุ่งเน้นวิทยาการข้อมูลและความมั่นคงปลอดภัยไซเบอร์)",
        grade : "GPA : 3.48",
    },
    {
        logoUrl: "/logo.chinorotpng.png",
        school: "โรงเรียนชิโนรสวิทยาลัย",
        degree: "ม.1 - ม.6",
        major: "สาขาวิชาการงาน - คอมพิวเตอร์",
        grade : "GPA : 3.21",
    },
];


const skills = {
  programming: [
    "React", "Next.js", "TypeScript", "HTML, CSS, Tailwind CSS",
    "Node.js", "Figma", "GitHub", "Python", "JavaScript"
  ],
  office: [
    "Photoshop", "Illustrator", "Microsoft Office"
  ],
  cybersecurity: [
    "Penetration Testing", "Burp Suite", "Metasploit",
    "Nmap | Nikto", "Kali Linux"
  ]
};

const AboutMeSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const SkillBadge: React.FC<{ skill: string; index: number; category: string }> = ({ skill, index, category }) => (
    <span
      className={`
        skill-badge relative overflow-hidden group cursor-pointer
        transition-all duration-300 ease-out transform
        hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25
        ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <span className="relative z-10">{skill}</span>
      <div className={`
        absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20
        transition-transform duration-300 ease-out
        ${hoveredSkill === `${category}-${index}` ? 'translate-x-0' : '-translate-x-full'}
      `}></div>
    </span>
  );

  const WorkExperienceItem: React.FC<{ job: WorkExperience; index: number }> = ({ job, index }) => (
    <div
      className={`
        mb-12 ml-6 relative group
        transition-all duration-500 ease-out transform
        ${isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-8'}
      `}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline Dot with Pulse Effect */}
      <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-cyan-500 border-4 border-gray-900">
        <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75"></div>
      </div>

      {/* Hover Card Effect */}
      <div className="relative p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-cyan-500/10">
        <p className="text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-cyan-300">
          {job.duration}
        </p>
        <h4 className="text-xl font-bold text-cyan-400 mt-1 transition-all duration-300 group-hover:text-cyan-300">
          {job.role}
        </h4>
        <p className="text-lg font-medium text-white mb-3 transition-colors duration-300 group-hover:text-gray-100">
          {job.company}
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
          {job.responsibilities.map((resp: string, i: number) => (
            <li key={i} className="transition-all duration-300 hover:text-cyan-300 hover:translate-x-1">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // --- ⭐️ ส่วนของการศึกษาที่อัปเดตใหม่ ---
  const EducationSection: React.FC<{ edu: Education }> = ({ edu }) => (
    <div className="mt-4 flex items-center bg-gray-800/30 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/10">
      <Image
  src={edu.logoUrl}
  alt={`${edu.school} logo`}
  width={64}
  height={64}
  className="mr-4 object-contain rounded-md"
/>
      <div>
          <h4 className="text-xl font-bold text-cyan-400">{edu.school}</h4>
          <p className="text-lg text-white">{edu.degree}</p>
          <p className="text-md text-gray-300 pt-1">{edu.major}</p>
          <p className="text-sm text-gray-400 pt-1">{edu.grade}</p>
      </div>
    </div>
  );

  return (
    <section id="about" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-m-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header with Enhanced Animation */}
        <div className={`
          text-center mb-16 transition-all duration-1000 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <h2 className="text-4xl md:text-5xl font-extrabold relative -mt-5">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
              About Me
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </h2>
          <p className="mt-4 text-[15px] md:text-lg text-gray-400 transition-all duration-300 hover:text-gray-300">
            My career path and accumulated skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start -mt-7">

          {/* Left Column: Introduction, Education & Skills */}
          <div className={`
            space-y-6 transition-all duration-1000 transform
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
          `}>
            <h3 className="text-2xl font-bold text-white group cursor-default">
              <span className="transition-all duration-300 group-hover:text-cyan-400">Who I Am</span>
            </h3>
            <p className="text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-200">
              สวัสดีครับ! ผมกำลังศึกษาที่มหาวิทยาลัยกรุงเทพ สาขาวิชาวิทยาการคอมพิวเตอร์ <br />มุ่งเน้นวิทยาการข้อมูลและความมั่นคงปลอดภัยไซเบอร์
              ผมมีความเชื่อว่าเทคโนโลยีที่ดีควรจะช่วยให้ชีวิตของผู้คนง่ายพร้อมกับมีความปลอดภัยที่มากขึ้นเช่นกัน
              เป้าหมายของผมคือการพัฒนาตัวเองอย่างต่อเนื่องและนำความรู้มาสร้างโซลูชันที่ตอบโจทย์และมีประสิทธิภาพ
            </p>

            {/* --- ⭐️ แสดงส่วนการศึกษาที่นี่ --- */}
            <div className="mt-6">
                <h3 className="text-2xl font-bold text-white group cursor-default">
                    <span className="transition-all duration-300 group-hover:text-cyan-400">Education</span>
                </h3>
                
                {educationHistory.map((edu, index) => (
                    <EducationSection key={index} edu={edu} />
                
                ))}
                
            </div>

            <h3 className="text-2xl font-bold text-white pt-4 group cursor-default">
              <span className="transition-all duration-300 group-hover:text-cyan-400">Programming Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((skill: string, index: number) => (
                <SkillBadge key={skill} skill={skill} index={index} category="programming" />
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white pt-4 group cursor-default">
              <span className="transition-all duration-300 group-hover:text-cyan-400">Office Software Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.office.map((skill: string, index: number) => (
                <SkillBadge key={skill} skill={skill} index={index} category="office" />
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white pt-4 group cursor-default">
              <span className="transition-all duration-300 group-hover:text-cyan-400">Cybersecurity Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.cybersecurity.map((skill: string, index: number) => (
                <SkillBadge key={skill} skill={skill} index={index} category="cybersecurity" />
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience Timeline */}
          <div className={`
            space-y-12 transition-all duration-1000 transform
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
          `}>
            <h3 className="text-2xl font-bold text-white mb-6 group cursor-default">
              <span className="transition-all duration-300 group-hover:text-cyan-400">Work Experience</span>
            </h3>
            <div className="relative border-l-2 border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
              {workExperience.map((job: WorkExperience, index: number) => (
                <WorkExperienceItem key={index} job={job} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .skill-badge {
          @apply px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMeSection;