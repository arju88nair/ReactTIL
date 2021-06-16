import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {spinner: false, boardModal: false}

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
    }
});

export const {openSpinner, closeSpinner, openBoardModal, closeBoardModal} = miscSlice.actions;

export const miscSelector = (state) => state.misc;
