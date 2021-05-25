import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

export const themeDark = createMuiTheme({
    typography: {
        fontFamily: [
            'Oxygen',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#222b36',
            // main: '#FFFEFC',
        },
        secondary: {
            // main: '#000',
            main: '#171c24',
        },
        error: {
            main: red.A400,
        },
        background: {
            main: '#171c24',
            default: '#171c24',
        },
        // type: 'dark'
    },
});

export const themeLight = createMuiTheme({
    palette: {
        primary:{
            main: "#fffccc"
        },
        background: {
            default: "#fffccc"
        },
        text: {
            primary: "#ffffff"
        }
    }
});
