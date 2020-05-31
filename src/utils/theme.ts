import {createMuiTheme} from "@material-ui/core/styles";

const anyplayTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      // dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#FFF',
    },
    },
    typography: {
    button: {
      textTransform: 'none'
    },
    },
});
export default anyplayTheme
