import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



const initialState = {spinner: false,boardModal:false}

export const miscSlice = createSlice({
    name: 'misc',
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
