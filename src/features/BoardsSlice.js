import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {authHeader} from "../_helpers";
import config from 'config';

export const getBoards = createAsyncThunk(
    'boards/get',
    async (user, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                dataType: "jsonp",
                headers: {...authHeader(), 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            };
            const response = await fetch(`${config.apiUrl}/auth/login`, requestOptions);
            let boards = await response.json();
            console.log('boards', boards);
            if (response.status === 200) {
                return boards;
            } else {
                return thunkAPI.rejectWithValue(boards);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const initialState = {}
export const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{
    }
});

export const {toggleDarkMode} = boardsSlice.actions;

export const alertSelector = (state) => state.alert;
