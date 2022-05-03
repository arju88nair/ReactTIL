import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {darkThemeEnabled: false}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        success: (state, action) => {
            return {
                type: 'success',
                message: action.payload,
                open: true
            }
        }, error: (state, action) => {
            return {
                type: 'error',
                message: action.payload,
                open: true
            }
        }, clear: (state, action) => {
            return {
                open: false,
                ...action
            }
        },
    }
});

export const {success, error, clear} = alertSlice.actions

export const alertSelector = (state) => state.alert;