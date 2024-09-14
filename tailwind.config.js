import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    base: false, // DaisyUI의 기본 스타일 비활성화
    // 기타 DaisyUI 설정 (필요에 따라 추가)
  },
}
