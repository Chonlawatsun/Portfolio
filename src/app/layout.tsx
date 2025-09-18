import type { Metadata } from "next";
import { Sarabun } from "next/font/google"; // ใช้ฟอนต์ไทยสวยๆ
import "./globals.css";
import Navbar from "./components/Navbar";


// ตั้งค่า Font
const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Chonlawat Sun - Portfolio",
  description: "My professional portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="!scroll-smooth">
      {/* กำหนดสีพื้นหลังหลักที่นี่ */}
      <body className={`${sarabun.className} bg-gray-900 text-gray-200`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}