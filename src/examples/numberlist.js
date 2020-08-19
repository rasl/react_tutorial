import React from "react";

function ListItem(props) {
    return <li>{props.value}</li>
}

export default function NumberList(props) {
    return (
        <ul>
            {props.numbers.map(number =>
                <ListItem key={number.toString()} value={number}/>
            )}
        </ul>
    );
}