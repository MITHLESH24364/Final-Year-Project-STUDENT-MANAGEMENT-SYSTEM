// import React, { useEffect, useState } from "react";

// const Header = () => {
//   const [fullname, setFullname] = useState("");
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     // Retrieve the fullname and role from localStorage
//     const storedFullname = localStorage.getItem("fullname");
//     if (storedFullname) {
//       setFullname(storedFullname);
//     }

//     const storedRole = localStorage.getItem("role");
//     if (storedRole) {
//       setRole(storedRole);
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("isLogin");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("fullname"); // Clear fullname on logout
//     localStorage.removeItem("role");
//     window.location.href = "/";
//   };

//   return (
//     <div className="header">
//       <div className="header-left">
//         <a href="/" className="logo">
//           <img src="assets/img/logo1.png" alt="Logo" />
//         </a>
//         <a href="index.html" className="logo logo-small">
//           <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30" />
//         </a>
//       </div>
//       <div className="menu-toggle">
//         <a href="javascript:void(0);" id="toggle_btn">
//           <i className="fas fa-bars"></i>
//         </a>
//       </div>
//       <div className="top-nav-search">
//         <form>
//           <input type="text" className="form-control" placeholder="Search here" />
//           <button className="btn" type="submit">
//             <i className="fas fa-search"></i>
//           </button>
//         </form>
//       </div>
//       <a className="mobile_btn" id="mobile_btn">
//         <i className="fas fa-bars"></i>
//       </a>
//       <ul className="nav user-menu">
//         <li className="nav-item dropdown has-arrow new-user-menus">
//           <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
//             <span className="user-img">
//               <img
//                 className="rounded-circle"
//                 src="assets/img/profiles/avatar-01.png"
//                 width="31"
//                 alt={fullname || "User"}
//               />
//               <div className="user-text">
//                 <h6>{fullname || "User"}</h6>
//                 <p className="text-muted mb-0">{role || "Role"}</p>
//               </div>
//               <button onClick={logout} className="btn btn-danger" href="">
//                 <i className="fas fa-sign-out-alt"></i>
//               </button>
//             </span>
//           </a>
//           <div className="dropdown-menu">
//             <div className="user-header">
//               <div className="avatar avatar-sm">
//                 <img
//                   src="assets/img/profiles/avatar-01.png"
//                   alt="User Image"
//                   className="avatar-img rounded-circle"
//                 />
//               </div>
//               <div className="user-text">
//                 <h6>{fullname || "User"}</h6>
//                 <p className="text-muted mb-0">{role || "Role"}</p>
//               </div>
//             </div>
//             <a className="dropdown-item" href="profile.html">My Profile</a>
//             <a className="dropdown-item" href="inbox.html">Inbox</a>
//             <a className="dropdown-item" onClick={logout}>
//               Logout
//             </a>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;




// import React, { useEffect, useState } from "react";

// const Header = () => {
//   const [fullname, setFullname] = useState("");
//   const [role, setRole] = useState("");
//   const [profileImage, setProfileImage] = useState("assets/img/profiles/{image}"); // Default image

//   useEffect(() => {
//     // Retrieve fullname, role, and image from localStorage
//     const storedFullname = localStorage.getItem("fullname");
//     if (storedFullname) {
//       setFullname(storedFullname);
//     }

//     const storedRole = localStorage.getItem("role");
//     if (storedRole) {
//       setRole(storedRole);
//     }

//     const storedImage = localStorage.getItem("image");
//     if (storedImage) {
//       setProfileImage(storedImage);
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("isLogin");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("fullname");
//     localStorage.removeItem("role");
//     localStorage.removeItem("image"); // Clear image on logout
//     window.location.href = "/";
//   };

