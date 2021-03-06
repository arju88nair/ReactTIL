import React from 'react';
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Board} from "./Board";


function SortIcon() {
    return null;
}

const MainCont = styled("div")(({theme}) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // marginTop:'2%',
    ...theme.mixins.toolbar,
}));

export function BoardContent() {
    return (
        <MainCont component="main" maxwidth="lg">
            <Box component="main">
                <DrawerHeader/>
                <Board/>
            </Box>
        </MainCont>
    )
}