// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-prefix-selector')({
      prefix: '.my-extension',
      exclude: [':root', '.my-extension'],
      transform: (prefix, selector, prefixedSelector) => {
        if (selector.startsWith(':root')) {
          return selector
        }
        if (selector === '.my-extension') {
          return selector
        }
        return prefixedSelector
      },
    }),
  ],
}
