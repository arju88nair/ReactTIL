import React from 'react';
import {ShelvedBreadCrumbs} from "../Components/BreadCrumbs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";


function SortIcon() {
    return null;
}

export function BoardActions() {
    return (
        <main >
            <div />
            <ShelvedBreadCrumbs/>
            <Divider style={{marginTop:'1%',marginBottom:'1%'}} variant="middle" />
            <Grid container >
                <Grid item xs={3} >
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
                <Grid item style={{flexGrow: "1"}}>

                </Grid>
                <Grid direction="row"
                      justifyContent="center"
                      alignItems="center"
                      xs={3} item >
                    <Button
                        type="submit"
                        variant="outlined"
                    >
                        Add Item
                    </Button>
                </Grid>
            </Grid>

        </main>
    )
}