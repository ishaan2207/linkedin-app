// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './Login.css';

// contexts
import { useUser } from "../../Context/UserContext";

function Login() {
    const { handleLogin } = useUser();
    const navigate = useNavigate();

    return (
        <div className="loginContainer">
            <div className="loginPageLeft">
                <h1>Welcome to your professional community</h1>
                <button onClick={() => handleLogin(navigate)} className="loginButton">
                    Sign in
                </button>
                <p className="loginFooter">By clicking Continue to join or sign in, you agree to LinkedIn’s <span>User Agreement</span>, <span>Privacy Policy</span>, and <span>Cookie Policy</span>.</p>
            </div>
            <div className="loginPageRight">
                <img src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
            </div>
        </div>
    )
}

export default Login;