import {logger} from 'redux-logger';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';
import persistStore from 'redux-persist/es/persistStore';
import persistedReducer from './persistConfig';

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions,
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
export default store;

//
// store.subscribe(() => {
//   console.log("s")
//   const preferences = store.getState().preferences;
//   if (!preferences) return;
//
//   localStorage.setItem("darktheme", JSON.stringify(preferences));
// });
