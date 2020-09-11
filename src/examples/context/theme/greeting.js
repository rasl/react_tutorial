import React from "react";

export default class Greeting extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                User:[{props.user.name}]
                preferred theme:[{props.user.preferredTheme.title}]
                current theme:[{props.theme.title}]
            </div>
        );
    }
}