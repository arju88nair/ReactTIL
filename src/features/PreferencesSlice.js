import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {store} from "../_helpers";
import {preferencesConstants} from "../_constants";
import {userSlice} from "./UserSlice";


// export function turnOnDarkMode()
// {
//     store.subscribe(() => {
//         const preferences = store.getState().preferences;
//         if (!preferences) return;
//
//         localStorage.setItem('darkMode', JSON.stringify(preferences));
//     });
//     return {type: preferencesConstants.TOGGLE_DARKTHEME};
// }

const initialState = {darkThemeEnabled: false}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers:{
        toggleDarkMode:(state) =>
        {
            let selectedMode=!state.darkThemeEnabled
            localStorage.setItem('darkMode', JSON.stringify(selectedMode));
            return {...state, darkThemeEnabled: selectedMode};
        }
    }
});

export const {toggleDarkMode} = preferencesSlice.actions;

export const preferencesSelector = (state) => state.preferences;
