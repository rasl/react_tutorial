import React from "react";

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: undefined !== props.isDefault ? props.isDefault : false,
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