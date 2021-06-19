import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SideBar}from '../Components/SideBar'
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor:theme.palette.secondary.main,
        minHeight:'100vh'
    },
}));

function BoardPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <SideBar/>
        </div>
    );
}

export { BoardPage };