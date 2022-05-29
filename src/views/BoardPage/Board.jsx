import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, getBoards} from '../../features/BoardsSlice';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import BoardCards from "../HomePage/BoardCards";

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
                <Grid item xs={4}>
<BoardCards/>                </Grid>
                <Grid item xs={8}>
                    ...
                </Grid>
            </Grid> </CateContainer>
    );
}
