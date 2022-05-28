import React from 'react';
import PreLoginAppBar from "../Components/PreLoginAppBar";
import {HeroBanner} from "./HeroBanner";
import styled from "@emotion/styled";
import {CssBaseline} from "@mui/material";

// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%'
}));

export function LandingVIew() {

    return (
        <div>
            <CssBaseline/>
            <LayoutContainer>
                <PreLoginAppBar/>
                <HeroBanner/>
            </LayoutContainer>
        </div>
    );
}
