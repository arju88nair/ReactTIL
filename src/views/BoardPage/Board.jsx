import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, getBoards} from '../../features/BoardsSlice';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import BoardItems from "./BoardItems";
import {BoardLeftHeader} from "./BoardLeftHeader";
import Editors from "./Editor";
import {Paper} from "@mui/material";
import {BoardRightHeader} from "./BoardRightHeader";

const CateContainer = styled("div")(({theme}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));
const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} style={{maxHeight: '100vh', overflow: 'hidden'}}>
                <Grid item xs={6} style={{maxHeight: '100vh', overflow: 'auto', borderRight: 'thin solid grey'}}>
                    <BoardLeftHeader/>
                    <BoardItems/>
                </Grid>
                {/*<Divider orientation="vertical" />*/}
                <Grid item xs={6}>
                    <BoardRightHeader/>
                    <Editors/>
                </Grid>
            </Grid>
        </CateContainer>
    );
}
