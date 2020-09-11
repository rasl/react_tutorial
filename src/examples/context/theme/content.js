import {ThemeContext} from "./theme-context";
import React from "react";
import ThemeToggler from "./theme-toggler";
import Greeting from "./greeting";
import {UserContext} from "./user-context";
import ThemedButton from "./themed-button";

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