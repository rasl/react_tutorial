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
            <ProtoShop/>
            {/*<TemperatureCalculator/>*/}
            {/*<Page/>*/}
            {/*<TicTacToe/>*/}
            {/*<Sandbox rootId={"root"}/>*/}
            {/*<Toggle/>*/}
            {/*<LoginControl/>*/}
            {/*<NumberList numbers={[1,2,3,4]}/>*/}
            {/*<Nameform />*/}
            {/*<SimpleTextEditor/>*/}
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
