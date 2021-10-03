import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {green} from "@material-ui/core/colors/green";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import {loginUser, userSelector, clearState} from '../../features/UserSlice';
import {closeSpinner, openSpinner} from "../../features/MiscSlice";
import {withStyles} from "@material-ui/core";
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";


const theme = createMuiTheme({
    // palette: {
    //     primary: {
    //         main: "#fff", //this overide blue color
    //         light: "red", //overides light blue
    //         dark: "green", //overides dark blue color
    //     },
    // },
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
        background: theme.palette.action.primary,
        color: theme.palette.text.light,
        borderColor: theme.palette.action.secondary,
        borderRadius: '26px',
        height: '50px',
        fontWeight: "600",
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
    // textField: {
    //     [`& fieldset`]: {
    //         borderRadius: '26px',
    //         color: theme.palette.text.primary
    //     },
    //
    // },
    textColor: {
        color: theme.palette.text.primary
    },
    multilineColor: {
        color: 'white',
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


export function LoginForm() {
    const [user, setUser] = useState({
        email: '',
        password: ''
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
            dispatch(clearState());
            dispatch(loginUser(user));
            ;
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
                <Typography className={classes.textColor} variant="h5" style={{fontSize: "1.8em", fontWeight: "bold"}}>
                    Log in to your account
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
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                margin="normal"
                                value={user.email}
                                type="email"
                                InputProps={{
                                    className: classes.multilineColor,
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
                                value={user.password} onChange={handleChange}
                                inputProps={{minLength: 2}}
                                InputProps={{
                                    className: classes.multilineColor
                                }}/>
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel className={classes.textColor}
                                              control={<Checkbox value="allowExtraEmails" color="text"/>}
                                              label="Remember me"
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
                        Log In
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/register" variant="body2" className={classes.textColor}
                                  style={{textDecoration: 'none', fontWeight: 'bold'}}>
                                New here? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
