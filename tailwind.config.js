/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        todoist: {
          cream: '#FAF8F5',
          card: '#FFFFFF',
          charcoal: '#1F2937',
          gray: '#6B7280',
          lightgray: '#F3F0EC',
          border: '#E8E3DB',
          coral: '#E44232',
          'coral-hover': '#D13627',
          'coral-light': '#FDF2F0',
          mint: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
