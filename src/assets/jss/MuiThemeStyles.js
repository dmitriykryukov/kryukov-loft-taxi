import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './Colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.orange,
      dark: colors.orangeDark
    },
    secondary: {
      light: colors.grey,
      main: colors.black,
    },
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      containedPrimary:{
        hover: {
          backgroundColor: colors.orangeDark
        }
      }
    }
  }
});