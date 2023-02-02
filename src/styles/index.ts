import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray900: '#121214',
      gray800: '#202024',
      gray400: '#a1a1aa',
      gray300: '#c4c4cc',
      gray200: '#e4e4e7',
      gray100: '#e1e1e6',

      blue700: '#1d4ed8',

      green500: '#22c55e',

      red500: '#dc2626',

      white: '#fff'
    },

    fontSizes: {
      md: '1.8rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
    }
  }
})