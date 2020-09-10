import React from "react";

export const themes = {
    light: {
        background: "white",
        foreground: "black",
        buttonBackground: "#eee"
    },
    dark: {
        background: "black",
        foreground: "white",
        buttonBackground: "grey"
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
    }
});

ThemeContext.displayName = 'theme';