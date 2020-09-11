import React from "react";

function UserGreeting() {
    return <h1>Hello!</h1>;
}

function GuestGreeting() {
    return <h1>Login, please.</h1>;
}

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (<UserGreeting/>);
    }
    return (<GuestGreeting/>);
}