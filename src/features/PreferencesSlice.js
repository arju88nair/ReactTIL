import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import store from "../app/store";
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
    reducers: {
        toggleDarkMode: (state) => {
            let selectedMode = !state.darkThemeEnabled
            console.log("in reducer",selectedMode)
            localStorage.setItem('darkMode', selectedMode);
            return {...state, darkThemeEnabled: selectedMode};
        }
    }
});

export const {toggleDarkMode} = preferencesSlice.actions;

export const preferencesSelector = (state) => state.preferences;
