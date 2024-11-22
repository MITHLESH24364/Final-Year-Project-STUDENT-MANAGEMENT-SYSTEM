import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // For programmatic navigation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Reset error when the user types in username or password
    if (name === "username" || name === "password") {
      setError("");
    }

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Simple validation logic
    if (username === "admin" && password === "admin") {
      navigate("/admin-dashboard"); // Redirect to AdminDashboard
    } else {
      setError("Invalid username or password. Please try again."); // Set error message
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

                {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if any */}

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

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                <div className="social-login">
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
