import React from "react";
import {ThemeContext} from "./ThemeContext";

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