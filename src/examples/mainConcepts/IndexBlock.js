import React from "react";
import Clock from "./examples/Clock";
import ReactDeactivator from "./examples/ReactDeactivator";
import Toggler from "./examples/Toggler";
import Page from "./examples/Page";
import LoginControl from "./examples/LoginControl";
import NumberList from "./examples/NumberList";
import NameForm from "./examples/NameForm";
import SimpleTextEditor from "./examples/SimpleTextEditor";
import TemperatureCalculator from "./examples/boilingverdict";
import ProtoShop from "./examples/ProtoShop";

export default function IndexBlock() {
    return <>
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
                <Toggler/>
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
        </>;
}