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
        'source_code_pro_semibold': ['Source_Code_Pro_Semibold'],
        'source_code_pro_bold': ['Source_Code_Pro_Bold'],
      },
    },
  },
  plugins: [],
}