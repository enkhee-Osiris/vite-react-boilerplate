import plugin from 'windicss/plugin';

export default {
  darkMode: false,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      const fontFamilies = {
        '.archivo': {
          fontWeight: theme('fontWeight.semibold'),
          fontFamily:
            '"Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
      };

      addComponents(fontFamilies);
    }),
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
  ],
};
