import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `
}

export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `
}

export const laptopXL = (props) => {
  return css`
    @media only screen and (min-width: 1770px) {
      ${props}
    }
  `
}
