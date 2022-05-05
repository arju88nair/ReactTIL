import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import {useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";


export function Spinner() {
    const open = useSelector(state => state.misc.spinner);
    return (
        <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                  open={open}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
}
