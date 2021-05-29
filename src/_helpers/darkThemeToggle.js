import React from "react";
import { useSelector } from "react-redux";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {themeDark, themeLight} from "./theme";


export const DarkThemeProvider = ({ children }) => {
    const darkThemeEnabled = useSelector((state) => state.home.darkThemeEnabled);
    console.log(darkThemeEnabled)
    return (
        <ThemeProvider theme={{ theme: darkThemeEnabled ? "themeDark" : "themeLight" }}>
            {children}
        </ThemeProvider>
    );
};

