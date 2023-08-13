import { configColors } from "src/shared/config/colors";

const theme = {
  colors: configColors,

  headerHeight: '4.5rem',
  footerHeight: '5rem',
  contentWidth: '70.75rem',

  breakpoints: {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1280,
    xxl: 1920,
  },

  up: (breakpoint: number, vertical = false) =>
    `@media all and (min-${vertical ? 'height' : 'width'}: ${breakpoint + 0.02}px)`,

  down: (breakpoint: number, vertical = false) =>
    `@media all and (max-${vertical ? 'height' : 'width'}: ${breakpoint}px)`,

  between: (breakpointMin: number, breakpointMax: number, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}px) and (min-${
      vertical ? 'height' : 'width'
    }: ${breakpointMin + 0.02}px)`,
} as const;

export type TTheme = typeof theme;
export default theme;