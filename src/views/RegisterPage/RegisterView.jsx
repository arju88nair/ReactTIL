import React from 'react';
import RegisterForm from "./RegisterForm";
import PreLoginAppBar from "../Components/PreLoginAppBar";
import styled from "@emotion/styled";
import {CssBaseline} from "@mui/material";

// styled
const LayoutContainer = styled('div')(() => ({
    height: '100%',
    overflow: 'hidden',
    width: '100%'
}));


export function RegisterView() {

    return (
        <div>
            <CssBaseline/>

            <LayoutContainer>
                <PreLoginAppBar/>
                <RegisterForm/>
            </LayoutContainer>
        </div>
    );
}
