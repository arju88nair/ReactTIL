import React from 'react';
import LoginForm from "./LoginForm";
import PreLoginAppBar from "../Components/PreLoginAppBar";
import styled from "@emotion/styled";
import {CssBaseline} from "@mui/material";

// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%'
}));




export function LoginPage() {
    return (
        <div>
            <CssBaseline/>

            <LayoutContainer>
            <PreLoginAppBar/>
            <LoginForm/>
            </LayoutContainer>
        </div>
    );
}
