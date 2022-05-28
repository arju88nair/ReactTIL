import React from 'react';
import {ShelvedBreadCrumbs} from "../Components/BreadCrumbs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";


function SortIcon() {
    return null;
}

const MainCont = styled("div")(({theme}) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export function BoardHeader() {
    return (
        <MainCont component="main" maxwidth="lg">
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                <ShelvedBreadCrumbs/>
                <Divider style={{marginTop: '1%', marginBottom: '1%'}} variant="middle"/>
                <Grid container>
                    <Grid item xs={3}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                        >
                            <SortIcon/>
                        </IconButton>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                        >
                            <SortIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </MainCont>
    )
}