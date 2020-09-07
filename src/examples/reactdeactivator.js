import React from "react";
import ReactDOM from "react-dom";

export class ReactDeactivator extends React.Component {
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById(this.props.rootId));
    }

    render() {
        return (
            <button onClick={() => this.unmount()}>Disable React on tag: {this.props.rootId}</button>
        );
    }
}