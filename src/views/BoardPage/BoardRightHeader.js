import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, getBoards} from '../../features/BoardsSlice';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import ViewComfyAltOutlinedIcon from '@mui/icons-material/ViewComfyAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

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

export function BoardRightHeader() {
    const {isBoardFetching, isBoardGetError, isBoardGetSuccess} = useSelector(boardSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("dispatching for boards")
        dispatch(getBoards());
    }, []);


    return (
        <div>
            <Grid container spacing={2} style={{marginBottom: '1em'}}>
                <Grid container item xs={12} sm={6} direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <FullscreenIcon/>
                            </IconButton>
                        </label>

                </Grid>
                {/*<Grid container item xs={12} sm={6}*/}
                {/*      direction="row"*/}
                {/*      justifyContent="flex-end"*/}
                {/*>*/}

                {/*    <label htmlFor="icon-button-file">*/}
                {/*        <IconButton color="primary" aria-label="upload picture" component="span">*/}
                {/*            <SortOutlinedIcon/>*/}
                {/*        </IconButton>*/}
                {/*    </label>*/}
                {/*    <label htmlFor="icon-button-file">*/}
                {/*        <IconButton color="primary" aria-label="upload picture" component="span">*/}
                {/*            <FilterAltOutlinedIcon/>*/}
                {/*        </IconButton>*/}
                {/*    </label>*/}
                {/*    <label htmlFor="icon-button-file">*/}
                {/*        <IconButton color="primary" aria-label="upload picture" component="span">*/}
                {/*            <ViewComfyAltOutlinedIcon/>*/}
                {/*        </IconButton>*/}
                {/*    </label>*/}
                {/*    <label htmlFor="icon-button-file">*/}
                {/*        <IconButton color="primary" aria-label="upload picture" component="span">*/}
                {/*            <MoreHorizOutlinedIcon/>*/}
                {/*        </IconButton>*/}
                {/*    </label>*/}
                {/*</Grid>*/}
            </Grid>

        </div>
    );
}
