import React from 'react';
import SideBar from "../Components/SideBar";
import {BoardContent} from "./BoardContent";
import {CssBaseline} from "@mui/material";
import styled from "@emotion/styled";
import Editors from "./Editor";
// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    // justifyContent:'center',
    // alignItems: 'center',
    display: 'flex',


}));


function BoardView() {

    return (
        <div>
            <CssBaseline/>
            <LayoutContainer>
                <SideBar/>
                <BoardContent/>
            </LayoutContainer>
        </div>
    );
}

export {BoardView};