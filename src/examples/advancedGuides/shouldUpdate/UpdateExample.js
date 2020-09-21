import React from "react";

class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['word']
        };
        this.handleClick = this.handleClick.bind(this);
        this.inputRef = React.createRef();
    }

    handleClick() {
        const words = this.state.words.slice(0);
        words.push(this.inputRef.current.value);
        this.setState({words: words});
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue="text" ref={this.inputRef}/>
                <button onClick={this.handleClick}> Add word</button>
                <ListOfWords words={this.state.words}/>
            </div>
        );
    }
}

export default class UpdateExample extends React.Component {
    render() {
        return (
            <WordAdder/>
        );
    }
}