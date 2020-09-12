import React from "react";
import {default as ContextExamples} from "./context/IndexBlock";

export default function IndexBlock() {
    return <>
        <h1>Advanced guides</h1>
        <details open={"open"}>
            <div>
                <p>Context</p>
                <ContextExamples/>
                <hr/>
            </div>
        </details>
        </>;
}