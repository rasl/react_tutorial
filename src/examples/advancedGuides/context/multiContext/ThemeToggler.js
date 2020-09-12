import {ThemeContext} from "./ThemeContext";
import React from "react";
import ThemedButton from "./ThemedButton";

export default function ThemeToggler(props) {
    return (
        <ThemeContext.Consumer>
            {(context) => (
                <ThemedButton onClick={context.toggleTheme} {...props}/>
            )}
        </ThemeContext.Consumer>
    );
}