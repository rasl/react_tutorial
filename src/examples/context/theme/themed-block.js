import React from "react";
import {ThemeContext, themes} from "./theme-context";
import {Content} from "./content";
import ThemeToggler from "./theme-toggler";
import {UserContext, users} from "./user-context";

export default class ThemedBlock extends React.Component {
    constructor(props) {
        super(props);
        const defaultUser = users.guest;
        this.state = {
            theme: defaultUser.preferredTheme,
            toggleTheme: this.toggleTheme,
            user: defaultUser,
            switchUser: this.toggleUser
        }
    }

    toggleTheme = () => {
        this.setState((state) => {
            return {
                theme: state.theme === themes.dark ? themes.light : themes.dark
            };
        });
    }

    toggleUser = () => {
        this.setState((state) => {
            const user = state.user === users.guest ? users.user : users.guest;
            return {
                user: user,
                theme: user.preferredTheme
            };
        });
    }

    render() {
        return (
            <div style={{border: "1px solid black", padding: 4}}>
                <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.state.toggleTheme}}>
                    <UserContext.Provider value={{user: this.state.user, switchUser: this.state.switchUser}}>
                        <Content/>
                    </UserContext.Provider>
                    <p>Some text over main content without theme</p>
                    <ThemeToggler>Out of block toggler</ThemeToggler>
                </ThemeContext.Provider>
            </div>
        );
    }
}