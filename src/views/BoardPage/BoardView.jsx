import React from 'react';
import SideBar from "../Components/SideBar";
import {BoardHeader} from "./BoardHeader";
import {CssBaseline} from "@mui/material";
import styled from "@emotion/styled";
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
                <BoardHeader/>
            </LayoutContainer>
        </div>
    );
}

export {BoardView};