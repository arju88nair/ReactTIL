import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {authHeader} from "../helpers";

const byBoardsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => b.date.localeCompare(a.date),
})
export const ByBoard = createAsyncThunk(
    'byBoards/get',
    async (slug, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {...authHeader(), 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            };
            const response = await fetch(process.env.REACT_APP_SERVER_URL + `/by-board/`+slug, requestOptions);
            let byBoardItems = await response.json();
            if (response.status === 200) {
                return byBoardItems;
            } else {
                return thunkAPI.rejectWithValue(byBoardItems);
            }
        } catch (e) {
            console.log('Error', e);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const initialState = byBoardsAdapter.getInitialState({
    status: 'idle',
    byBoardItems: {},
    error: null,
    isByBoardFetching: false,
    isByBoardGetSuccess: false,
    isByBoardGetError: false,
    errorMessage: '',
})
export const byBoardSlice = createSlice({
    name: 'byBoardItems',
    initialState,
    reducers: {
        clearByBoardState: (state) => {
            state.errorMessage = false;
            state.error = false;
            state.isByBoardFetching = false;
            state.isByBoardGetSuccess = false;
            state.isByBoardGetError = false;
        },
    },
    extraReducers: {
        [ByBoard.pending]: (state, action) => {
            state.status = 'loading'
            state.isByBoardFetching = true;
        },
        [ByBoard.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.isByBoardFetching = false;
            state.isByBoardGetSuccess = true;
            console.log(action.payload,"Sdfs")
            // Add any fetched posts to the array
            console.log('responseAdded', action.payload)
            state.byBoardItems = action.payload.data
            // boardsAdapter.upsertMany(state, action.payload.board)
        },
        [ByBoard.rejected]: (state, {payload}) => {
            if (!payload) {
                payload = {'message': "Something went wrong. Please try again later"}
            }
            state.status = 'failed'
            state.errorMessage = payload.message;
            state.isByBoardFetching = false;
            state.isByBoardGetError = true;
        },
    }
});

export const {clearByBoardState} = byBoardSlice.actions;

export const byBoardSelector = (state) => state.byBoardItems;
