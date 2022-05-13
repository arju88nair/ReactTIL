import * as React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LandingPage} from "./views/LandingPage";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {LoginPage} from "./views/LoginPage";
import {RegisterPage} from "./views/RegisterPage";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {clear} from "./features/AlertSlice";
import {useDispatch, useSelector} from "react-redux";
import {HomePage} from "./views/HomePage";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function App() {
    const dispatch = useDispatch();
    const snackbar = useSelector(state => state.alert);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(clear(snackbar));
    };
    const theme = createTheme({
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
            mode: 'dark',
            primary: {
                main: '#655D8A',
                // main: '#5584AC',
            },
            secondary: {
                main: '#FDCEB9',
                // main: '#D885A3',
            },
            background: {
                main: '#2e2e2e',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbar.type}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
            <Routes>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/landing" replace/>}
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
