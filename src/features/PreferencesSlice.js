import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {store} from "../_helpers";
import {preferencesConstants} from "../_constants";
import {userSlice} from "./UserSlice";


export function turnOnDarkMode()
{
    store.subscribe(() => {
        const preferences = store.getState().preferences;
        if (!preferences) return;

        localStorage.setItem('darkMode', JSON.stringify(preferences));
    });
    return {type: preferencesConstants.TOGGLE_DARKTHEME};
}

const initialState = {darkThemeEnabled: false}

export const preferencesSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleDarkMode:(state) =>
        {
            return {...state, darkThemeEnabled: !state.darkThemeEnabled};
        }
    }
});

export const {toggleDarkMode} = preferencesSlice.actions;

export const preferencesSelector = (state) => state.preferences;
