import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { spacing } from '@material-ui/system';
const themeCard = createMuiTheme({
    palette: {
      primary: {
        light:'#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText:'#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography: {
        fontFamily: [
          '"Helvetica Neue"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '-apple-system',
          'Roboto',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
    },
  });
export default themeCard;