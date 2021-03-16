const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },

  purge: {
    content: [
      './src/**/*.njk',
      './src/**/*.html',
    ],

    enabled: true,
  },

  darkMode: false,

  theme: {
    extend: {
      fontFamily: {
        sans: ['Sinkin Sans', ...defaultTheme.fontFamily.sans],
      },

      zIndex: {
        '-1': '-1',
      },
    },
  },

  variants: {
    extend: {
      textColor: ['visited'],
    },
  },

  corePlugins: {},

  plugins: [],
};
