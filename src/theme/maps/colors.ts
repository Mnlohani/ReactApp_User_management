import { Palette } from '@mui/material'
import {
  green,
  grey,
  blue,
  lightBlue,
  orange,
  purple,
  red,
} from '@mui/material/colors'

type PartialPaletteType = Partial<Palette>

export const light: PartialPaletteType = {
  mode: 'light',

  common: {
    black: '#000',
    white: '#fff',
  },

  primary: {
    main: blue[700],
    light: blue[400],
    dark: blue[800],
    contrastText: '#fff',
  },

  secondary: {
    main: purple[500],
    light: purple[300],
    dark: purple[700],
    contrastText: '#fff',
  },

  error: {
    light: red[700],
    main: red[400],
    dark: red[800],
    contrastText: '#fff',
  },

  warning: {
    main: '#ed6c02',
    light: orange[500],
    dark: orange[900],
    contrastText: '#fff',
  },

  info: {
    main: '#0288d1',
    light: lightBlue[500],
    dark: lightBlue[900],
    contrastText: '#fff ',
  },

  success: {
    main: green[800],
    light: green[500],
    dark: green[900],
    contrastText: '#fff',
  },

  grey: {
    50: grey[50],
    100: grey[100],
    200: grey[200],
    300: grey[300],
    400: grey[400],
    500: grey[500],
    600: grey[600],
    700: grey[700],
    800: grey[800],
    900: grey[900],
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },

  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.12)',
  },

  divider: 'rgba(0, 0, 0, 0.12)',

  background: {
    paper: '#fff',
    default: '#fff',
  },

  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.1)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

export const dark: PartialPaletteType = {
  mode: 'dark',
  common: {
    black: '#000',
    white: '#fff',
  },

  primary: {
    main: blue[700],
    light: blue[400],
    dark: grey[900],
    contrastText: '#fff',
  },

  secondary: {
    main: purple[500],
    light: purple[300],
    dark: purple[700],
    contrastText: '#fff',
  },

  error: {
    light: red[500],
    main: red[300],
    dark: red[700],
    contrastText: '#fff',
  },

  warning: {
    main: orange[400],
    light: orange[300],
    dark: orange[700],
    contrastText: 'rgba(0, 0,0 ,0.87)',
  },

  info: {
    main: lightBlue[400],
    light: lightBlue[300],
    dark: lightBlue[700],
    contrastText: 'rgba(0, 0,0 ,0.87)',
  },

  success: {
    main: green[400],
    light: green[300],
    dark: green[700],
    contrastText: 'rgba(0, 0,0 ,0.87)',
  },

  grey: {
    50: grey[50],
    100: grey[100],
    200: grey[200],
    300: grey[300],
    400: grey[400],
    500: grey[500],
    600: grey[600],
    700: grey[700],
    800: grey[800],
    900: grey[900],
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },

  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },

  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212',
  },

  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
}
