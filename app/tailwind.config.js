module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
        colors: {
            "gray-bg--primary": "#E5E5E5"
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
