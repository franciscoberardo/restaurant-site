/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pridi: ["Pridi", "sans"],
        pacifico: ["Pacifico", "system-ui"],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        primary: "#f5f5f5",
      }
    },
  },
  plugins: [],
};
