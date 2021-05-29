import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {themeDark, themeLight} from "./_helpers/theme";
import { store } from './_helpers';
import { App } from './app';
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

render(
    <Provider store={store}>
            <ThemeProvider theme={themeLight}>
            <CssBaseline />
        <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('app')
);


