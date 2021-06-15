import React, {useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {history} from '../_helpers';
import {alertActions, miscActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../views/HomePage';
import {LandingPage} from '../views/LandingPage';
import {LoginPage} from '../views/LoginPage';
import {RegisterPage} from '../views/RegisterPage';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import '../resources/css/App.css';
import {themeDark, themeLight} from "../_helpers/theme";
import {Snackbar} from "@material-ui/core";
import {clear} from "../features/AlertSlice";
import {preferencesSelector} from "../features/PreferencesSlice";


const useStyles = makeStyles((theme) => ({
    root: {}

}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function App() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);
    const themeMode = darkMode ? themeDark : themeLight
    console.log("In app", darkMode)
    const alert = useSelector((state) => state.alert);
    const handleBackClose = (event, reason) => {
        dispatch(miscActions.closeSpinner(false))
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(clear());
    };

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.type}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <ThemeProvider theme={themeMode}>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/landing" component={LandingPage}/>
                        <Redirect from="*" to="/landing"/>
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

