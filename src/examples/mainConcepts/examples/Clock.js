import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    componentDidMount() {
        this.handleId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.handleId);
    }

    render() {
        return (
            <>
                <h1>Hello, world!</h1>
                <h2>Time: {this.state.date.toLocaleTimeString()}.</h2>
            </>
        );
    }
}