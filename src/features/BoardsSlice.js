import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {authHeader} from "../helpers";

const boardsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => b.date.localeCompare(a.date),
})


export const getBoards = createAsyncThunk(
    'boards/get',
    async (user, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {...authHeader(), 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            };
            const response = await fetch(process.env.REACT_APP_SERVER_URL + `/boards`, requestOptions);
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

export const postBoard = createAsyncThunk(
    'boards/post',
    async (board, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {...authHeader(), 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(board)

            };
            const response = await fetch(process.env.REACT_APP_SERVER_URL + `/boards`, requestOptions);
            let boards = await response.json();
            if (response.status === 200) {
                getBoards()
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
export const ByBoard = createAsyncThunk(
    'boards/get',
    async (slug, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {...authHeader(), 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            };
            const response = await fetch(process.env.REACT_APP_SERVER_URL + `/by-board/`+slug, requestOptions);
            console.log(slug)
            let boards = await response.json();
            if (response.status === 200) {
                getBoards()
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

const initialState = boardsAdapter.getInitialState({
    status: 'idle',
    userBoards: {},
    error: null,
    isBoardFetching: false,
    isBoardGetSuccess: false,
    isBoardSuccess: false,
    isBoardGetError: false,
    isBoardError: false,
    isByBoardFetching: false,
    isByBoardGetSuccess: false,
    isByBoardGetError: false,
    errorMessage: '',
})

export const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        clearBoardState: (state) => {
            state.isBoardError = false;
            state.isBoardGetError = false;
            state.isBoardGetSuccess = false;
            state.isBoardSuccess = false;
            state.isBoardFetching = false;
        },
    },
    extraReducers: {
        [getBoards.pending]: (state, action) => {
            state.status = 'loading'
            state.isBoardFetching = true;
        },
        [getBoards.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.isBoardFetching = false;
            state.isBoardGetSuccess = true;
            // Add any fetched posts to the array
            console.log('responseBoardFulfilled', action.payload.data)
            state.userBoards = action.payload.data
            // boardsAdapter.upsertMany(state, action.payload)
        },
        [getBoards.rejected]: (state, action) => {
            state.status = 'failed'
            state.errorMessage = action.error.message
            state.isBoardFetching = false;
            state.isBoardGetError = true;
        },
        [postBoard.pending]: (state, action) => {
            state.status = 'loading'
            state.isBoardFetching = true;
        },
        [postBoard.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.isBoardFetching = false;
            state.isBoardSuccess = true;
            // Add any fetched posts to the array
            console.log('responseAdded', action.payload)
            // state.userBoards = action.payload.board
            // boardsAdapter.upsertMany(state, action.payload.board)
        },
        [postBoard.rejected]: (state, {payload}) => {
            if (!payload) {
                payload = {'message': "Something went wrong. Please try again later"}
            }
            state.status = 'failed'
            state.errorMessage = payload.message;
            state.isBoardFetching = false;
            state.isBoardError = true;
        },
        [ByBoard.pending]: (state, action) => {
            state.status = 'loading'
            state.isByBoardFetching = true;
        },
        [ByBoard.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.isByBoardFetching = false;
            state.isByBoardGetSuccess = true;
            // Add any fetched posts to the array
            console.log('responseAdded', action.payload)
            // state.userBoards = action.payload.board
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

export const {clearBoardState} = boardsSlice.actions;

export const boardSelector = (state) => state.boards;
// export const {
//     selectAll: selectAllPosts,
//     selectById: selectPostById,
//     selectIds: selectPostIds,
// } = boardsAdapter.getSelectors((state) => state.boards)
