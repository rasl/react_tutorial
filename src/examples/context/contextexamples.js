import React from "react";
import SimpleTheme from "./simpleTheme";
import ThemedExample from "./themed-example";

export default function ContextExamples() {
    return <>
        <p>Simple context</p>
        <SimpleTheme/>
        <p>More realistic context usage</p>
        <ThemedExample/>
    </>;
}