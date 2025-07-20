/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // สำคัญมากสำหรับ App Router
  ],
  theme: {
    extend: {
      // สามารถเพิ่ม custom theme ได้ที่นี่
    },
  },
  plugins: [],
};