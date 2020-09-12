import React from "react";
import TicTacToe from "./TicTacToe";

export default function IndexBlock() {
    return (
        <>
            <h1>Tutorial</h1>
            <details>
                <div>
                    <p>Intro to React</p>
                    <TicTacToe/>
                    <hr/>
                </div>
            </details>
        </>
    );
}