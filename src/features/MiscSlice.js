import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {store} from "../_helpers";
import {preferencesConstants} from "../_constants";
import {userSlice} from "./UserSlice";



const initialState = {spinner: false,boardModal:false}

export const miscSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleDarkMode:(state) =>
        {
            return {...state, darkThemeEnabled: !state.darkThemeEnabled};
        }
    }
});

export const {toggleDarkMode} = miscSlice.actions;

export const miscSelector = (state) => state.misc;
