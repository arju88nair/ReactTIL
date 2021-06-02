import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {green} from "@material-ui/core/colors/green";
import {useDispatch, useSelector} from "react-redux";
import {authenticationActions} from "../../_actions";
import {alertActions, miscActions} from "../../_actions";
import {Link} from 'react-router-dom';
import Divider from "@material-ui/core/Divider";
import {Checkbox, FormControlLabel} from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
        text:"grey"
    },
});
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '100vh',
        margin: '10%',
        top: '10%',


        // "MsTransform": "translateY(-50%)",
        // "transform": "translateY(-50%)",


    },
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(8),
        borderRadius: '2%',
        backgroundColor: '#ffffff'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
        padding: '3% 10% 3% 10%',
        // marginTop:"-10%"

    },
    socialButtonBlock: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(3),
        padding: '3% 10% 3% 10%',

    },
    socialButton: {
        borderRadius: 25,
        margin: theme.spacing(1, 0, 1),
        textTransform: "none",
        fontWeight: 'bold',
        color: "primary",
        borderColor: theme.palette.action.secondary,
        height: '50px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: theme.palette.text.light,
        borderColor: theme.palette.action.secondary,
        borderRadius: '26px',
        height: '50px',
        fontWeight: "600",
        background: theme.palette.action.primary,
        '&:hover': {
            background: theme.palette.action.hover,
        }
    },
    loginBay: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        marginTop: '5%',
        borderRadius: '26px',
        WebkitBoxShadow: "6px 10px 25px 0px rgba(0,0,0,0.75)",
        "MozBoxShadow": "6px 10px 25px 0px rgba(0,0,0,0.75)",
        "boxShadow": "6px 10px 25px 0px rgba(0,0,0,0.75)"
    },
    textField: {
        [`& fieldset`]: {
            borderRadius: '26px',
        },
    },
    textColor: {
        color: theme.palette.text.primary
    },
    multilineColor: {
        color: theme.palette.text.primary,
        borderRadius: '26px',

    }


}));

