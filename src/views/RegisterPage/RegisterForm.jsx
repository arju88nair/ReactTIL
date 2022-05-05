import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
import {clearState, signupUser, userSelector} from "../../features/UserSlice";
import {closeSpinner, openSpinner} from "../../features/MiscSlice";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const {isSuccess, isError, errorMessage} = useSelector(
        userSelector
    );


    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.email && user.password) {
            dispatch(openSpinner())
            dispatch(signupUser(user));
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            dispatch(closeSpinner())
            // history.push('/');
        }
        if (isError) {
            dispatch(closeSpinner())
        }
    }, [isError, isSuccess]);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
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
                    Create your account
                </Typography>
                <SocialButtons/>
                <Box component="form" validate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                onChange={handleChange}
                                value={user.username}
                                name="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                type="email"
                                label="Email Address"
                                onChange={handleChange}
                                value={user.email}
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                                value={user.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        style={{display: 'flex', textAlign: 'center', borderRadius: 14, justifyContent: 'center'}}

                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}