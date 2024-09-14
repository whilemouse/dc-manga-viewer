// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-prefix-selector')({
      prefix: '.my-extension',
      exclude: ['.my-extension'], // 이미 프리픽스가 있는 선택자는 제외
    }),
  ],
}
