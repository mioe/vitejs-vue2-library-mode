import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
  },
})
