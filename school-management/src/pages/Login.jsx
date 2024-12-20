// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     rememberMe: false,
//   });

//   const [error, setError] = useState(""); // State for error messages
//   const navigate = useNavigate(); // For programmatic navigation

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // Reset error when the user types in username or password
//     if (name === "username" || name === "password") {
//       setError("");
//     }

//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = formData;

//     // Simple validation logic
//     if (username === "admin" && password === "admin") {
//       navigate("/admin-dashboard"); // Redirect to AdminDashboard
//     } else {
//       setError("Invalid username or password. Please try again."); // Set error message
//     }
//   };

//   return (
//     <div className="main-wrapper login-body">
//       <div className="login-wrapper">
//         <div className="container">
//           <div className="loginbox">
//             <div className="login-left">
//               <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
//             </div>
//             <div className="login-right">
//               <div className="login-right-wrap">
//                 <h1>Welcome to MKS School</h1>
//                 <h2>Sign in</h2>

//                 {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if any */}

//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label>
//                       Username <span className="login-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="username"
//                       value={formData.username}
//                       onChange={handleChange}
//                     />
//                     <span className="profile-views">
//                       <i className="fas fa-user-circle"></i>
//                     </span>
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       Password <span className="login-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control pass-input"
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <span className="profile-views feather-eye toggle-password"></span>
//                   </div>
//                   <div className="forgotpass">
//                     <div className="remember-me">
//                       <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
//                         Remember me
//                         <input
//                           type="checkbox"
//                           name="rememberMe"
//                           checked={formData.rememberMe}
//                           onChange={handleChange}
//                         />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                     <a href="forgot-password.html">Forgot Password?</a>
//                   </div>
//                   <div className="form-group">
//                     <button className="btn btn-primary btn-block" type="submit">
//                       Login
//                     </button>
//                   </div>
//                 </form>

//                 <div className="login-or">
//                   <span className="or-line"></span>
//                   <span className="span-or">or</span>
//                 </div>

//                 <div className="social-login">
//                   <a href="#">
//                     <i className="fab fa-google-plus-g"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";




// const Login = ({ setIsAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     rememberMe: false,
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (name === "username" || name === "password") {
//       setError("");
//     }

//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = formData;

//     if (username === "admin" && password === "admin") {
//       setIsAuthenticated(true); // Set user as authenticated
//       navigate("/admin-dashboard"); // Redirect to dashboard
//     } else {
//       setError("Invalid username or password. Please try again.");
//     }
//   };

//   return (
//     <div className="main-wrapper login-body">
//       <div className="login-wrapper">
//         <div className="container">
//           <div className="loginbox">
//             <div className="login-left">
//               <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
//             </div>
//             <div className="login-right">
//               <div className="login-right-wrap">
//                 <h1>Welcome to MKS School</h1>
//                 <h2>Sign in</h2>
//                 {error && <p style={{ color: "red" }}>{error}</p>}
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label>
//                       Username <span className="login-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="username"
//                       value={formData.username}
//                       onChange={handleChange}
//                     />
//                     <span className="profile-views">
//                       <i className="fas fa-user-circle"></i>
//                     </span>
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       Password <span className="login-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control pass-input"
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <span className="profile-views feather-eye toggle-password"></span>
//                   </div>
//                   <div className="forgotpass">
//                     <div className="remember-me">
//                       <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
//                         Remember me
//                         <input
//                           type="checkbox"
//                           name="rememberMe"
//                           checked={formData.rememberMe}
//                           onChange={handleChange}
//                         />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                     <a href="forgot-password.html">Forgot Password?</a>
//                   </div>
//                   <div className="form-group">
//                     <button className="btn btn-primary btn-block" type="submit">
//                       Login
//                     </button>
//                   </div>
//                 </form>
//                 <div className="login-or">
//                   <span className="or-line"></span>
//                   <span className="span-or">or</span>
//                 </div>
//                 <div className="social-login">
//                   <a href="#">
//                     <i className="fab fa-google-plus-g"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// const Login = ({ setIsAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === "username" || name === "password") {
//       setError("");
//     }
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = formData;

//     if (username === "admin" && password === "admin") {
//       setIsAuthenticated(true);
//       localStorage.setItem("isLogin", "1"); // Store session in localStorage
//       navigate("/"); // Redirect to Admin Dashboard
//     } else {
//       setError("Invalid username or password. Please try again.");
//     }
//   };

//   return (
//     <div className="main-wrapper login-body">
//       <div className="login-wrapper">
//         <div className="container">
//           <div className="loginbox">
//             <div className="login-left">
//               <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
//             </div>
//             <div className="login-right">
//               <div className="login-right-wrap">
//                 <h1>Welcome to MKS School</h1>
//                 <h2>Sign in</h2>
//                 {error && <p style={{ color: "red" }}>{error}</p>}
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label>
//                       Username <span className="login-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="username"
//                       value={formData.username}
//                       onChange={handleChange}
//                     />
//                     <span className="profile-views">
//                       <i className="fas fa-user-circle"></i>
//                     </span>
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       Password <span className="login-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control pass-input"
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <span className="profile-views feather-eye toggle-password"></span>
//                   </div>
//                   <div className="forgotpass">
//                     <div className="remember-me">
//                       <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
//                         Remember me
//                         <input
//                           type="checkbox"
//                           name="rememberMe"
//                           checked={formData.rememberMe}
//                           onChange={handleChange}
//                         />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                     <a href="forgot-password.html">Forgot Password?</a>
//                   </div>
//                   <div className="form-group">
//                     <button className="btn btn-primary btn-block" type="submit">
//                       Login
//                     </button>
//                   </div>
//                 </form>
//                 <h3>Demo id:</h3>
//                 <p>Username: admin</p>
//                 <p>Password: admin</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { username, password } = formData;

  //   // Encode username and password in Base64 for Basic Auth
  //   const basicAuthToken = btoa(`${username}:${password}`);

  //   try {
  //     const response = await fetch("http://localhost:8080/sms/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }), // Optional: Backend may not need this
  //     });

  //     if (!response.ok) {
  //       throw new Error("Invalid username or password");
  //     }

  //     const data = await response.json();
  //     console.log("Login Response:", data);

  //     // Store token or credentials in localStorage
  //     localStorage.setItem("authToken", basicAuthToken);

  //     // Update authentication state and navigate
  //     setIsAuthenticated(true);
  //     navigate("/"); // Redirect to Admin Dashboard or appropriate page
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.message);
  //   }
  // };

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
      // Update authentication state and navigate
      setIsAuthenticated(true); // Notify parent about authentication status
      navigate("/"); // Redirect to Admin Dashboard or any specific route
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
                <h3>Demo id:</h3>
                <p>Username: admin</p>
                <p>Password: admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
