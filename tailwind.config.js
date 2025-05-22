module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or your actual file paths
  ],
  theme: {
    extend: {
      keyframes: {
        slideFade: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-fade': 'slideFade 0.5s ease-out forwards',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
