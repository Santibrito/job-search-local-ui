const { defineConfig } = require('tailwindcss')

module.exports = defineConfig({
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.js', ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/vue'),
  ],
})
