import React from "react";
import {ThemeContext} from "./theme-context";

export default function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {(context) => (
                <button style={{
                    backgroundColor: context.theme.buttonBackground,
                    color: context.theme.foreground
                }} {...props}/>
            )}
        </ThemeContext.Consumer>
    );
}