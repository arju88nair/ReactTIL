import React, { useEffect } from 'react';
import SideBar from "../Components/SideBar";
import {ShelvedBreadCrumbs} from "../Components/BreadCrumbs";
import {BoardActions} from "./BoardActions";
import {CssBaseline} from "@mui/material";




function BoardPage() {

    return (
        <div >
            <CssBaseline/>
            <SideBar/>
            <BoardActions/>
        </div>
    );
}

export { BoardPage };