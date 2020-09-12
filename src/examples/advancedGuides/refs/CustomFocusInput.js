import React from "react";

export default class CustomFocusInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    setFocusToInput = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.setFocusToInput}>Set up focus to text</button>
            </>
        );
    }
}