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
        <details>
            <summary>Main concepts</summary>
            <div className="innerBlock">
                <details>
                    <summary>State and Lifecycle</summary>
                    <Clock/>
                    <ReactDeactivator rootId={"root"}/>
                    <hr/>
                </details>
                <details>
                    <summary>Handling Events</summary>
                    <Toggler/>
                    <Page/>
                    <hr/>
                </details>
                <details>
                    <summary>Conditional Rendering</summary>
                    <LoginControl/>
                    <hr/>
                </details>
                <details>
                    <summary>List and Keys</summary>
                    <NumberList numbers={[1, 2, 3, 4]}/>
                    <hr/>
                </details>
                <details>
                    <summary>Forms (uncontrolled)</summary>
                    <NameForm/>
                    <SimpleTextEditor/>
                    <hr/>
                </details>
                <details>
                    <summary>Lifting State up</summary>
                    <TemperatureCalculator/>
                    <hr/>
                </details>
                <details>
                    <summary>Thinking in React</summary>
                    <ProtoShop/>
                    <hr/>
                </details>
            </div>
        </details>
    </>;
}