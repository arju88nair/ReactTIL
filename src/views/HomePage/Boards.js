import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {BoardSkeleton} from "../Components/BoardSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {boardActions} from "../../_actions/boardActions";
import Button from "@material-ui/core/Button";
import  {BoardCards} from "./BoardCards";
import {getBoards, userSelector, clearState, boardSelector} from '../../features/BoardsSlice';


const useStyles = makeStyles((theme) => ({
    cateContainer: {
        marginTop: '2%',
    },
    button: {
        background: theme.palette.action.primary,
        color: theme.palette.text.primary,
        borderColor: theme.palette.action.secondary,
        borderRadius: '26px',
        textTransform: 'capitalize',
        fontWeight: 900,
        padding: '0.85em',
        '&:hover': {
            background: theme.palette.action.hover,
        },
    },
}));

function ErrorRefresh() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleErrorRefresh = (event) => {
        dispatch(boardActions.get());
    };

    // TODO Fix error refresh rendering
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
    const { isFetching, isError,isSuccess } = useSelector(boardSelector);
    const boardState = useSelector(boardSelector);
    console.log("boards",boardState)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBoards());
    }, []);


    return (
        <div className={classes.cateContainer}>
            <Grid container direction="row"
                  justify="flex-start"
                  alignItems="center" spacing={3}>
                {isFetching && Array(6).fill(<BoardSkeleton/>)}
                {isError && <ErrorRefresh/>}
                {isSuccess && <BoardCards/>}
            </Grid>
        </div>
    );
}
