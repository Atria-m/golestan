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
    keyframes: {
      slideInFromTop: {
        "0%": {
          transform: "translateY(-100vh)",
          opacity: "0",
          filter: "blur(10px)",
        },
        "50%": {
          opacity: "0.5",
          filter: "blur(5px)",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
          filter: "blur(0)",
        },
      },
      slideInFromRight: {
        "0%": {
          transform: "translateX(100vw)",
          opacity: "0",
          filter: "blur(10px)",
        },
        "50%": {
          opacity: "0.5",
          filter: "blur(5px)",
        },
        "100%": {
          transform: "translateX(0)",
          opacity: "1",
          filter: "blur(0)",
        },
      },

      slideInFromTopLonger: {
        "0%": {
          transform: "translateY(-100vh)",
          opacity: "0",
          filter: "blur(10px)",
        },
        "50%": {
          opacity: "0.5",
          filter: "blur(5px)",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
          filter: "blur(0)",
        },
      },

      slideInFromInside: {
        "0%": {
          transform: "scale(0.5)",
          opacity: "0",
          filter: "blur(10px)",
        },
        "50%": {
          opacity: "0.5",
          filter: "blur(5px)",
        },
        "100%": {
          transform: "scale(1)",
          opacity: "1",
          filter: "blur(0)",
        },
      },
    },
    animation: {
      slideInFromTop: "slideInFromTop 2s ease-out",
      slideInFromRight: "slideInFromRight 2s ease-out",
      slideInFromTopLonger:
        "slideInFromTopLonger 2.5s cubic-bezier(0.42, 0, 0.58, 1)",
      slideInFromInside: "slideInFromInside 0.8s ease-out",
    },
  },
  plugins: [],
};
