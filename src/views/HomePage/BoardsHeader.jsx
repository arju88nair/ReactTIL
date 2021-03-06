import React from "react";
import {alpha, styled} from '@mui/material/styles';
import {Boards} from "./Boards";
import {useDispatch} from "react-redux";
import {openBoardModal} from "../../features/MiscSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputBase from "@mui/material/InputBase";


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
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export function BoardsHeader() {
    const dispatch = useDispatch();

    const handleBoardModal = () => {
        dispatch(openBoardModal());
    };


    return (
        <MainCont component="main" maxwidth="lg">
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                <Grid container spacing={2} style={{marginBottom: '1em'}}>
                    <Grid container item xs={12} sm={6} direction="row"
                          justifyContent="flex-start"
                          alignItems="center">
                        <Typography style={{marginBottom: '1%', fontWeight: "bold"}} variant="h5" gutterBottom>Your
                            Boards</Typography>

                        <Search>
                            <SearchIconWrapper>
                                <SearchOutlinedIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search boards"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Grid>
                    <Grid container item xs={12} sm={6}
                          direction="row"
                          justifyContent="flex-end"
                    >
                        <Button
                            variant="contained"
                            startIcon={<AddCircleIcon/>}
                            onClick={handleBoardModal}
                        >
                            Create new board
                        </Button>
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <FilterAltIcon/>
                            </IconButton>
                        </label>
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <SortIcon/>
                            </IconButton>
                        </label>
                    </Grid>
                </Grid>
                <Divider/>
                {/*<BoardSkeleton/>*/}
                <Boards/>
            </Box>
        </MainCont>

    )
}
