import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SideBar}from '../Components/SideBar'
import {CategoryView}from './CategoryView'
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import {CategoryModal} from "../Components/CategoryModal";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor:theme.palette.secondary.main,
        minHeight:'100vh'
    },
}));

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CategoryModal/>
            <CssBaseline />
            <SideBar/>
            <CategoryView/>
        </div>
    );
}

export { HomePage };