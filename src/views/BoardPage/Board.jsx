import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, getBoards} from '../../features/BoardsSlice';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import BoardItems from "./BoardItems";
import Typography from "@mui/material/Typography";

const CateContainer = styled("div")(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));


export function Board() {
    const {isBoardFetching, isBoardGetError, isBoardGetSuccess} = useSelector(boardSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("dispatching for boards")
        dispatch(getBoards());
    }, []);


    return (
        <CateContainer>
            <Grid container>
                <Grid item xs={6} style={{maxHeight: '100vh', overflow: 'auto'}}>
                    <Typography variant="h4"> Blah</Typography>
                    <br></br>
                    <BoardItems/>
                </Grid>
                <Divider orientation="vertical" flexItem/>
                <Grid item xs={6}>
                    ...
                </Grid>
            </Grid>
        </CateContainer>
    );
}
