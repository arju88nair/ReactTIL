import React from 'react';
import {CssBaseline} from "@mui/material";
import styled from "@emotion/styled";
import SideBar from "../Components/SideBar";
import {BoardView} from "./BoardView";

// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    // justifyContent:'center',
    // alignItems: 'center',
    display: 'flex',


}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

function HomePage() {
    return (
        <div>
            <CssBaseline/>
            <LayoutContainer>
                <SideBar/>
                <BoardView/>
            </LayoutContainer>
        </div>
    );
}

export {HomePage};