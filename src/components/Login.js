import React from "react";

const Login = () => {
        return (
        <div className="register">
            <h1>LogIn Page</h1>
            <input type="text" className="inputBox"
                 placeholder="Enter email" />
            <input type="password" className="inputBox"
                 placeholder="Enter password" />

            <button className="appButton" type="button" >LogIn</button>

        </div>
    )
}

export default Login