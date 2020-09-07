import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle from './examples/toggle.js';
import LoginControl from "./examples/logincontrol";
import Page from "./examples/page";
import NumberList from "./examples/numberlist";
import Nameform from "./examples/nameform";
import SimpleTextEditor from "./examples/simpletexteditor";
import TemperatureCalculator from "./examples/boilingverdict";
import {TicTacToe} from "./examples/tictactoe";
import {ProtoShop} from "./examples/protoshop";
import {Clock} from "./examples/clock";
import {ReactDeactivator} from "./examples/reactdeactivator";

function App() {
    return (
        <div>
            <div>
                <p>Tutorial: Intro to React</p>
                <TicTacToe/>
                <hr />
            </div>
            <div>
                <p>State and Lifecycle</p>
                <Clock/>
                <ReactDeactivator rootId={"root"}/>
                <hr />
            </div>
            <div>
                <p>Handling Events</p>
                <Toggle/>
                <Page/>
                <hr />
            </div>
            <div>
                <p>Conditional Rendering</p>
                <LoginControl/>
                <hr />
            </div>
            <div>
                <p>List and Keys</p>
                <NumberList numbers={[1, 2, 3, 4]}/>
                <hr />
            </div>
            <div>
                <p>Forms (uncontrolled)</p>
                <Nameform/>
                <SimpleTextEditor/>
                <hr />
            </div>
            <div>
                <p>Lifting State up</p>
                <TemperatureCalculator/>
                <hr />
            </div>
            <div>
                <p>Thinking in React</p>
                <ProtoShop/>
                <hr />
            </div>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
