import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ShelvedBreadCrumbs} from "../Components/BreadCrumbs";
import Grid from "@material-ui/core/Grid";
import {Autocomplete} from "@material-ui/lab";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/Sort";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
    },
    fixedWidthContainer: {
        maxWidth: "100px",
    },
    submit: {
        background: theme.palette.action.primary,
        color: theme.palette.text.light,
        borderColor: theme.palette.action.secondary,
        borderRadius: '25px',
        height: '35px',
        fontWeight: "600",
        '&:hover': {
            background: theme.palette.action.hover,
        }
    },

}));

export function BoardActions() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <ShelvedBreadCrumbs/>
            <Divider style={{marginTop:'1%',marginBottom:'1%'}} variant="middle" />
            <Grid container >
                <Grid item xs={3} className={classes.fixedWidthContainer}>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                >
                    <SortIcon/>
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                >
                    <SortIcon/>
                </IconButton>
            </Grid>
                <Grid item style={{flexGrow: "1"}}>

                </Grid>
                <Grid direction="row"
                      justifyContent="center"
                      alignItems="center"
                      xs={3} item className={classes.fixedWidthContainer}>
                    <Button
                        type="submit"
                        variant="outlined"
                        className={classes.submit}
                    >
                        Add Item
                    </Button>
                </Grid>
            </Grid>

        </main>
    )
}