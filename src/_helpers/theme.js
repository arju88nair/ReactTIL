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
            dark: '#fff',
        },
        secondary: {
            // main: '#000',
            main: '#171c24',
            light: '#171c24',
            primary: '#171c24',
        },
        error: {
            main: red.A400,
        },
        background: {
            main:"#688eff",
        },
        text: {
            primary: "#fff",
            secondary:'rgb(145, 158, 171)',
            disabled:'rgba(255, 255, 255, 0.5)'
        },
        button:{
            primary:"#688eff",
            secondary:'#688eff',
            active:'#fff',
            hover:'#395fa3',
            // hover:'rgba(255, 255, 255, 0.08)',
            selected:'rgba(255, 255, 255, 0.16)',
            disabled:'rgba(255, 255, 255, 0.3)',
            disabledBackground:'rgba(255, 255, 255, 0.12)'

        },
        divider: '#646464'
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
            main: '#f4f5f7'
        },
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#000",
            secondary:'rgb(107, 119, 140)',
            disabled:'rgba(0, 0, 0, 0.38)',

        },
        button:{
            primary:"#fff",
            secondary:'#000',
            active:'rgba(0, 0, 0, 0.54)',
            hover:'rgba(0, 0, 0, 0.04)',
            selected:'rgba(0, 0, 0, 0.08)',
            disabled:'rgba(0, 0, 0, 0.26)',
            disabledBackground:'rgba(0, 0, 0, 0.12)'
        },
        divider: '#CECECE'
    }
});
