import {miscConstants} from '../_constants/miscConstants';

export const miscActions = {
    openSpinner,
    closeSpinner,
    openBoardModal,
    closeBoardModal

};

function openSpinner(open) {
    return {type: miscConstants.OPEN_SPINNER,open};
}
function closeSpinner(open) {
    return {type: miscConstants.CLOSE_SPINNER,open};
}

function openBoardModal(open) {
    return {type: miscConstants.OPEN_BOARD_MODAL,open};
}

function closeBoardModal(open) {
    return {type: miscConstants.CLOSE_BOARD_MODAL,open};
}

