
import {miscActions} from "./miscActions";
import {preferencesConstants} from "../_constants";
import {store} from "../_helpers";
export const preferencesActions = {
    turnOnDarkMode
};

function submitAddBoard(board) {
    miscActions.closeSpinner(false)

}


function turnOnDarkMode(isOn)
{
    store.subscribe(() => {
        const preferences = store.getState().preferences;
        if (!preferences) return;

        localStorage.setItem('darkMode', JSON.stringify(preferences));
    });

    // const preferences = store.getState().preferences;
    // if (!preferences) return;
    // console.log(preferences)
    // localStorage.setItem('darkMode', JSON.stringify(preferences));
    // localStorage.setItem('darkTheme', preferencesConstants.TOGGLE_DARKTHEME);
    return {type: preferencesConstants.TOGGLE_DARKTHEME};
}
