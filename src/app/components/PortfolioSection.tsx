"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// กำหนด Type ของข้อมูล Project ด้วย TypeScript
type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  link?: string;
};

// --- ข้อมูลโปรเจกต์ (เพิ่ม id: 5) ---
const projects: Project[] = [
    {
      id: 1,
      title: "Data Inter link",
      description: "เว็บสำหรับการส่งข้อความภายในองค์กร พัฒนาโดยใช้ ASP.NET Core Framework",
      images: ["/datalink1.png", "/datalink2.png", "/datalink3.png", "/datalink4.png"],
      link: "#", // <-- ลิงก์ "#" จะเปิด Modal
    },
    {
      id: 2,
      title: "Movie Mate",
      description: "เว็บสำหรับจองตั๋วหนังออนไลน์ พัฒนาโดยใช้ Spring Boot Framework",
      images: ["/moviemate1.png", "/moviemate2.png","/moviemate3.png"],
      link: "#",
    },
    {
      id: 3,
      title: "OrderSync",
      description: "เว็บ pos การจัดการร้านอาหาร พัฒนาโดยใช้ Node.js + TailwindCSS + PostgreSQL",
      images: ["/Order1.png", "/Order2.png","/Order3.png","/Order4.png","/Order5.png","/Order6.png","/Order7.png","/Order8.png"],
      link: "#",
    },
    {
      id: 4,
      title: "Chooprint",
      description: "ออกแบบนามบัตรและป้ายแท็กสินค้า โดยใช้โปรแกรม Photoshop และ illustrator",
      images: ["/นามบัตร1.jpg", "/นามบัตร2.jpg","/นามบัตร3.jpg","/นามบัตร4.jpg","/นามบัตร5.jpg","/นามบัตร6.jpg","/นามบัตร7.jpg"],
      link: "#",
    },
    // ✨ โปรเจกต์ id: 5 ที่จะให้เป็นลิงก์ไปยังเว็บไซต์ ✨
    {
      id: 5,
      title: "Dev By Side",
      description: "เว็บไซต์ส่วนตัวที่รวบรวมผลงานและบทความต่างๆ สร้างด้วย Next.js และ Tailwind CSS",
      images: ["/devbyside.png"], // รูปภาพปกสำหรับแสดงบนการ์ด
      link: "https://www.devbyside.online/", // <-- ใส่ URL จริงของเว็บที่นี่
    },
    {
      id: 6,
      title: "Mood - based Music Recommendation",
      description: "ใช้อัลกอริทึม Random Forest Regressor เพื่อเรียนรู้จากฟีดแบคของผู้ใช้ (เช่น mood, rating, feedback และคุณลักษณะของเพลง) ได้พัฒนาโปรเจคนี้ในส่วน UXUI ใช้ html + css ใช้การฝัง (embed) เพลงจาก Spotify โดยใช้ track_id",
      images: ["/Mood-based.png","/Mood-based1.png"], // รูปภาพปกสำหรับแสดงบนการ์ด
      link: "#", 
    },
];

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // --- ฟังก์ชันจัดการการคลิกการ์ด ---
  const handleCardClick = (project: Project) => {
  // ✅ เฉพาะ id 5 เท่านั้นที่ให้เปิดเว็บไซต์
  if (project.id === 5 && project.link) {
    window.open(project.link, '_blank', 'noopener,noreferrer');
    return; // หยุดไม่ให้เปิด modal
  }

  // สำหรับโปรเจกต์อื่นให้เปิด modal ตามปกติ
  openModal(project);
};


  return (
    <section id="portfolio" className="py-20 rounded-lg my-20 -mt-15">
      <h2 className="text-3xl font-bold text-center md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">Past Projects</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
      
      {/* ใช้ mt-12 เพื่อเพิ่มระยะห่างจากเส้นขีด */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-12">
        {projects.map((project) => {
          const isExternalLink = project.link && project.link !== '#';

          return (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2 hover:scale-[1.02] border border-transparent hover:border-cyan-500/30"
              onClick={() => handleCardClick(project)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} image 1`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* --- Overlay ที่เปลี่ยนตามประเภทของโปรเจกต์ --- */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {isExternalLink ? (
                    // Overlayสำหรับลิงก์ไปยังเว็บ
                    <>
                      <div className="mb-3 p-3 rounded-full bg-cyan-500/20 border-2 border-cyan-500">
                          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                      </div>
                      <p className="text-cyan-400 text-lg font-bold">Visit Website</p>
                    </>
                  ) : (
                    // Overlay สำหรับเปิด Gallery
                    <>
                        <div className="mb-3 p-3 rounded-full bg-cyan-500/20 border-2 border-cyan-500">
                          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-cyan-400 text-lg font-bold mb-1">View Gallery</p>
                        <p className="text-gray-300 text-sm">{project.images.length} รูปภาพ</p>
                    </>
                  )}
                </div>

                {/* Badge แสดงจำนวนรูปภาพ (ถ้าไม่ใช่ลิงก์เว็บ) */}
                {!isExternalLink && (
                  <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-full text-white text-xs font-medium">
                    {project.images.length} รูป
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                 {/* --- ข้อความแนะนำที่เปลี่ยนตามประเภท --- */}
                <div className="flex items-center justify-between">
                  <span className="text-cyan-500 text-sm font-medium">
                    {isExternalLink ? 'คลิกเพื่อเยี่ยมชมเว็บไซต์' : 'คลิกเพื่อดูรูปภาพทั้งหมด'}
                  </span>
                  <svg className="w-5 h-5 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

        {/* Modal สำหรับแสดงรูปภาพขนาดเต็ม */}
        {isModalOpen && selectedProject && (
            <div
                className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
                onClick={closeModal} // คลิกพื้นหลังเพื่อปิด
            >
                <div
                    className="relative bg-gray-900 rounded-lg w-full max-w-4xl h-full max-h-[85vh] p-4"
                    onClick={(e) => e.stopPropagation()} // ป้องกันการปิด Modal เมื่อคลิกที่ตัว Swiper
                >
                    {/* Header Modal */}
                    <div className="flex justify-between items-center mb-4 px-2">
                        <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                        <button
                            onClick={closeModal}
                            className="text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Swiper ภายใน Modal */}
                    <Swiper
                        pagination={{ 
                            type: 'fraction',
                            formatFractionCurrent: (number) => `${number}`,
                            formatFractionTotal: (number) => `${number}`,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="w-full h-[calc(100%-60px)]"
                    >
                        {selectedProject.images.map((img, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`${selectedProject.title} image ${index + 1}`}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-md"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )}
    </section>
  );
};

export default PortfolioSection;