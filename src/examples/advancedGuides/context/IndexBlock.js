import React from "react";
import {default as MultiContext} from "./multiContext/IndexBlock";
import SimpleTheme from "./SimpleTheme";

export default function IndexBlock() {
    return <>
        <p>Simple context</p>
        <SimpleTheme/>
        <p>More realistic context usage theme with toggle</p>
        <MultiContext/>
    </>;
}