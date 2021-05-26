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
            primary: '#688eff',
        },
        secondary: {
            // main: '#000',
            main: '#171c24',
        },
        error: {
            main: red.A400,
        },
        background: {
            main:"#688eff",
        },
        text: {
            primary: "#ffffff"
        },
        button:{
            primary:"#688eff"
        }
    },
});

export const themeLight = createMuiTheme({
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
        primary:{
            main: "#ffffff"
        },
        secondary: {
            // main: '#000',
            main: '#f4f5f7',
        },
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#000000"
        },
        button:{
            primary:"#fff"
        }
    }
});
