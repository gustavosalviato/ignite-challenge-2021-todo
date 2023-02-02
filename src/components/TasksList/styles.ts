import { styled } from "../../styles/index";

export const TasksContainer = styled('form', {
  maxWidth: 1440,
  width: '100%',
  margin: '0 auto 4.8rem',
  marginTop: 'calc(-24rem / 2)',
  backgroundColor: '$white',
  borderRadius: '8px',
  padding: '3.2rem',
  display: 'flex',
  flexDirection: 'column',

  '@media (max-width:1450px)': {
    maxWidth: 1280,
  },

  '@media (max-width:1280px)': {
    maxWidth: 1024,
  }
})

export const TaskHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',
    gap: '0.5rem',
  },

  strong: {
    fontSize: '$xl',
    color: '$gray800',
  },

  button: {
    all: 'unset',
    backgroundColor: '$green500',
    borderRadius: '8px',
    padding: '1.6rem',
    cursor: 'pointer',
  },

  input: {
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: '$gray200',
    padding: '0 1.6rem',
    borderRadius: '8px',
    border: '2px solid $gray200',
    fontSize: '$md',

    '&:focus': {
      border: '2px solid $blue700',
    }
  }
})

export const TaskList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '4.8rem',
  gap: '3.2rem',
})


export const TaskItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',
    gap: '1.6rem',
  },

  button: {
    all: 'unset',
    width: '2.4rem',
    height: '2.4rem',
    cursor: 'pointer',
  }

})

export const TaskDescription = styled('p', {
  fontSize: '$md',
  color: '$gray900',

  variants: {
    taskSituation: {
      completed: {
        textDecoration: 'line-through',
        opacity: 0.6,
      },
      incompleted: {
        color: '$gray900',
      }
    },
  },

  defaultVariants: {
    taskSituation: "incompleted"
  }
})