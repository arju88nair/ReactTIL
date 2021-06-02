import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import {BoardSkeleton} from "../Components/BoardSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {boardActions} from "../../_actions/boardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import  {BoardCards} from "./BoardCards";

const useStyles = makeStyles((theme) => ({
    cateContainer: {
        marginTop: '1%',
        // display: 'flex',
        // verticalAlign: 'middle',
        // height:'100%'
    },
    button: {
        background: theme.palette.button.primary,
        color: theme.palette.text.primary,
        borderColor: theme.palette.button.secondary,
        borderRadius: '26px',
        textTransform: 'capitalize',
        fontWeight: 900,
        padding: '0.85em',
        '&:hover': {
            background: theme.palette.button.hover,
        },
    },
}));

function ErrorRefresh() {
    const classes = useStyles();
    const dispatch = useDispatch();
    let cards = [];
    const handleErrorRefresh = (event) => {
        cards = dispatch(boardActions.get());
    };
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center" xs={12} style={{marginTop:'20%'}}>
            <Typography gutterBottom variant="body2">
                Something went wrong.Please Try again
            </Typography>
            <Button  className={classes.button}   onClick={handleErrorRefresh}>Retry</Button>
        </Grid>
    )
}


export function Board() {
    const classes = useStyles();
    const boardState = useSelector(state => state.boards);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(boardActions.get());
    }, []);


    return (
        <div className={classes.cateContainer}>
            <Grid container direction="row"
                  justify="flex-start"
                  alignItems="center" spacing={3}>
                {boardState.loading && Array(6).fill(<BoardSkeleton/>)}
                {boardState.error && <ErrorRefresh/>}
                {boardState.boards && <BoardCards/>}
            </Grid>
        </div>
    );
}
