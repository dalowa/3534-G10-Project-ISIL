/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        title: "clamp(20px, 5vw, 75px)",
        subtitle: "clamp(15px, 3vw, 50px)",
        userName: "clamp(10px, 3vw, 50px)",
        userText: "clamp(11px, 2vw, 45px)",
      },
    },
  },
  plugins: [],
};
