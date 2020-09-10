import {ThemeContext} from "./contex";
import React from "react";

export default function ThemeToggler() {
    return (
        <ThemeContext.Consumer>
            {(context) => (
                <button style={{
                    backgroundColor: context.theme.buttonBackground,
                    color: context.theme.foreground
                }} onClick={context.toggleTheme}>
                    Toggle theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}