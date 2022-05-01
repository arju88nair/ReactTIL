import './App.css';
import {Routes, Route} from 'react-router-dom';
import {LandingPage} from "./views/LandingPage";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {LoginPage} from "./views/LoginPage";
import {RegisterPage} from "./views/RegisterPage";

function App() {
    const theme = createTheme({
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
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
