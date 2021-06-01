import {boardConstants} from '../_constants';

export function boards(state = {}, action) {
    switch (action.type) {
        case boardConstants.ADD_REQUEST:
            return {
                adding: true,
            };
        case boardConstants.ADD_SUCCESS:
            return {
                ...state,
                added: true,
                board: action.board
            };
        case boardConstants.ADD_FAILURE:
            return {
                ...state,
                added: false,
            };
        case boardConstants.GET_REQUEST:
            return {
                loading: true,
            };
        case boardConstants.GET_SUCCESS:

            return {
                loading: false,
                boards: action.payload
            };
        case boardConstants.GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error

            };
        default:
            return state
    }
}