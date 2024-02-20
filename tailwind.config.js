/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        titleDetail: "inset 0px -55px 45px 0px #1D1C29",
      },
      borderColor: {
        borderBottom: "#ffffff23",
      },
    },
  },
  plugins: [],
};
