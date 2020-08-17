import React from "react";

export default class Nameform extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    handleSubmit = (e) => {
        alert(this.input.current.value);
        e.preventDefault();
    }

    render() {
        return (
            <div><p>Uncontrol form</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input type="text" ref={this.input} defaultValue='placeholder'/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}