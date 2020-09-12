import React from "react";
import {themes} from "./ThemeContext";

// noinspection SpellCheckingInspection
export const users = {
    guest: {name: 'guest', preferredTheme: themes.light},
    user: {name: 'Foma Kinev', preferredTheme: themes.dark}
}

export const UserContext = React.createContext({
    user: users.guest,
    switchUser: () => {
    }
});

UserContext.displayName = 'userContext';