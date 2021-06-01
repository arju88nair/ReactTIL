import {miscConstants} from '../_constants';
const initialState = {spinner: false,boardModal:false}

export function misc(state = initialState, action) {
    switch (action.type) {
        case miscConstants.OPEN_SPINNER:
            return {...state,spinner: true};
        case miscConstants.CLOSE_SPINNER:
            return {...state,spinner: false};
        case miscConstants.OPEN_BOARD_MODAL:
            return {...state,boardModal: true};
        case miscConstants.CLOSE_BOARD_MODAL:
            return {...state,boardModal: false};
        default:
            return state
    }
}