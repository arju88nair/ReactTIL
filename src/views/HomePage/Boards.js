import React, {useEffect} from 'react';
import {BoardSkeleton} from "../Components/BoardSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, getBoards} from '../../features/BoardsSlice';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import BoardCards from "./BoardCards";
import CachedIcon from '@mui/icons-material/Cached';

const CateContainer = styled("div")(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));


function ErrorRefresh() {
    const dispatch = useDispatch();
    const handleErrorRefresh = (event) => {
        dispatch(getBoards());
    };

    // TODO Fix error refresh rendering
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center" style={{marginTop: '20%'}}>
            <Typography gutterBottom variant="h7">
                Something went wrong.Please Try again
            </Typography>
            <Button variant="contained"
                    startIcon={<CachedIcon/>}
                    onClick={handleErrorRefresh}>Retry</Button>
        </Grid>
    )
}


export function Boards() {
    const {isBoardFetching, isBoardGetError, isBoardGetSuccess} = useSelector(boardSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("dispatching for boards")
        dispatch(getBoards());
    }, []);


    return (
        <CateContainer>
            <Grid container direction="row"
                  justify="flex-start"
                  alignItems="center" spacing={3}>
                {isBoardFetching && [...Array(6)].map((e, i) => <BoardSkeleton key={i}/>)}
                {isBoardGetError && <ErrorRefresh/>}
                {isBoardGetSuccess && <BoardCards/>}
            </Grid>
        </CateContainer>
    );
}
