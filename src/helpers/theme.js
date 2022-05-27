import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

export const themeDark = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#2A2A2E',
            primary: '#20639b',
            dark: '#fff',
        },
        secondary: {
            main: 'rgba(21, 20, 26, 0.75)',
            light: '#171c24',
            primary: '#171c24',
        },
        error: {
            main: red.A400,
        },
        background: {
            main: "#688eff",
        },
        text: {
            primary: "#fff",
            secondary: '#d9d9d9',
            disabled: 'rgba(255, 255, 255, 0.5)',
            light: '#fff',// For white in blue
            dark: '#000',// For learn more button WiB for light mode and BiW for dark mode
        },
        action: {
            primary: "#20639b",
            secondary: '#20639b', // Same
            active: '#fff',
            hover: '#395fa3', //Same
            // hover:'rgba(255, 255, 255, 0.08)',
            selected: '#38383d',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)'

        },
        divider: '#646464'
    },
});

export const themeLight = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
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
            secondary: '#1a1a1a',
            disabled: 'rgba(0, 0, 0, 0.38)',
            light: '#fff',// For white in blue,
            dark: 'white' // For learn more button WiB for light mode and BiW for dark mode
            // blueinblack:

        }, action: {
            primary: "#688eff",
            light: '#000',
            secondary: '#688eff', // Same
            hover: '#395fa3', //Same
            // active:'rgba(0, 0, 0, 0.54)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)'
        },
        divider: '#CECECE'
    }
});
