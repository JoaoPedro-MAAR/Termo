/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const { addIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./index.html", "./main.js", "./model/keyboar.js","./model/text_box.js"],
  theme: {
    extend: {},
  },
  plugins: [],
  addIconSelectors(['mdi', 'mdi-light']),
}