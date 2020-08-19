import React from "react";

function UserGreeting(props) {
    return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
    return <h1>Войдите, пожалуйста.</h1>;
}

export default function Greeting(props) {
    const isLoggenIn = props.isLoggedIn;
    if (isLoggenIn) {
        return (<UserGreeting/>);
    }
    return (<GuestGreeting/>);
}