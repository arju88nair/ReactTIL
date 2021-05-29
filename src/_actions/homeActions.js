
import {miscActions} from "./miscActions";
import {homeConstants} from "../_constants";
export const homeActions = {
    turnOnDarkMode
};

function submitAddCategory(board) {
    miscActions.closeSpinner(false)

}


function turnOnDarkMode(isOn)
{
    console.log(isOn)
    return {type: homeConstants.TOGGLE_DARKTHEME};
}
