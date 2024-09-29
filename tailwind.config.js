/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        
      },
      fontFamily: {
        'roboto-mono': ['RobotoMono'],
        'source_code_pro': ['Source_Code_Pro'],
      },
    },
  },
  plugins: [],
}