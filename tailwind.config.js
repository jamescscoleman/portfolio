module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#100f0d',       // warm near-black background
        surface: '#1a1813',   // raised card surface
        hairline: '#2c2922',  // subtle borders / dividers
        cream: '#ece7dd',     // warm off-white text
        muted: '#a8a294',     // secondary text
        accent: {
          DEFAULT: '#e6a35a', // honey amber
          soft: '#f3c489',    // lighter hover
        },
      },
    },
  },
  plugins: [],
}
