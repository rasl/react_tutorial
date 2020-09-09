import React from "react";
import {ThemeContext} from "./theme-context";

export default class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        let props = this.props;
        let theme = this.context;
        return <button {...props} style={{backgroundColor: theme.background, color: theme.foreground}}></button>
    }
}