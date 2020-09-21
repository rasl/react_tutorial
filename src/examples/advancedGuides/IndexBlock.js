import React from "react";
import {default as ContextExamples} from "./context/IndexBlock";
import AutoFocusCustomInput from "./refs/AutoFocusCustomInput";
import FancyBoxes from "./refs/FancyBoxes";
import HocExample from "./hoc/HocExample";
import UpdateExample from "./shouldUpdate/UpdateExample";

export default function IndexBlock() {
    return <>
        <details open={"open"}>
            <summary>Advanced guides</summary>
            <div className="innerBlock">
                <details>
                    <summary>Context</summary>
                    <ContextExamples/>
                    <hr/>
                </details>
                <details>
                    <summary>References</summary>
                    <AutoFocusCustomInput/>
                    <hr/>
                </details>
                <details>
                    <summary>Forward refs (Fancy box)</summary>
                    <FancyBoxes isOpen={false}/>
                    <hr/>
                </details>
                <details>
                    <summary>High-order components</summary>
                    <HocExample/>
                    <hr/>
                </details>
                <details open={"open"}>
                    <summary>Optimizing: skip render</summary>
                    <UpdateExample />
                    <hr/>
                </details>
            </div>
        </details>
    </>;
}