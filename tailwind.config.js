/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
    },
   screens: {
      mobile: "320px",
      desktop: "1000px",
      tablet: "700px",
    }, 
  },
  plugins: [],
};