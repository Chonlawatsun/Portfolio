"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // REMOVED: EffectCoverflow
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// REMOVED: "swiper/css/effect-coverflow";

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
  // ... (ข้อมูล certificates เหมือนเดิม ไม่มีการเปลี่ยนแปลง)
  {
    id: 1,
    src: "/cer/cer1.png",
    alt: "Certificate 1",
    title:
      "การออกแบบ UX/UI สุดปัง เพื่อดึงดูดความสนใจของผู้ใช้ (Awesome UX/UI design to Grab the User Attention)",
    issuer: "TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)",
    date: "2566",
    description:
      "เรียนรู้หลักการออกแบบ UX/UI ที่มุ่งเน้นประสบการณ์ของผู้ใช้ พร้อมเทคนิคการดึงดูดความสนใจผ่านดีไซน์ที่มีประสิทธิภาพ",
  },
  {
    id: 2,
    src: "/cer/cer2.png",
    alt: "Certificate 2",
    title:
      "ความรู้พื้นฐานเพื่อการวิเคราะห์ข้อมูลสำหรับข้าราชการและบุคลากรภาครัฐทุกระดับ",
    issuer: "TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)",
    date: "2566",
    description:
      "เรียนรู้เครื่องมือและแนวคิดเบื้องต้นในการจัดการ วิเคราะห์ และสรุปข้อมูล เพื่อนำไปประยุกต์ใช้ในการทำงานราชการอย่างเป็นระบบ",
  },
  {
    id: 3,
    src: "/cer/cer3.png",
    alt: "Certificate 3",
    title:
      "Basic Cybersecurity Series : หลักสูตรพัฒนาทักษะด้านความมั่นคงปลอดภัยทางไซเบอร์เบื้องต้น",
    issuer: "TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)",
    date: "2567",
    description:
      "พัฒนาทักษะด้านไซเบอร์เบื้องต้นเพื่อรับมือกับภัยคุกคามดิจิทัลทั้งในระดับบุคคลและองค์กร พร้อมแนวทางปฏิบัติที่ปลอดภัย",
  },
  {
    id: 4,
    src: "/cer/cer4.png",
    alt: "Certificate 4",
    title: "การบริหารโครงการ (Project Management)",
    issuer: "TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)",
    date: "2567",
    description:
      "เรียนรู้เทคนิคการวางแผน ควบคุมงบประมาณ กำหนดระยะเวลา และบริหารทีม เพื่อให้โครงการสำเร็จตามเป้าหมายอย่างมีประสิทธิภาพ",
  },
  {
    id: 5,
    src: "/cer/cer5.png",
    alt: "Certificate 5",
    title:
      "การสร้างความตระหนักรู้ด้านความมั่นคงทางไซเบอร์ Cybersecurity Awareness",
    issuer: "TDGA (THAILAND DIGITAL GOVERNMENT ACADEMY)",
    date: "2567",
    description:
      "เสริมสร้างความรู้และทักษะในการระบุและรับมือกับภัยคุกคามทางไซเบอร์ในชีวิตประจำวัน ทั้งในระดับบุคคลและองค์กร",
  },
  {
    id: 6,
    src: "/cer/cer6.png",
    alt: "Certificate 6",
    title: "BASIC CYBERSECURITY",
    issuer: "NCSA THAILAND",
    date: "2567",
    description:
      "เสริมสร้างความรู้พื้นฐานด้าน CYBERSECURITY เพื่อสนับสนุนการใช้งานระบบสารสนเทศในองค์กรอย่างปลอดภัยและมีประสิทธิภาพ",
  },
  {
    id: 7,
    src: "/cer/cer7.png",
    alt: "Certificate 7",
    title:
      "ด้านความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (Cybersecurity Foundation Course)",
    issuer: "NCSA THAILAND",
    date: "2567",
    description:
      "เสริมสร้างความรู้พื้นฐานด้าน CYBERSECURITY เพื่อสนับสนุนการใช้งานระบบสารสนเทศในองค์กรอย่างปลอดภัยและมีประสิทธิภาพ",
  },
  {
    id: 8,
    src: "/cer/cer8.png",
    alt: "Certificate 8",
    title: "เข้าร่วมการแข่งขัน CTF ภายในงาน Cybersecurity and IT",
    issuer: "Bangkok University",
    date: "2567",
    description:
      "เข้าร่วมการแข่งขัน CTF เพื่อทดสอบทักษะด้านความมั่นคงปลอดภัยไซเบอร์ในรูปแบบการแก้ไขโจทย์เชิงเทคนิคภายในงาน Cybersecurity and IT ",
  },
  {
    id: 9,
    src: "/cer/cer9.png",
    alt: "Certificate 9",
    title: "เข้าร่วมการแข่งขัน CTF ภายในงาน Cybersecurity and IT",
    issuer: "Bangkok University",
    date: "2567",
    description:
      "เข้าร่วมการแข่งขัน CTF เพื่อทดสอบทักษะด้านความมั่นคงปลอดภัยไซเบอร์ในรูปแบบการแก้ไขโจทย์เชิงเทคนิคภายในงาน Cybersecurity and IT ",
  },
  {
    id: 10,
    src: "/cer/cer10.png",
    alt: "Certificate  10",
    title:
      "ร่วมงาน Cybersec Asia x Thailand International Cyber Week 2025",
    issuer: "NCSA THAILAND",
    date: "2568",
    description:
      "ร่วมงาน Cybersec Asia x Thailand International Cyber Week 2025 (สนับสนุนโดย NCSA) วันที่ 22-23 มกราคม 2568 ณ Plenary Hall ชั้น 1 ศูนย์การประชุมแห่งชาติสิริกิติ์",
  },
];

const CertificateCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // REMOVED: isMobile state and useEffect for resize handling are no longer needed.

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            Certificates & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            กิจกรรมต่างๆที่เคยเข้าร่วม
          </p>
        </div>

        {/* Info */}
        <div className="text-center mb-8 h-48 md:h-40 flex items-center justify-center"> {/* ADDED: fixed height for info box */}
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {certificates[activeIndex]?.title}
            </h3>
            <p className="text-gray-300 mb-1">
              <span className="text-cyan-400">จากสถาบัน:</span>{" "}
              {certificates[activeIndex]?.issuer}
            </p>
            <p className="text-gray-300 mb-3">
              <span className="text-cyan-400">ปี:</span>{" "}
              {certificates[activeIndex]?.date}
            </p>
            {/* Description is removed from here to keep the info box clean, but you can add it back if you like */}
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          // REMOVED: effect and coverflowEffect props
          slidesPerView={1} // Default slides per view for mobile
          spaceBetween={30} // Space between slides
          centeredSlides={true}
          grabCursor={true}
          loop={true} // ADDED: loop for seamless sliding
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true} // MODIFIED: Always show navigation arrows
          breakpoints={{
            // ADDED: Responsive settings
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]} // REMOVED: EffectCoverflow
          onSlideChange={(swiper) => {
            // Adjust activeIndex for loop mode
            const realIndex = swiper.realIndex;
            setActiveIndex(realIndex);
          }}
          className="w-full max-w-6xl mx-auto pb-12" // MODIFIED: Increased max-width for better desktop view
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={cert.id}> {/* REMOVED: Custom width classes */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 p-1 shadow-2xl">
                  <div className="relative bg-slate-900 rounded-2xl p-4 transform transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={500} // Increased size for clarity
                      height={375}
                      className="rounded-xl object-cover w-full h-auto shadow-lg"
                      priority={index < 3} // Prioritize loading first few images
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">
              {activeIndex + 1} / {certificates.length}
            </span>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default CertificateCarousel;