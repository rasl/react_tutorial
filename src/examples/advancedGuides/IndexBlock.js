import React from "react";
import {default as ContextExamples} from "./context/IndexBlock";
import AutoFocusCustomInput from "./refs/AutoFocusCustomInput";

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
                <details open={"open"}>
                    <summary>References</summary>
                    <AutoFocusCustomInput/>
                    <hr/>
                </details>
            </div>
        </details>
    </>;
}