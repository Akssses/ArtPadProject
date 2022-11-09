/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "160px",
        sm2: "620px",
        md: "660px",
        lg: "992px",
        xl: "1300px",
      }
    },
    extend: {
      colors: {
        primary: {
          "100": "#CD3ED0"
        }
      },
      varitables: {
        DEFAULT: {
          primary: {
            "200": "linear-gradient(90deg, #CD3ED0 14.1%, #6B1495 144.51%);"
          }
        }
      }
    },
  },
  plugins: [],
}