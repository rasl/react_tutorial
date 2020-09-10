import React from "react";
import SimpleTheme from "./simpleTheme";
import ThemedBlock from "./theme/themed-block";

export default function ContextExamples() {
    return <>
        <p>Simple context</p>
        <SimpleTheme/>
        <p>More realistic context usage theme with toggle</p>
        <ThemedBlock/>
    </>;
}