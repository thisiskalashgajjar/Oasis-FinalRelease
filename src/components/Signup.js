import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (credentials.password !== credentials.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Check password complexity
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(credentials.password)) {
            alert("Password does not meet complexity requirements");
            return;
        }

        const response = await fetch("http://localhost:5001/api/auth/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            localStorage.setItem("email", json.email);
            //   props.showAlert("Successfully Signup", "success");
            history("/login");
        } else {
            //   props.showAlert("Signup failed", "danger");
            console.log("Signup failed");
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
                        {/* Name Input */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" name="name" id="name" className="form-control" value={credentials.name} onChange={onChange} />
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-group">
                                <input type="password" name="password" id="password" className="form-control" value={credentials.password} onChange={onChange} />
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={credentials.confirmPassword} onChange={onChange} />
                        </div>

                        {/* Submit Button */}
                        <center><button type="submit" className="btn btn-primary">Submit</button></center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
