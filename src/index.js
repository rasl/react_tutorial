import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle from './examples/toggle.js';
import LoginControl from "./examples/logincontrol";
import Page from "./examples/page";
import NumberList from "./examples/numberlist";
import NameForm from "./examples/nameForm";
import SimpleTextEditor from "./examples/simpletexteditor";
import TemperatureCalculator from "./examples/boilingverdict";
import TicTacToe from "./examples/tictactoe";
import ProtoShop from "./examples/protoshop";
import Clock from "./examples/clock";
import ReactDeactivator from "./examples/reactdeactivator";
import ContextExamples from "./examples/context/contextexamples";

function App() {
    return (
        <>
            <h1>Tutorial</h1>
            <details>
                <div>
                    <p>Intro to React</p>
                    <TicTacToe/>
                    <hr/>
                </div>
            </details>
            <h1>Main concepts</h1>
            <details>
                <div>
                    <p>State and Lifecycle</p>
                    <Clock/>
                    <ReactDeactivator rootId={"root"}/>
                    <hr/>
                </div>
                <div>
                    <p>Handling Events</p>
                    <Toggle/>
                    <Page/>
                    <hr/>
                </div>
                <div>
                    <p>Conditional Rendering</p>
                    <LoginControl/>
                    <hr/>
                </div>
                <div>
                    <p>List and Keys</p>
                    <NumberList numbers={[1, 2, 3, 4]}/>
                    <hr/>
                </div>
                <div>
                    <p>Forms (uncontrolled)</p>
                    <NameForm/>
                    <SimpleTextEditor/>
                    <hr/>
                </div>
                <div>
                    <p>Lifting State up</p>
                    <TemperatureCalculator/>
                    <hr/>
                </div>
                <div>
                    <p>Thinking in React</p>
                    <ProtoShop/>
                    <hr/>
                </div>
            </details>
            <h1>Advanced guides</h1>
            <details open={"open"}>
                <div>
                    <p>Context</p>
                    <ContextExamples/>
                    <hr/>
                </div>
            </details>
        </>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
