import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
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
        console.log('componentWillUnmount');
        clearInterval(this.handleId);
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class ReactDeactivator extends React.Component {
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById(this.props.rootId));
    }

    render() {
        return (
            <button onClick={() => this.unmount()}>Вырубить react на тэге {this.props.rootId}</button>
        );
    }
}

export default function Sandbox(props) {
    return (
        <div>
            <Clock/>
            <ReactDeactivator rootId={props.rootId}/>
        </div>
    );
}
