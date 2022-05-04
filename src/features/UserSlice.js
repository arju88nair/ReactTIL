import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {history} from "../_helpers";


// createAsyncThunk provides us those states out of the box. To implement it, we just need to use the action name and the state of it.
// createAsyncThunk takes two argument,
// Name that helps to identify action types.
// A callback function that should return a promise
// Further, callback function take two arguments. first, is the value that we pass from dispatched action and second argument is Thunk API config.
// Once it returns a promise, either it will resolve or reject the promise. By default it provides us three state which are pending, fulfilled and rejected.
export const signupUser = createAsyncThunk(
    'users/signupUser',
    async (user, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(user)

            };
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`/auth/signup`, requestOptions);
            let data = await response.json();
            console.log('data', data);
            if (response.status === 200) {
                localStorage.setItem('token', data.access_token);
                return { ...data,user};
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'users/login',
    async (user, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(user)
            };
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`/auth/login`, requestOptions);
            let data = await response.json();
            console.log('response', data);
            if (response.status === 200) {
                localStorage.setItem('token', data.access_token);
                return { ...data,user};
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export function logout() {
    /// TODO Fix action undefined issue after logging out
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    clearState()
    history.push('login');

}
let token =localStorage.getItem('token');

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        token:token
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, {payload}) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            state.username = payload.name;
            return state;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, {payload}) => {
            if(!payload)
            {
                payload={'message':"Something went wrong. Please try again later"}
            }
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, {payload}) => {
            if(!payload)
            {
                payload={'message':"Something went wrong. Please try again later"}
            }
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
        // [fetchUserBytoken.pending]: (state) => {
        //     state.isFetching = true;
        // },
        // [fetchUserBytoken.fulfilled]: (state, {payload}) => {
        //     state.isFetching = false;
        //     state.isSuccess = true;
        //
        //     state.email = payload.email;
        //     state.username = payload.name;
        // },
        // [fetchUserBytoken.rejected]: (state) => {
        //     console.log('fetchUserBytoken');
        //     state.isFetching = false;
        //     state.isError = true;
        // },
    },
});

export const {clearState} = userSlice.actions;

export const userSelector = (state) => state.user;
