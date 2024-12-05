/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat Alternates","sans-serif"]
      },
      backgroundImage: {
        logo: "https://i.ibb.co.com/kyMh19B/cineverse.png",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
