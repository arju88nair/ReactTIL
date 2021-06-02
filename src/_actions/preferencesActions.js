import {preferencesConstants} from "../_constants";
import {store} from "../_helpers";
export const preferencesActions = {
    turnOnDarkMode
};

function turnOnDarkMode()
{
    store.subscribe(() => {
        const preferences = store.getState().preferences;
        if (!preferences) return;

        localStorage.setItem('darkMode', JSON.stringify(preferences));
    });
    return {type: preferencesConstants.TOGGLE_DARKTHEME};
}
