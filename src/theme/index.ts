import { Theme, responsiveFontSizes } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import {
  breakpoints,
  dark,
  light,
  shadows,
  typography,
  spacing,
  shape,
  transitions,
  zIndex,
  components,
} from './maps'

export const theme = (mode = 'light'): Theme =>
  responsiveFontSizes(
    createTheme({
      breakpoints,
      palette: mode === 'light' ? light : dark,
      shadows,
      typography,
      spacing,
      shape,
      transitions,
      zIndex,
      components,
    })
  )
