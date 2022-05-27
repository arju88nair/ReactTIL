import React from 'react';
import {Breadcrumbs} from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export function ShelvedBreadCrumbs() {

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </div>
    );
}