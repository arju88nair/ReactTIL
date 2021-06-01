import {boardConstants} from "../_constants/boardConstants";
import {boardService} from "../_services";
import {alertActions} from "./alertActions";
import {miscActions} from "./miscActions";

export const boardActions = {
    add,
    get
}

function add(payload) {
    return dispatch => {
        dispatch(request({payload}));
        boardService.add(payload)
            .then(
                payload => {
                    dispatch(alertActions.success('Added successfully'));
                    dispatch(success(payload));
                    dispatch(miscActions.closeSpinner(false))

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(miscActions.closeSpinner(false))
                    dispatch(alertActions.error(error.toString()));
                }
            );

    };

    function request(payload) {
        return {type: boardConstants.ADD_REQUEST, payload}
    }

    function success(payload) {
        return {type: boardConstants.ADD_SUCCESS, payload}
    }

    function failure(error) {
        return {type: boardConstants.ADD_FAILURE, error}
    }
}


function get(payload) {
    return dispatch => {
        dispatch(request({payload}));
        boardService.get(payload)
            .then(
                payload => {
                    // dispatch(alertActions.success('Added successfully'));
                    dispatch(success(payload));
                    dispatch(miscActions.closeSpinner(false))

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(miscActions.closeSpinner(false))
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(payload) {
        return {type: boardConstants.GET_REQUEST, payload}
    }

    function success(payload) {
        return {type: boardConstants.GET_SUCCESS, payload}
    }

    function failure(error) {
        return {type: boardConstants.GET_FAILURE, error}
    }
}