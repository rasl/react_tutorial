import {ThemeContext} from "./ThemeContext";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import Greeting from "./Greeting";
import {UserContext} from "./UserContext";
import ThemedButton from "./ThemedButton";

export function Content() {
    return (
        <ThemeContext.Consumer>
            {(themeContext) => (
                <div style={{
                    backgroundColor: themeContext.theme.background,
                    color: themeContext.theme.foreground
                }}>
                    <ThemeToggler>Top toggler</ThemeToggler>
                    <p>This is example</p>
                    <p>shows theme toggle with multi context</p>
                    <p>user has possibility have preferred theme</p>
                    <UserContext.Consumer>
                        {(userContext) => (
                            <div>
                                <Greeting
                                    user={userContext.user}
                                    switchUser={userContext.switchUser}
                                    theme={themeContext.theme}
                                    toggleTheme={themeContext.toggleTheme}
                                />
                                <ThemedButton onClick={userContext.switchUser}>Switch user</ThemedButton>
                            </div>
                        )}
                    </UserContext.Consumer>
                    <ThemeToggler>Bottom toggler</ThemeToggler>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}