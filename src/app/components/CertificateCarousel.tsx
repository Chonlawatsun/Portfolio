// components/CertificateCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

interface Certificate {
  id: number;
  src: string;
  alt: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

const certificates: Certificate[] = [
  { 
    id: 1, 
    src: '/cer/cer1.png', 
    alt: 'Certificate 1',
    title: 'การออกแบบ UX/UI สุดปัง เพื่อดึงดูดความสนใจของผู้ใช้ (Awesome UX/UI design to Grab the User Attention)',
    issuer: 'TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)',
    date: '2566',
    description: 'เรียนรู้หลักการออกแบบ UX/UI ที่มุ่งเน้นประสบการณ์ของผู้ใช้ พร้อมเทคนิคการดึงดูดความสนใจผ่านดีไซน์ที่มีประสิทธิภาพ'
  },
  { 
    id: 2, 
    src: '/cer/cer2.png', 
    alt: 'Certificate 2',
    title: 'ความรู้พื้นฐานเพื่อการวิเคราะห์ข้อมูลสำหรับข้าราชการและบุคลากรภาครัฐทุกระดับ',
    issuer: 'TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)',
    date: '2566',
    description: 'เรียนรู้เครื่องมือและแนวคิดเบื้องต้นในการจัดการ วิเคราะห์ และสรุปข้อมูล เพื่อนำไปประยุกต์ใช้ในการทำงานราชการอย่างเป็นระบบ'
  },
  { 
    id: 3, 
    src: '/cer/cer3.png', 
    alt: 'Certificate 3',
    title: 'Basic Cybersecurity Series : หลักสูตรพัฒนาทักษะด้านความมั่นคงปลอดภัยทางไซเบอร์เบื้องต้น',
    issuer: 'TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)',
    date: '2567',
    description: 'พัฒนาทักษะด้านไซเบอร์เบื้องต้นเพื่อรับมือกับภัยคุกคามดิจิทัลทั้งในระดับบุคคลและองค์กร พร้อมแนวทางปฏิบัติที่ปลอดภัย'
  },
  { 
    id: 4, 
    src: '/cer/cer4.png', 
    alt: 'Certificate 4',
    title: 'การบริหารโครงการ (Project Management)',
    issuer: 'TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)',
    date: '2567',
    description: 'เรียนรู้เทคนิคการวางแผน ควบคุมงบประมาณ กำหนดระยะเวลา และบริหารทีม เพื่อให้โครงการสำเร็จตามเป้าหมายอย่างมีประสิทธิภาพ'
  },
  { 
    id: 5, 
    src: '/cer/cer5.png', 
    alt: 'Certificate 5',
    title: 'การสร้างความตระหนักรู้ด้านความมั่นคงทางไซเบอร์ Cybersecurity Awareness',
    issuer: 'TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)',
    date: '2567',
    description: 'เสริมสร้างความรู้และทักษะในการระบุและรับมือกับภัยคุกคามทางไซเบอร์ในชีวิตประจำวัน ทั้งในระดับบุคคลและองค์กร'
  },
  { 
    id: 6, 
    src: '/cer/cer6.png', 
    alt: 'Certificate 6',
    title: 'BASIC CYBERSECURITY',
    issuer: 'NCSA THAILAND',
    date: '2567',
    description: 'เสริมสร้างความรู้พื้นฐานด้าน CYBERSECURITY เพื่อสนับสนุนการใช้งานระบบสารสนเทศในองค์กรอย่างปลอดภัยและมีประสิทธิภาพ'
  },
  { 
    id: 7, 
    src: '/cer/cer7.png', 
    alt: 'Certificate 7',
    title: 'ด้านความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (Cybersecurity Foundation Course)',
    issuer: 'NCSA THAILAND',
    date: '2567',
    description: 'เสริมสร้างความรู้พื้นฐานด้าน CYBERSECURITY เพื่อสนับสนุนการใช้งานระบบสารสนเทศในองค์กรอย่างปลอดภัยและมีประสิทธิภาพ'
  },
  { 
    id: 8, 
    src: '/cer/cer8.png', 
    alt: 'Certificate 8',
    title: 'เข้าร่วมการแข่งขัน CTF ภายในงาน Cybersecurity and IT',
    issuer: 'Bangkok University',
    date: '2567',
    description: 'เข้าร่วมการแข่งขัน CTF เพื่อทดสอบทักษะด้านความมั่นคงปลอดภัยไซเบอร์ในรูปแบบการแก้ไขโจทย์เชิงเทคนิคภายในงาน Cybersecurity and IT '
  },
  { 
    id: 9, 
    src: '/cer/cer9.png', 
    alt: 'Certificate 9',
    title: 'เข้าร่วมการแข่งขัน CTF ภายในงาน Cybersecurity and IT',
    issuer: 'Bangkok University',
    date: '2567',
    description: 'เข้าร่วมการแข่งขัน CTF เพื่อทดสอบทักษะด้านความมั่นคงปลอดภัยไซเบอร์ในรูปแบบการแก้ไขโจทย์เชิงเทคนิคภายในงาน Cybersecurity and IT '
  },
  { 
    id: 10, 
    src: '/cer/cer10.png', 
    alt: 'Certificate  10',
    title: 'ร่วมงาน Cybersec Asia x Thailand International Cyber Week 2025',
    issuer: 'NCSA THAILAND',
    date: '2568',
    description: 'ร่วมงาน Cybersec Asia x Thailand International Cyber Week 2025 (สนับสนุนโดย NCSA) วันที่ 22-23 มกราคม 2568 ณ Plenary Hall ชั้น 1 ศูนย์การประชุมแห่งชาติสิริกิติ์'
  },
];

const CertificateCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="certificates" className="py-20 bg-gray-900 relative overflow-hidden -mt-18 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 -mt-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            Certificates & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-[16px] md:text-lg max-w-2xl mx-auto">
            กิจกรรมต่างๆที่เคยเข้าร่วม
          </p>
        </div>

        {/* Certificate Info Display */}
        <div className="text-center mb-8 -mt-9">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {certificates[activeIndex]?.title}
            </h3>
            <p className="text-gray-300 mb-1">
              <span className="text-cyan-400">จากสถาบัน:</span> {certificates[activeIndex]?.issuer}
            </p>
            <p className="text-gray-300 mb-3">
              <span className="text-cyan-400">ปี:</span> {certificates[activeIndex]?.date}
            </p>
            {certificates[activeIndex]?.description && (
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                {certificates[activeIndex]?.description}
              </p>
            )}
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full max-w-5xl mx-auto pb-12"
            style={{
              '--swiper-navigation-color': '#60a5fa',
              '--swiper-pagination-color': '#60a5fa',
              '--swiper-navigation-size': '24px',
            } as React.CSSProperties}
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={cert.id} className="!w-auto max-w-lg">
                <div className="group relative">
                  {/* Certificate Image Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 p-1 shadow-2xl">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Inner Container */}
                    <div className="relative bg-slate-900 rounded-2xl p-4 transform transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        width={800}
                        height={600}
                        className="rounded-xl object-cover w-full h-auto shadow-lg"
                        priority={index === 0}
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-4 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                          <p className="text-sm text-gray-200">{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Certificate Counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">
              {activeIndex + 1} / {certificates.length}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default CertificateCarousel;