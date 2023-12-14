import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/auth/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"

            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            console.log(json);
            localStorage.setItem("token", json.authtoken);
            localStorage.setItem("email", json.email);
            //   props.showAlert("Successfully Login", "success");
            history("/");
        } else {
            //   props.showAlert("Invalid credentials", "danger")
            console.log("error");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };


    return (
        <div className="container-fluid vh-100" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/beach.gif)`, backgroundSize: 'cover' }}>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded" style={{ opacity: 0.75 }}>
                        {/* Logo */}
                        <div className="text-center mb-4">
                            <img src="logo_oasis_nav.png" alt="Logo" style={{ width: 'auto', height: '100px' }} />
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text"></div>
                        </div>

                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" id="password" className="form-control" value={credentials.password} onChange={onChange} />
                        </div>
                        {/* Submit Button */}
                        <center><button type="submit" className="btn btn-primary">Login</button></center>
                        <br />
                        <center>
                        <p>New to Oasis?
                            <a href="/signup" className="fw-bold text-decoration-none link-secondary ms-2">Sign Up</a>
                        </p>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;