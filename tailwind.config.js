/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        yellowLogo : '#1d3240',
        bgDark : '#2F4858',
        bgLight : '#f0f0f0',
        grayLogo : '#e5ba74',
      },

      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          hover: 'var(--color-text-hover)',
          'icon-primary': 'var(--color-button-primary)',
          'icon-primary-hover': 'var(--color-button-primary-hover)',
          'icon-secondary': 'var(--color-button-secondary)',
          'icon-secondary-hover': 'var(--color-button-secondary-hover)',
        }
      },

      backgroundColor: {
        skin: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          terciary: 'var(--color-bg-terciary)',
          'button-hover': 'var(--color-button-bg-hover)',
        }
      }
    },
  },
  plugins: [],
}

