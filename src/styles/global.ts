import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html': {
    fontSize: '62.5%;'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray200',
    color: '$gray100',
    fontSize: '1.6rem',
    fontFamily: 'Inter, sans-serif',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  },

  'button': {
    cursor: 'pointer',
  },

  'ul': {
    listStyle: 'none',
  },

  'a': {
    textDecoration: 'none',
  },

  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $blue700'
  },

})

export default globalStyles