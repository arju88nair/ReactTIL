import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {RegisterForm} from "./RegisterForm";
import {PreLoginAppbar} from "../Components/PreLoginAppbar";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexGrow: 1,
    },
}));


export  function RegisterPage() {
    const classes = useStyles();

    return (
        <div className={classes.toolbar}>
            <PreLoginAppbar/>
            <RegisterForm/>
        </div>
    );
}
