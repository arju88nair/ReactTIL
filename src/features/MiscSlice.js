import {createSlice} from '@reduxjs/toolkit';


const initialState = {spinner: false, boardModal: false, sideBar: false}

export const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
        openSpinner: (state, action) => {
            return {...state, spinner: true};
        },
        closeSpinner: (state, action) => {
            return {...state, spinner: false};
        },
        openBoardModal: (state, action) => {
            return {...state, boardModal: true};
        },
        closeBoardModal: (state, action) => {
            return {...state, boardModal: false};
        },
        openSideBar: (state, action) => {
            return {...state, sideBar: true};
        },
        closeSideBar: (state, action) => {
            return {...state, sideBar: false};
        },
        toggleSideBar: (state, action) => {
            return {...state, sideBar: !action.payload};
        },
    }
});

export const {
    openSpinner,
    closeSpinner,
    openBoardModal,
    closeBoardModal,
    openSideBar,
    closeSideBar,
    toggleSideBar
} = miscSlice.actions;

export const miscSelector = (state) => state.misc;
