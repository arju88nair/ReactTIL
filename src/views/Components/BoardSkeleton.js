import React from 'react';
import Grid from "@mui/material/Grid";
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";

// // styled
// const BoxContainer = styled('Box')(() => ({
//     width: 240,
//     // maxHeight: 300,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
// }));

export function BoardSkeleton() {

    return (

        <Grid item xs={12} sm={6} lg={3} xl={2}>
            <Box width={220} marginRight={1} my={5}>
                <Skeleton variant="rect" width={210} height={118}/>
                <Box pt={0.5}>
                    <Skeleton/>
                    <Skeleton width="60%"/>
                </Box>
            </Box>
        </Grid>


    );
}
