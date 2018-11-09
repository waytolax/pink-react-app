import {css} from 'styled-components';

const sizes = {
  desktopL: 1200,
  desktop: 960,
  tablet: 660,
  phone: 320
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
