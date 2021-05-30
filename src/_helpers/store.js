import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

const localStorageKey = "darkMode";
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
    preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};


export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
store.subscribe(() => {
    const preferences = store.getState().preferences;
    if (!preferences) return;

    localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});
