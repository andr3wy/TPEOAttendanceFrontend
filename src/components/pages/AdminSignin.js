import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import getFirebase from "../util/firebase";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import LoginLink from "../util/login";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function handleSubmit(event) {

    }


    return (
        <div className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            {/*<form action="" className="box" onSubmit={handleSubmit}>*/}
                            {/*    <div className="field">*/}
                            {/*        <label className="label">*/}
                            {/*            Username*/}
                            {/*        </label>*/}
                            {/*        <div className="control has-icons-left">*/}
                            {/*            <input type="email" className="input" placeholder="username" onChange={(event) => {*/}
                            {/*                setUsername(event.target.value)*/}
                            {/*            }}/>*/}
                            {/*        <span className="icon is-small is-left">*/}
                            {/*            <i className="fa fa-envelope"></i>*/}
                            {/*        </span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="field">*/}
                            {/*        <label className="label">Password</label>*/}
                            {/*        <div className="control has-icons-left">*/}
                            {/*            <input type="password" className="input" placeholder="password" onChange={(event) => {*/}
                            {/*                setPassword(event.target.value);*/}

                            {/*            }}/>*/}
                            {/*        <span className="icon is-small is-left">*/}
                            {/*            <i className="fa fa-lock"></i>*/}
                            {/*        </span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="field">*/}
                            {/*        <button className="button is-success">Login</button>*/}
                            {/*    </div>*/}
                            {/*</form>*/}

                            <LoginLink />
                            <Link to="/">
                                <button className="button">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}