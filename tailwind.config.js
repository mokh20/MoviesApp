/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#111729",
      },
      boxShadow: {
        homeSlider: "inset 0px -50px 30px 0px #121728",
        titleDetail: "inset 0px -55px 45px 0px #1D1C29",
        navBar: "inset 0px 50px 100px -41px  #0000001c",
      },
      borderColor: {
        borderBottom: "#ffffff23",
      },
      keyframes: {
        SliderBtnRight: {
          "0%": { transform: "translateX(0px)" },
          "10%": { transform: "translateX(2px)" },
          "20%": { transform: "translateX(4px)" },
          "30%": { transform: "translateX(6px)" },
          "40%": { transform: "translateX(8px)" },
          "60%": { transform: "translateX(10px)" },
          "80%": { transform: "translateX(6px)" },
          "100%": { transform: "translateX(0px)" },
        },
        SliderBtnLeft: {
          "0%": { transform: "translateX(0px)" },
          "10%": { transform: "translateX(-2px)" },
          "20%": { transform: "translateX(-4px)" },
          "30%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(-8px)" },
          "60%": { transform: "translateX(-10px)" },
          "80%": { transform: "translateX(-6px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        rightBtn: "SliderBtnRight 1s linear infinite",
        leftBtn: "SliderBtnLeft 1s linear infinite",
      },
    },
  },
  plugins: [],
};
