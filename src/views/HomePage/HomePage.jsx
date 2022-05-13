import React from 'react';
import {CssBaseline} from "@mui/material";
import styled from "@emotion/styled";
import SideBar from "../Components/SideBar";
import {BoardView} from "./BoardView";

// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%'
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