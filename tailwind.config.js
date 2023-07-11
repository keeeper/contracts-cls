module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#845ADF',
        'primary-light': '#f2eefc',
        'success': '#b4c8bc',
        'warning': '#dcb483',
        'bg': '#F0F1F7',
        'gray-dark': '#333335',
        'gray-medium': '#444444',
        'gray-light': '#e6e6e6',
        'text-light': '#8c9097',

      },
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  plugins: [],
}
