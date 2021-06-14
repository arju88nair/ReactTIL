import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {userSlice} from '../features/UserSlice';
import {preferencesSlice} from '../features/PreferencesSlice';
import {alertSlice} from '../features/AlertSlice';
import {miscSlice} from '../features/MiscSlice';
import {boardsSlice} from '../features/BoardsSlice';
// import {store} from "../_helpers";
// const loggerMiddleware = createLogger();


const localStorageKey = "darkMode";
const persistedTheme = JSON.parse(localStorage.getItem(localStorageKey));

const preloadedState = {
    preferences: persistedTheme ? JSON.parse(persistedTheme) : {},

}
// const preloadedState = {
//     preferences: [
//         {
//             darkThemeEnabled: persistedTheme,
//         }
//     ]
// }
const reducer = {
    user: userSlice.reducer,
    preferences: preferencesSlice.reducer,
    alert: alertSlice.reducer,
    misc: miscSlice.reducer,
    boards: boardsSlice.reducer
}

const store = configureStore({
    reducer,
    // preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
    console.log("in store",persistedTheme)
    const preferences = persistedTheme;
    if (!preferences) return;

    localStorage.setItem("darkMode", preferences);
});

export default store;
//
// store.subscribe(() => {
//   console.log("s")
//   const preferences = store.getState().preferences;
//   if (!preferences) return;
//
//   localStorage.setItem("darktheme", JSON.stringify(preferences));
// });
