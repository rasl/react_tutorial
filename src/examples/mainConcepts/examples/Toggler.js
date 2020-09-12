import React from "react";

export default class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
    }

    handleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'On' : 'Off'}</button>
        );
    }
}