import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    type: 'success',
    message: '',
    open: false
}

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
                type: action.payload.type,
                message: action.payload.message
            }
        },
    }
});

export const {success, error, clear} = alertSlice.actions

export const alertSelector = (state) => state.alert;
