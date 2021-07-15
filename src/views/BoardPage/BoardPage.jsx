import React, { useEffect } from 'react';
import {SideBar}from '../Components/SideBar'
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import {ShelvedBreadCrumbs} from "../Components/BreadCrumbs";
import {BoardActions} from "./BoardActions";


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
            <BoardActions/>
        </div>
    );
}

export { BoardPage };