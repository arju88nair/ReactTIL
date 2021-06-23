import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {SideBar} from "../Components/SideBar";
import {Editor} from "./Editor";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor:theme.palette.secondary.main,
        minHeight:'100vh'
    },
}));


export function NewEditorPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <SideBar/>
            <Editor/>
        </div>
    );
}
