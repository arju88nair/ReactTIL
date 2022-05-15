import React from "react";
import {styled} from '@mui/material/styles';
import {Board} from "./Boards";
import {useDispatch} from "react-redux";
import {openBoardModal} from "../../features/MiscSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {BoardSkeleton} from "../Components/BoardSkeleton";


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
export function BoardView() {
    const dispatch = useDispatch();

    const handleBoardModal = () => {
        dispatch(openBoardModal());
    };


    return (
        <MainCont component="main" maxWidth="lg">
            <Box  component="main"sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <Grid container spacing={3} style={{marginBottom: '4em'}}>
                    <Grid item xs={12} sm={6}>
                        <Typography style={{marginBottom: '1%', fontWeight: "bold"}} variant="h5" gutterBottom>Your
                            Boards</Typography>

                        {/*<FormControl variant="outlined" className={classes.formControl}>*/}
                        {/*    <InputLabel id="board-sort">Recent Boards</InputLabel>*/}
                        {/*    <Select*/}
                        {/*        labelId="board-sort"*/}
                        {/*        id="board-sort"*/}
                        {/*        onChange={handleChange}*/}
                        {/*        label="Recent Boards"*/}
                        {/*    >*/}
                        {/*        <MenuItem value="">*/}
                        {/*            <em>None</em>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem value={10}>Ten</MenuItem>*/}
                        {/*        <MenuItem value={20}>Twenty</MenuItem>*/}
                        {/*        <MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*    </Select>*/}
                        {/*</FormControl>*/}
                    </Grid>
                    <Grid item xs={12} sm={6} container
                          direction="row"
                          justify="flex-end"
                          alignItems="center">
                        <Button
                            variant="contained"
                            // startIcon={<AddCircleIcon/>}
                            onClick={handleBoardModal}
                        >
                            Create new board
                        </Button>
                    </Grid>
                </Grid>
                <Divider/>
                {/*<BoardSkeleton/>*/}
                <Board/>
            </Box>
        </MainCont>

    )
}
