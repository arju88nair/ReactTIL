import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import {authHeader} from "../_helpers";
import config from 'config';
import {userSlice} from "./UserSlice";

const boardsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date),
})


export const getBoards = createAsyncThunk(
    'boards/get',
    async (user, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {...authHeader(), 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            };
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

export const postBoard = createAsyncThunk(
    'boards/post',
    async (board, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {...authHeader(), 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(board)

            };
            const response = await fetch(`${config.apiUrl}/boards`, requestOptions);
            let boards = await response.json();
            if (response.status === 200) {
                console.log(boards)
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
    userBoards:{},
    error: null,
    isBoardFetching: false,
    isBoardSuccess: false,
    isBoardError: false,
    errorMessage: '',
})

export const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        clearBoardState: (state) => {
            // state.isBoardError = false;
            // state.isBoardSuccess = false;
            // state.isBoardFetching = false;
            // return {...state};
        },
    },
    extraReducers:{
        [getBoards.pending]: (state, action) => {
            state.status = 'loading'
            state.isBoardFetching = true;
        },
        [getBoards.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.isBoardFetching = false;
            state.isBoardSuccess = true;
            // Add any fetched posts to the array
            console.log('responseoardFulfilled',action.payload.data)
            state.userBoards = action.payload.data
            // boardsAdapter.upsertMany(state, action.payload)
        },
        [getBoards.rejected]: (state, action) => {
            state.status = 'failed'
            state.errorMessage = action.error.message
            state.isBoardFetching = false;
            state.isBoardError = true;
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
            console.log('responseAdded',action.payload)
            // state.userBoards = action.payload.board
            // boardsAdapter.upsertMany(state, action.payload)
        },
        [postBoard.rejected]: (state, action) => {
            state.status = 'failed'
            state.errorMessage = <action className="error message"></action>
            state.isBoardFetching = false;
            state.isBoardError = true;
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
