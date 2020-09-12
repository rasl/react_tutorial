import React from "react";
import CustomFocusInput from "./CustomFocusInput";

export default class AutoFocusCustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.selfRef = React.createRef();
    }

    componentDidMount() {
        this.selfRef.current.setFocusToInput();
    }

    render() {
        return (
            <CustomFocusInput ref={this.selfRef}/>
        );
    }
}