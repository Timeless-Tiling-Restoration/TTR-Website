module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // App router
    './components/**/*.{js,ts,jsx,tsx}', // Reusable bits
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
    }
  },
  plugins: [],
}
