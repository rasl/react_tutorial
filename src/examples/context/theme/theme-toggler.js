import {ThemeContext} from "./theme-context";
import React from "react";
import ThemedButton from "./themed-button";

export default function ThemeToggler(props) {
    return (
        <ThemeContext.Consumer>
            {(context) => (
                <ThemedButton onClick={context.toggleTheme} {...props}/>
            )}
        </ThemeContext.Consumer>
    );
}