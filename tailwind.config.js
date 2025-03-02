/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: "rgba(70, 96, 68, 0.88)",
      secondary: "rgba(93, 127, 91, 0.8)",
      buttons: "rgba(90, 120, 70, 0.88)"
    }
  },
  plugins: [],
}