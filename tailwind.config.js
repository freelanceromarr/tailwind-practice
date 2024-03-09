/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './form.html',
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
    colors:{},
    fontFamily:{},
    
  },
  plugins: [
    require('@tailwindcss/forms',{
      strategy: 'class'
    })
  ],
}

