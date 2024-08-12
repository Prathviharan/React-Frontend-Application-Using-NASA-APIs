import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/_register.scss";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosinstance";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
       
        if(!name) {
            setError("Please Enter your Name");
            return;
        }

        if(!validateEmail(email)) {
            setError("Please Enter a vaild Email Address");
            return;
        }

        if(!password) {
            setError("Please Enter your Password");
            return;
        }

        setError('')

    //register API Call
    try {
        const response = await axiosInstance.post("/create-account", {
            name: name,
            email: email,
            password: password,
        });

        if(response.data && response.data.accessToken) {
            setError(response.data.error);
            return;   
        }

        if(response.data && response.data.accessToken){
            localStorage.setItem("token",response.data.accessToken);
            navigate('/login')
        }
    } catch(error) {
        if(error.response && error.response.data && error.response.data.message) {
            setError(error.response.data.message);
        } else {
            setError("Unexpected error occurred. Please try again.")
        }
    }
};

    return(
        <div className="login-container">
            <h1>Register</h1>
            <br/>
            <form onSubmit={handleSignUp}>
                <label>User name</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required/>
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
                    maxLength={8} 
                    placeholder="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                <br/>
                
                <button type="submit">Sign-Up</button>

                <p>
                    Already Have Account?{" "}
                    <button onClick={() => navigate("/login")}>
                        Login
                    </button>
                </p>
            </form>
        </div>
    )
}

export default Register;
