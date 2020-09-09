import React from "react";
import ThemedButton from "./themed-button";
import {ThemeContext, themes} from "./theme-context";

function Toolbar(props) {
    return <ThemedButton onClick={props.changeTheme}>
        Change theme
    </ThemedButton>;
}

export default class ThemedExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        };
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        return <>
            <ThemeContext.Provider value={this.state.theme}>
                <Toolbar changeTheme={this.toggleTheme}/>
            </ThemeContext.Provider>
            <div>
                <ThemedButton>button</ThemedButton>
            </div>
        </>;
    }
}