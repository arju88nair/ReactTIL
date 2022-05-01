import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {LandingPage} from "./views/LandingPage";
import {createTheme, ThemeProvider} from '@mui/material/styles';

function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#c35ee8',
            },
            secondary: {
                main: '#f50057',
            },
            background: {
                main: '#2e2e2e',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
