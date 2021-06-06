import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {store} from "../_helpers";
import {preferencesConstants} from "../_constants";
import {userSlice} from "./UserSlice";



const initialState = {darkThemeEnabled: false}

export const alertSlice = createSlice({
    name: 'user',
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
