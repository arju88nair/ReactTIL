import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './_helpers';
import {App} from './app';
import CssBaseline from "@material-ui/core/CssBaseline";

render(
    <Provider store={store}>
        <CssBaseline/>
        <App/>
    </Provider>,
    document.getElementById('app')
);


