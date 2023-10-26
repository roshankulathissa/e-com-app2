/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-backgrounfd": "#E74C3C",
      },
      dropShadow:{
        "header-shadow":"rgba(0, 0, 0, 0.35) 0px 5px 15px" ,
        "produt-shadw":"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      },
    },
  },
  plugins: [],
};
