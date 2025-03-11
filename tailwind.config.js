module.exports = {
  content: ["./src//**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        VertDoux: "#A8D5BA",
        BrunTerre: "#D8BFAA",
        RoseHiver: "#F8E0F0",
        BeigePeace: "#F3EDDA",
      },
      dropShadow: {
        vert: "0 0 10px #A8D5BA",
        rose: "0 0 10px #F8E0F0",
        marron: "0 0 10px #D8BFAA",
      },
      screens: {
        phone: "680px",
        service: "810px",
      },
      
    },
  },
  plugins: [],
};
