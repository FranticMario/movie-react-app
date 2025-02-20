/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}', './node_modules/swiper/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
       'custom-gradient':'linear-gradient(to bottom right,  #d1b8b0, #d2b9af 15%, #da6d6d 50%, #c53030, #eea2ad 75% )' 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
    },
  },
  plugins: [],
}
