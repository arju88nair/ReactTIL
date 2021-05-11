import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
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
            main: '#FFFEFC',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        // type: 'dark'
    },
});
