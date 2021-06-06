import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import config from 'config';

// createAsyncThunk provides us those states out of the box. To implement it, we just need to use the action name and the state of it.
// createAsyncThunk takes two argument,
// Name that helps to identify action types.
// A callback function that should return a promise
// Further, callback function take two arguments. first, is the value that we pass from dispatched action and second argument is Thunk API config.
// Once it returns a promise, either it will resolve or reject the promise. By default it provides us three state which are pending, fulfilled and rejected.
export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({name, email, password}, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                dataType: 'jsonp',   //you may use jsonp for cross origin request
                crossDomain: true,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(name,
                    email,
                    password,),

            };
            const response = await fetch(`${config.apiUrl}/auth/signup`, requestOptions);
            let data = await response.json();
            console.log('data', data);
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return {...data, username: name, email: email};
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
            const response = await fetch(`${config.apiUrl}/auth/login`, requestOptions);
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

// export const fetchUserBytoken = createAsyncThunk(
//     'users/fetchUserByToken',
//     async ({token}, thunkAPI) => {
//         try {
//             const response = await fetch(
//                 'https://mock-user-auth-server.herokuapp.com/api/v1/users',
//                 {
//                     method: 'GET',
//                     headers: {
//                         Accept: 'application/json',
//                         Authorization: token,
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             let data = await response.json();
//             console.log('data', data, response.status);
//
//             if (response.status === 200) {
//                 return {...data};
//             } else {
//                 return thunkAPI.rejectWithValue(data);
//             }
//         } catch (e) {
//             console.log('Error', e.response.data);
//             return thunkAPI.rejectWithValue(e.response.data);
//         }
//     }
// );
let user = JSON.parse(localStorage.getItem('user'));


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        user:user
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
            state.email = payload.user.email;
            state.username = payload.user.name;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, {payload}) => {
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
            console.log('payload', payload);
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
