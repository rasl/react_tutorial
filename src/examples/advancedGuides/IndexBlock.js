import React from "react";
import {default as ContextExamples} from "./context/IndexBlock";
import AutoFocusCustomInput from "./refs/AutoFocusCustomInput";
import FancyBoxes from "./refs/FancyBoxes";

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
                <details open={"open"}>
                    <summary>Forward refs (Fancy box)</summary>
                    <FancyBoxes isOpen={false}/>
                    <hr/>
                </details>
            </div>
        </details>
    </>;
}