/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myCustomColor: {
          red: '#FC2121',
        },
      },
    },
  },
  plugins: [],
}
