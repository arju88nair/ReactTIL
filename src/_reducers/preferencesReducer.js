import {preferencesConstants} from '../_constants';

const initialState = {darkThemeEnabled: false}

export function preferences(state = {initialState}, action) {
    switch (action.type) {
        case preferencesConstants.TOGGLE_DARKTHEME:
            console.log(action)
            return {...state, darkThemeEnabled: !state.darkThemeEnabled};
        default:
            return state
    }
}
