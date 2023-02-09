import { Components } from '@mui/material'

export const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: '#fafafa',
      },
    },
  },
}
