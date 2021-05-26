import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {LoginForm} from "./LoginForm";
import {PreLoginAppbar} from "../Components/PreLoginAppbar";


const useStyles = makeStyles((theme) => ({
    blah: {
        flexGrow: 1,
        backgroundColor:theme.palette.secondary.main,
        // border:'thick solid black',
        minHeight:'100vh'

    },
}));


export  function LoginPage() {
    const classes = useStyles();

    return (
        <div className={classes.blah}>
            <PreLoginAppbar/>
            <LoginForm/>
        </div>
    );
}
