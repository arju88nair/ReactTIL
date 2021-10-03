import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {green} from "@material-ui/core/colors/green";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import Divider from "@material-ui/core/Divider";
import {Checkbox, FormControlLabel, withStyles} from "@material-ui/core";
import {clearState, signupUser, userSelector} from "../../features/UserSlice";
import {closeSpinner, openSpinner} from "../../features/MiscSlice";
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

const theme = createMuiTheme({
    palette: {
        text: "grey"
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
        margin: '10%',
        top: '10%',
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

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#20639b',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#20639b',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#20639b',
            },
            '&:hover fieldset': {
                borderColor: '#20639b',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#20639b',
            },
        },
    },
})(TextField);

export function RegisterForm() {
    /// TODO :  Change input field colors
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const {isSuccess, isError, errorMessage} = useSelector(
        userSelector
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            dispatch(openSpinner())
            dispatch(signupUser(user));
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            dispatch(closeSpinner())
            history.push('/');
        }
        if (isError) {
            dispatch(closeSpinner())
        }
    }, [isError, isSuccess]);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" className={classes.loginBay}>
            <div className={classes.paper}>

                <Typography component="h1" variant="h5" className={classes.textColor}
                            style={{fontSize: "1.8em", fontWeight: "bold"}}>
                    Create your account
                </Typography>
                <div className={classes.socialButtonBlock}>
                    <GoogleLoginButton
                        style={{display: 'flex', textAlign: 'center', borderRadius: 25, justifyContent: 'center'}}/>

                    <FacebookLoginButton
                        style={{display: 'flex', textAlign: 'center', borderRadius: 25, justifyContent: 'center'}}/>
                </div>
                <Divider style={{backgroundColor: 'gray', width: '80%'}}/>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CssTextField
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
                        </Grid>
                        <Grid item xs={12}>

                            <CssTextField
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
                        </Grid>
                        <Grid item xs={12}>

                            <CssTextField
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

                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel className={classes.textColor}
                                              control={<Checkbox value="allowExtraEmails" color="text" required/>}
                                              label="I agree to the terms and conditions."
                            />
                        </Grid>
                        {isError ? <Grid item xs={12}>
                            <Typography variant="caption" display="block" gutterBottom color="primary"
                                        style={{color: 'red', fontSize: '1.05em'}}>
                                {errorMessage}
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
                            <Link to="/login" className={classes.textColor} style={{
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
