/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
theme: {
  extend: {
    colors: {
      primary: '#3643FB',       // Primary Blue
      secondary: '#313DDF',     // Secondary Blue
      textWhite: '#F5F5F5',
      gray900: '#333333',
      gray600: '#808080'
    }
  }
}
,
  plugins: [],
}

