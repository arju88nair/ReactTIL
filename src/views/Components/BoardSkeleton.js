import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
    cateContainer: {
        marginTop: '1%'
    },
    box: {
        width: 240,
        // maxHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },

}));
export  function BoardSkeleton() {
    const classes = useStyles();

    return (

            <Grid item xs={12} sm={6} lg={3} xl={2}>
                <Box  width={220} marginRight={1} my={5} className={classes.box}>
                    <Skeleton variant="rect" width={210} height={118} />

                    <Box pt={0.5}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Box>
            </Grid>


    );
}
