import React from "react";
import TicTacToe from "./TicTacToe";

export default function IndexBlock() {
    return (
        <>
            <details>
                <summary>Tutorial</summary>
                <div className="innerBlock">
                    <p>Intro to React</p>
                    <TicTacToe/>
                    <hr/>
                </div>
            </details>
        </>
    );
}