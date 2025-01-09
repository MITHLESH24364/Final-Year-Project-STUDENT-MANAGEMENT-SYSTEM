import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: true,
   

  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "username" || name === "password") {
      setError("");
    }
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
  
    console.log("Form Data:", { username, password });
    // Encode username and password in Base64 for Basic Auth
    const basicAuthToken = btoa(`${username}:${password}`);
  
    try {
      const response = await fetch("http://localhost:8080/sms/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error("Invalid username or password");
      }
  
      // Parse the response JSON if needed
      const data = await response.json();
      console.log("Login Response:", data);
  
      // Store token or credentials in localStorage
      localStorage.setItem("authToken", basicAuthToken);
      localStorage.setItem("isLogin", 1);
      localStorage.setItem("fullname", data.staff.fullname); // Save fullname
      // localStorage.setItem("department", data.staff.department); // Save department
      localStorage.setItem("role", data.role); // Save role
      localStorage.setItem("image", data.staff.image); // Save image
  
      // Update authentication state
      setIsAuthenticated(true); // Notify parent about authentication status
  
      // Conditional navigation based on role
      if (data.role === "TEACHER") {
        navigate("/teacher-dashboard"); // Redirect to teacher dashboard
      } else {
        navigate("/"); // Redirect to default Admin Dashboard or another route
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setError(error.message);
    }
  };
  
  
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Welcome to MKS School</h1>
                <h2>Sign in</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Username <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    <span className="profile-views">
                      <i className="fas fa-user-circle"></i>
                    </span>
                  </div>
                  <div className="form-group">
                    <label>
                      Password <span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control pass-input"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <span className="profile-views feather-eye toggle-password"></span>
                  </div>
                  <div className="forgotpass">
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        Remember me
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <a href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
