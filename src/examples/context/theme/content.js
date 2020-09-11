import {ThemeContext} from "./theme-context";
import React from "react";
import ThemeToggler from "./theme-toggler";

export function Content() {
    return (
        <ThemeContext.Consumer>
            {(context) => (
                <div style={{
                    backgroundColor: context.theme.background,
                    color: context.theme.foreground
                }}>
                    <ThemeToggler/>
                    <p>This is example</p>
                    <p>shows theme toggle with context</p>
                    <ThemeToggler/>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}