/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html',
    './build/*.font.css'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          primary: '#3B82F6',
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",   

          "900": "#0c4a6e",
          "950": "#082f49"
        },
        secondary: '#10B981',
      }
    },
    fontFamily: {
      'body':   ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color  Emoji'],
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system',   
 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    }
  }
};

