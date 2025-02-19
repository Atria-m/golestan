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
          filter: "blur(10px)", // کمی تار بودن در ابتدا
        },
        "50%": {
          opacity: "0.5", // کمی محو بودن در نیمه راه
          filter: "blur(5px)", // محوشدگی کمتر
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1", // کاملاً واضح
          filter: "blur(0)", // بدون تاری در انتها
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
      // انیمیشن جدید که از بالا میاد و در انتها کندتر می‌شود
      slideInFromTopLonger: {
        "0%": {
          transform: "translateY(-100vh)",
          opacity: "0",
          filter: "blur(10px)", // کمی تار بودن در ابتدا
        },
        "50%": {
          opacity: "0.5", // کمی محو بودن در نیمه راه
          filter: "blur(5px)", // محوشدگی کمتر
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1", // کاملاً واضح
          filter: "blur(0)", // بدون تاری در انتها
        },
      },
      // انیمیشن جدید که از داخل به بیرون میاد
      slideInFromInside: {
        "0%": {
          transform: "scale(0.5)", // شروع از اندازه کوچک (داخل)
          opacity: "0",
          filter: "blur(10px)", // کمی تار بودن در ابتدا
        },
        "50%": {
          opacity: "0.5", // کمی محو بودن در نیمه راه
          filter: "blur(5px)", // محوشدگی کمتر
        },
        "100%": {
          transform: "scale(1)", // اندازه نهایی (بیرون)
          opacity: "1", // کاملاً واضح
          filter: "blur(0)", // بدون تاری در انتها
        },
      },
    },
    animation: {
      slideInFromTop: "slideInFromTop 2s ease-out", // افزایش مدت زمان
      slideInFromRight: "slideInFromRight 2s ease-out", // افزایش مدت زمان
      slideInFromTopLonger:
        "slideInFromTopLonger 2.5s cubic-bezier(0.42, 0, 0.58, 1)", // شروع سریع و انتها کندتر
      slideInFromInside: "slideInFromInside 0.8s ease-out", // انیمیشن جدید از داخل به بیرون
    },
  },
  plugins: [],
};
