import {homeConstants} from '../_constants';

const initialState = {darkThemeEnabled: false}

export function home(state = {initialState}, action) {
    switch (action.type) {
        case homeConstants.TOGGLE_DARKTHEME:
            console.log(action)
            return {...state, darkThemeEnabled: !state.darkThemeEnabled};
        default:
            return state
    }
}
