import React from "react";

const ThemeContext = React.createContext('white');
ThemeContext.displayName = 'simpleTheme';

class Button extends React.Component {
    static contextType = ThemeContext;

    render() {
        return <button style={{backgroundColor: this.context}}>Button</button>;
    }
}

function Toolbar() {
    return <Button/>;
}

export default function SimpleTheme() {
    return <ThemeContext.Provider value="black">
        <Toolbar/>
    </ThemeContext.Provider>;
}