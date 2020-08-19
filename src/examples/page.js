import React from "react";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className='warning'>Warning</div>
    );
}

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false,
        }
    }

    handleClick = () => {
        this.setState({
            showWarning: !this.state.showWarning,
        })
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}