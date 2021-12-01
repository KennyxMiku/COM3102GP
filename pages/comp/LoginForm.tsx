import React, { useState } from "react";

function LoginForm({Login, error}){
    const [details, setDetails] = useState({name: "", email: "", password:""});

    return(
        <form>
            <div className="from-inner">
                <h2>Login</h2>
                {/* Error! */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" /> 
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}
export default LoginForm;