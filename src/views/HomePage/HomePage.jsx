import React from 'react';
import {CssBaseline} from "@mui/material";
import MainAppBar from "../Components/AppBar";
import styled from "@emotion/styled";
import SideBar from "../Components/SideBar";

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

            </LayoutContainer>
        </div>
    );
}

export {HomePage};