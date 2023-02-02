import { styled } from "../../styles/index";

export const HeaderContainer = styled('header', {
  width: '100%',
  height: '24rem',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$blue700',
  fontSize: '$2xl',
  color: '$white',

  'p': {
    marginTop: '4.8rem'
  },

  span: {
    fontWeight: 'bold',
  }

})