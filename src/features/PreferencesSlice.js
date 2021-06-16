import {createSlice} from '@reduxjs/toolkit';

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
