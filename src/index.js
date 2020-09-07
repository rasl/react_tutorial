import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sandbox from './sandbox.js';
import Toggle from './examples/toggle.js';
import LoginControl from "./examples/logincontrol";
import Page from "./examples/page";
import NumberList from "./examples/numberlist";
import Nameform from "./examples/nameform";
import SimpleTextEditor from "./examples/simpletexteditor";
import TemperatureCalculator from "./examples/boilingverdict";
import {TicTacToe} from "./examples/tictactoe";
import {ProtoShop} from "./examples/protoshop";

function App() {
    return (
        <div>
            <div>
                <p>Tutorial: Intro to React</p>
                <TicTacToe/>
            </div>
            <div>
                <p>5. State and Lifecycle</p>
                <Sandbox rootId={"root"}/>
            </div>
            <div>
                <p>6. Handling Events</p>
                <Toggle/>
                <Page/>
            </div>
            <div>
                <p>7. Conditional Rendering</p>
                <LoginControl/>
            </div>
            <div>
                <p>8. List and Keys</p>
                <NumberList numbers={[1, 2, 3, 4]}/>
            </div>
            <div>
                <p>9. Forms (uncontrolled)</p>
                <Nameform/>
                <SimpleTextEditor/>
            </div>
            <div>
                <p>10. Lifting State up</p>
                <TemperatureCalculator/>
            </div>
            <div>
                <p>12. Thinking in React</p>
                <ProtoShop/>
            </div>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
