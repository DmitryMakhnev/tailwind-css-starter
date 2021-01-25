const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    // please add your final html directory (relative from this file)
    './output/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'

  // theme configuration
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  }
}
