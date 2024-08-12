import React, { useState } from "react";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosinstance";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if(!validateEmail(email)) {
            setError("please enter valid Email address");
            return;
        }

        if(!password) {
            setError("please enter the password");
            return;
        }

        setError("");
    
        //login API Call
        try {
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password,
            });

            if(response.data && response.data.accessToken) {
                localStorage.setItem("token",response.data.accessToken)
                navigate('/rover')
            }
        } catch(error) {
            if(error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Unexpected error occurred. Please try again.")
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <br/>
                <label>Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                <br/>
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                <br/>

                {error && <p>{error}</p>}

                <button type="submit">Login</button>

                <p>
                    Don't Have an Account ? {" "}
                    <button onClick={() => navigate("/register")}>
                        Register
                    </button>
                </p>
                
            </form>
        </div>
    );
};

export default Login;
