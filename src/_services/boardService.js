import config from 'config';
import {authHeader, handleResponse} from '../_helpers';


export const boardService = {
    add,
    get
}

function add(payload) {
    const requestOptions = {
        method: 'POST',
        dataType: "jsonp",
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(payload),

    };
    return fetch(`${config.apiUrl}/boards`, requestOptions)
        .then(handleResponse)
        .then(board => {
            return board;
        });
}


function get(payload) {
    const requestOptions = {
        method: 'GET',
        dataType: "jsonp",
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(payload),

    };
    return fetch(`${config.apiUrl}/boards`, requestOptions)
        .then(handleResponse)
        .then(board => {
            return board;
        });
}