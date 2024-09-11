/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        FullScreen: 'pullup 0.8s ease-out 1 forwards',
        MainText: 'text 1s 1 forwards ease-out 0.6s',
      },
      keyframes: {
        pullup: {
          '0%': { height: '0' },
          '100%': { height: '100vh' },
        },
        text: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      clipPath: {
        'clip-path': 'url(#clip-path)',
      },
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
        'Dm': ['DM Sans','sans-serif']
      }
    },
  },
  plugins: [ ],
}
