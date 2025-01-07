/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #e0eee0, #e0eee0 5%, #f87171 50%, #c53030, #eea2ad 75%)',
      },
    },
  },
  plugins: [],
}
