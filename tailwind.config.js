/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "1E1E1E",

          secondary: "444444",

          accent: "#9ca3af",

          neutral: "1E1E1E",

          "base-100": "#ffffff",

          info: "#0000ff",

          success: "#4ade80",

          warning: "#fdba74",

          error: "#fb7185",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // Existing Tailwind size for reference
        xxs: "0.625rem", // Extra small size
        xxxs: "0.425rem", // Extra small size
      },
      height: {
        "1/6vh": "16.666667vh",
        "1/3vh": "33.333333vh",
        "1/6": "16.666667%",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-animatecss")],
};
