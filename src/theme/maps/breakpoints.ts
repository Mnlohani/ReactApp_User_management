import { Breakpoints } from '@mui/material/styles'

export const breakpoints: Partial<
  { unit: string; step: number } & Breakpoints
> = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],

  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },

  unit: 'px',
}
