import React from "react";
import Greeting from "./greeting";

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Войти
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Выйти
        </button>
    );
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    handleClick = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {isLoggedIn
                    ? <LoginButton onClick={this.handleClick}/>
                    : <LogoutButton onClick={this.handleClick}/>
                }
            </div>
        );
    }
}