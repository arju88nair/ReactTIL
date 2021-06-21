import React, { useEffect } from 'react';
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
    console.log("bhik")
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>sdsds</p>
            <CssBaseline />
            <SideBar/>
        </div>
    );
}

export { BoardPage };