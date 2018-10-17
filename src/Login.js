import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"jumbotron"}>
                    <div className="Login">
                        <header className="Login">
                            <img src="./assets/images/lock.svg"></img>
                            <p> Login </p>
                            <form action="#" method="POST">
                                <input type="text" name="user" />
                            </form>
                        </header>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
