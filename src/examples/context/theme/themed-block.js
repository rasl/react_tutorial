import React from "react";
import {ThemeContext, themes} from "./contex";
import {Content} from "./content";
import ThemeToggler from "./theme-toggler";

export default class ThemedBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        }
    }

    toggleTheme = () => {
        this.setState((state) => {
            return {
                theme: state.theme === themes.dark ? themes.light : themes.dark
            };
        });
    }

    render() {
        return (
            <div style={{border: "1px solid black", padding: 4}}>
                <ThemeContext.Provider value={this.state}>
                    <Content/>
                    <p>Some text over main content without theme</p>
                    <ThemeToggler/>
                </ThemeContext.Provider>
            </div>
        );
    }
}