export function RegisterForm() {
    /// TODO :  Change input field colors
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    });
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const errorOpen = alert.open
    // // reset login status
    // useEffect(() => {
    //     dispatch(authenticationActions.logout());
    // }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            dispatch(alertActions.clear());
            dispatch(miscActions.openSpinner(true))
            dispatch(authenticationActions.register(user));
        }
    }

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="sm" className={classes.loginBay}>
            <div className={classes.paper}>

                <Typography component="h1" variant="h5" className={classes.textColor}  style={{fontSize: "1.8em", fontWeight: "bold"}}>
                    Create your account
                </Typography>
                <div className={classes.socialButtonBlock}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        className={classes.socialButton}
                        startIcon={<img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAEGUlEQVRYheVWbWxTVRh+zrn3tt1M2dgHTtYa2ZqNOTa3CSgDZTHyAwhqxPlDHfIDJ0bCIGL4ELDGmDhjCDPOBDURPwiKi0qULWaGRiQjRDugjqrTDTfLpsx9uK3bbe+95/gD13btbdfW7RfPr3ve89z3ec45b857gBsdJJmfuN1YgGH1bgg8DxQcInHDJF4idl/nnBnge8T7McxfRB9bhhFu1CVlk0lkUyfSyW5Sr7bNigF+wFAMj/opulgReJxuBQA26oJFqp5pV2Ia4NtpHTr5IXg5jVN6OuYRDSXiVvKq8m7CBvhOehgXWB20pKSDWEhGUMQziR1Mb1p3Zfx56ZlZEc8hY7DxJdHEAZ0d4C8binDW34EJfXPIJjIs9Cuk4yiodh4AxaSwAl5sgoetx+B/BZpDxlDAi8gruBrLY6SBp6gLP7OSCKYIoFQ4jvnaJmKHqpeM2yHib+ETDLD7YONLZhKPMMAdRhu83I0mVUJXyK5JAJZKO8lryuGZEiaK6dsskBqYiYQnJWCNGJwtEY7PhXikAcYfDERXC8AWCcijY1ip1cyFOBByBNxhzgL1D+hwdpDVvoZoCTbWH/0jEUET9Y2Vp7jW7trW2ANcL63rEOVcMJ3CJ7w1VsK2wQpLIgYAoCD/ynIAPUDoEWh0oS5b8/cmKjATZEUonPoOGuBRbnopuY4ZC4wGZYNfIuvXZxuss21AIPgtIBuI+kweSP4I8lXV/BAw6I6WrDKz3RNtzjN584LeiVxDaIwQDoPgbQ+MQyf5t8YLAMoAQAPB+xOFOK8ukGv7huYtfdqpxFxWGOwOu9h6Ztl4t9c67e2wKNUjt9nXpUyNw8qenASAIWbE/tG78Lm8CH3qTaYzFuGjRMQBYMhl+jhcHABs5t+doePpBlT+oUvJUHeMrkSHOj8Q/s6f8+jbzWW74hXf99b+3V/0rdkYHqdgsJmvvBAai6jwg1+u6mhXs4rD4xIY7jX1n7inlz0R7TgcjirR6VWPNTn3Vvd4rRG5V2S0//TZns23xzRw4nRp4clRq/sfLum241zBKy+WRpoziPyBmUyckw0Cm1RMlcOqqeYXJX1DP0s1pmgGDHU+DPdIUCvdMMoeuPV0aX3twcsxDQDAkZaK2hbZckSN8iSIByKjkHqqcPbPKkhUxSO3nNp2qO5AYzgv6iXT2Fz+eqvP+tz/MUE4QeZfd7A0xfBmw/Z9dbqcWAkaTlU8+4OS88YwNyTlIovK2ipxYOuW9c7EH6VTeO/rOxd3KylNLiWzWIvzVpbAUC4NXsrn3urHN1z8NRY37nv+nZayqmvM+FK3lrb8mpZqCm8cBIBVGJ+wCOPf30a9ex9b++O5ePIm1WiOfVOQNyCnVUpEyyeEcyPVLguMXdy8rqMrmXw3Nv4F+RF0SocsQB0AAAAASUVORK5CYII="
                            alt="Google"/>}
                    >
                        Continue with Google
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        className={classes.socialButton}
                        startIcon={<img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAC7UlEQVRYhe2XvWsUYRDGf/Pu3omChRJM1IAQIhZCxM6oxFMR5SR3mhitTmzEf8BWUURsbFQQtZPYCRePRAkBkxhBU/lRCAqKIIkJxkQRi+Rub8fCZN372Nzm42z0qd6dd2aeZ+d9Z5mFfx2ymKBYa3dNPmpvEKiXvKqqjkTMzOfHXW2TVRMQS/Q2quWmQJPAtgC3VyJkjCud/Q/iH5ZFwP5EptYx9nmE00AkpN6cit52NHLpWdfBL4sWsOdodzOYNFAXkrgYX1VoH0ofHgpyMEEbLUceHgczsARygBpR+vYc7ekIcihbgZZkz04x0g+sWAK5H1kVDpSrRImA/YlMrWPZr4Ha+TJalpA61kjLjjo2rl/FiqgFQKztUVDIuGtL09P78Qm/seQIHGOfr0QOcLKjkVMnNtOwabVHXgF1Jse5YmOBgFiit3H2tlfEvl0bvPXU9xmGhscZfDY2f5Domd3tPQ1+k+1/UOOcBAnVarXrVnrrW3ff0vdkNExY1OQlBVycMxQegUgyTBaAaORPaDbnhg1DIFn0/Bux1u4atc1EaUghLpzd/tt/53rP9ubdNyYmp5nJuly5/rpSCs3aVs3z+4emwH8ElqkP8QIFxHPYumUNAO8//giTQmxX64Ep8B2BIqWZF4hPoz9D+Vmu691grwIiqhoieK7PB9Nxz3bh6svKHeCDmD9UXgUEN3yGJSLvyOcSAYbcyF/i11zU8nrWEzA7TLz6CwJezHVAgQAAETJVpxcp4CgQYFzpBLJVpM9qzrkXKKD/QfyDit6pFruq3hzqTnwMFADgaOQSMF4F/jGT18vFxrIDyewoNsDyDSTTIrJ3MB0fLt4oO5I96Wp9DpoCZpaJPFWOHCoMpbG2RztUtYvFz4VjItIWRA7zDKUAg+n4sGtLEyo3WFh3ZAWuieM2zUcOC/gx2d3e02DykhJIImwPSPcC3Iw6bmfxbV+yAD+aO3rXRrL5jSJSD6CqI7moNer/wv1HWPwCw9b3Nl82BYMAAAAASUVORK5CYII="
                            alt="Facebook"/>}
                    >
                        Continue with Facebook
                    </Button>
                </div>
                <Divider style={{backgroundColor: 'gray', width: '80%'}}/>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ThemeProvider theme={theme}>

                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={user.username}
                                    onChange={handleChange}
                                    type="text"
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={user.email}
                                    type="email"
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={user.password}
                                    onChange={handleChange}
                                    inputProps={{minLength: 2}}
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel className={classes.textColor}
                                              control={<Checkbox value="allowExtraEmails" color="secondary" required/>}
                                label="I agree to the terms and conditions."
                            />
                        </Grid>
                        {errorOpen ? <Grid item xs={12}>
                            <Typography variant="caption" display="block" gutterBottom
                                        style={{color: 'red'}}>
                                {alert.message}
                            </Typography>
                        </Grid> : null}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/login" className={classes.textColor}  style={{
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}> Already have an
                                account? Log In
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
