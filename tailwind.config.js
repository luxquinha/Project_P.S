/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
        // => @media (min-width: 1440px)
      },
      colors:{
        yellowLogo : '#F9A826',
        bgDark : '#2F4858',
        bgLight : '#f0f0f0',
        grayLogo : '#e5ba74',
      },

      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          hover: 'var(--color-text-hover)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          'inverted-hover': 'var(--color-text-inverted-hover)',
          'muted-hover': 'var(--color-text-muted-hover)',
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
      },

      borderColor: {
        skin: {
          primary: 'var(--color-text-base)'
        }
      }
    },
  },
  plugins: [],
}

