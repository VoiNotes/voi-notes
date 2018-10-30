import React, { Component } from 'react';
import './Login.css';
import lock from './lock.svg';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"jumbotron"}>
                    <div className="Login">
                        <header className="Login">
                            <img src={lock} id="lock" alt="lock"></img>
                            <center>
                                <p> Login </p>
                                <form action="#" method="POST">
                                    <input type="text" name="user" placeholder="Username" /><br></br><br></br>
                                    Meeting Time: <input type="time" name="mtime" min="9:00" max="20:00" /><br></br><br></br>
                                    {/* <input type="submit" name="submit" value="Start" className="btn btn-success" /> */}
                                    <Link to="/meeting/" className={"btn btn-success"}>Start</Link>
                                </form>
                            </center>
                        </header>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
