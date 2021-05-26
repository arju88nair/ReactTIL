import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {RegisterForm} from "./RegisterForm";
import {PreLoginAppbar} from "../Components/PreLoginAppbar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:theme.palette.secondary.main,
        minHeight:'100vh'
    },
}));


export  function RegisterPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PreLoginAppbar/>
            <RegisterForm/>
        </div>
    );
}
