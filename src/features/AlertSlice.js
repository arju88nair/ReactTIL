import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



const initialState = {darkThemeEnabled: false}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers:{
        toggleDarkMode:(state) =>
        {
            return {...state, darkThemeEnabled: !state.darkThemeEnabled};
        }
    }
});

export const {toggleDarkMode} = alertSlice.actions;

export const alertSelector = (state) => state.alert;
