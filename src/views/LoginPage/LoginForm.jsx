import * as React from 'react';
import {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SocialButtons from "../Components/SocialButtons";
import {useDispatch, useSelector} from "react-redux";
import {clearState, loginUser, userSelector} from "../../features/UserSlice";
import {closeSpinner, openSpinner} from "../../features/MiscSlice";
import {useLocation, useNavigate} from "react-router-dom";
import {error, success} from "../../features/AlertSlice";

export default function LoginForm() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const {isSuccess, isError, errorMessage} = useSelector(
        userSelector
    );

    function handleSubmit(e) {
        e.preventDefault();

        if (user.email && user.password) {
            dispatch(openSpinner())
            dispatch(clearState());
            dispatch(loginUser(user));
        }
    };
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            dispatch(success(errorMessage))
            dispatch(closeSpinner())
            // this.props.history.push('/');
            navigate(from, {replace: true});
        }
        if (isError) {
            dispatch(error(errorMessage))
            dispatch(closeSpinner())
        }
    }, [isError, isSuccess]);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" style={{fontSize: "1.8em", fontWeight: "bold"}}>
                    Log in to your account
                </Typography>
                <SocialButtons/>
                <Box component="form" onSubmit={handleSubmit} validate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        value={user.email}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={user.password}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        style={{display: 'flex', textAlign: 'center', borderRadius: 14, justifyContent: 'center'}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}