import React from 'react';
import PreLoginAppBar from "../Components/PreLoginAppBar";
import Box from "@mui/material/Box";
import {HeroBanner} from "./HeroBanner";
import styled from "@emotion/styled";
import {CssBaseline} from "@mui/material";

// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%'
}));

export function LandingPage() {

    return (
        <div>
            <CssBaseline/>

            <LayoutContainer>
                <PreLoginAppBar/>
                <HeroBanner/>
            </LayoutContainer>
            Fuck off
        </div>
    );
}