//   return (
//     <div className="header">
//       <div className="header-left">
//         <a href="/" className="logo">
//           <img src="assets/img/logo1.png" alt="Logo" />
//         </a>
//         <a href="index.html" className="logo logo-small">
//           <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30" />
//         </a>
//       </div>
//       <div className="menu-toggle">
//         <a href="javascript:void(0);" id="toggle_btn">
//           <i className="fas fa-bars"></i>
//         </a>
//       </div>
//       <div className="top-nav-search">
//         <form>
//           <input type="text" className="form-control" placeholder="Search here" />
//           <button className="btn" type="submit">
//             <i className="fas fa-search"></i>
//           </button>
//         </form>
//       </div>
//       <a className="mobile_btn" id="mobile_btn">
//         <i className="fas fa-bars"></i>
//       </a>
//       <ul className="nav user-menu">
//         <li className="nav-item dropdown has-arrow new-user-menus">
//           <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
//             <span className="user-img">
//               <img
//                 className="rounded-circle"
//                 src={profileImage}
//                 width="31"
//                 alt={fullname || "User"}
//               />
//               <div className="user-text">
//                 <h6>{fullname || "User"}</h6>
//                 <p className="text-muted mb-0">{role || "Role"}</p>
//               </div>
//               <button onClick={logout} className="btn btn-danger" href="">
//                 <i className="fas fa-sign-out-alt"></i>
//               </button>
//             </span>
//           </a>
//           <div className="dropdown-menu">
//             <div className="user-header">
//               <div className="avatar avatar-sm">
//                 <img
//                   src={profileImage}
//                   alt="User Image"
//                   className="avatar-img rounded-circle"
//                 />
//               </div>
//               <div className="user-text">
//                 <h6>{fullname || "User"}</h6>
//                 <p className="text-muted mb-0">{role || "Role"}</p>
//               </div>
//             </div>
//             <a className="dropdown-item" href="profile.html">My Profile</a>
//             <a className="dropdown-item" href="inbox.html">Inbox</a>
//             <a className="dropdown-item" onClick={logout}>
//               Logout
//             </a>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;




import React, { useEffect, useState } from "react";

const Header = () => {
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(""); // Default image

  useEffect(() => {
    // Retrieve user details from localStorage
    const storedFullname = localStorage.getItem("fullname");
    if (storedFullname) {
      setFullname(storedFullname);
    }

    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }

    const storedImage = localStorage.getItem("image");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("authToken");
    localStorage.removeItem("fullname");
    localStorage.removeItem("role");
    localStorage.removeItem("image"); // Clear image on logout
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="header-left">
        <a href="/" className="logo">
          <img src="assets/img/logo1.png" alt="Logo" />
        </a>
        <a href="index.html" className="logo logo-small">
          <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30" />
        </a>
      </div>
      <div className="menu-toggle">
        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fas fa-bars"></i>
        </a>
      </div>
      <div className="top-nav-search">
        <form>
          <input type="text" className="form-control" placeholder="Search here" />
          <button className="btn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <a className="mobile_btn" id="mobile_btn">
        <i className="fas fa-bars"></i>
      </a>
      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow new-user-menus">
          <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <span className="user-img">
              <img
                className="rounded-circle"
                src={image || "user"}
                width="31"
                alt={fullname || "User"}
              />
              <div className="user-text">
                <h6>{fullname || "User"}</h6>
                <p className="text-muted mb-0">{role || "Role"}</p>
              </div>
              <button onClick={logout} className="btn btn-danger" href="">
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </span>
          </a>
          {/* <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img
                  src={`assets/img/profiles/${image}`}
                  alt="User Image"
                  className="avatar-img rounded-circle"
                />
              </div>
              <div className="user-text">
                <h6>{fullname || "User"}</h6>
                <p className="text-muted mb-0">{role || "Role"}</p>
              </div>
            </div>
            <a className="dropdown-item" href="profile.html">My Profile</a>
            <a className="dropdown-item" href="inbox.html">Inbox</a>
            <a className="dropdown-item" onClick={logout}>
              Logout
            </a>
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default Header;
