import React from "react";

export default class SimpleTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            text: ""
        }
    }

    handleChangeFileInput = (e) => {
        const file = this.fileInput.current.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(this);
            this.setState({
                text: event.currentTarget.result.toString()
            });
        }
        reader.readAsText(file);
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
    }

    render() {
        return (
            <div><p>Simple text editor</p>
                <form>
                    <input type="file" ref={this.fileInput} onChange={this.handleChangeFileInput}/>
                    <textarea value={this.state.text} cols="100" onChange={this.handleText}></textarea>
                </form>
            </div>
        );
    }
}