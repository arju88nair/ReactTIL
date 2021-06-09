import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import {authHeader} from "../_helpers";
import config from 'config';

const boardsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => b.title.localeCompare(a.title),
})

const initialState = boardsAdapter.getInitialState({
    status: 'idle',
    boards:{},
    error: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
})
export const getBoards = createAsyncThunk(
    'boards/get',
    async (user, thunkAPI) => {
        try {
            console.log("Ddd")
            const requestOptions = {
                method: 'GET',
                headers: {...authHeader(), 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            };
            console.log(requestOptions)

            const response = await fetch(`${config.apiUrl}/boards`, requestOptions);
            let boards = await response.json();
            if (response.status === 200) {
                return boards;
            } else {
                return thunkAPI.rejectWithValue(boards);
            }
        } catch (e) {
            console.log('Error', e);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
export const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{
    },
    extraReducers:{
        [getBoards.pending]: (state, action) => {
            state.status = 'loading'
            state.isFetching = true;
        },
        [getBoards.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.isFetching = false;
            state.isSuccess = true;
            // Add any fetched posts to the array
            console.log('response',action.payload.data)
            state.boards = action.payload.data
            // boardsAdapter.upsertMany(state, action.payload)
        },
        [getBoards.rejected]: (state, action) => {
            state.status = 'failed'
            state.errorMessage = action.error.message
            state.isFetching = false;
            state.isError = true;
        },
    }
});

// export const {toggleDarkMode} = boardsSlice.actions;

export const boardSelector = (state) => state.boards;
