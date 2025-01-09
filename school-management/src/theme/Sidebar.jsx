// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const location = useLocation();

//   const handleMenuClick = (menuIndex) => {
//     setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div
//       className={`sidebar ${isSidebarOpen ? "" : "mini-sidebar"}`}
//       style={{ width: location.pathname === "/add-students" ? "60%" : "20%" }}
//       id="sidebar"
//     >
//       <div className="sidebar-inner slimscroll">
//         <div id="sidebar-menu" className="sidebar-menu">
//           <ul>
//             <li className="menu-title">
//               <span>Main Menu</span>
//             </li>
//             {[
//               {
//                 title: "Dashboard",
//                 icon: "feather-grid",
//                 submenu: [
//                   { path: "/", label: "Admin Dashboard" },
//                   { path: "/teacher-dashboard", label: "Teacher Dashboard" },
//                   { path: "/student-dashboard", label: "Student Dashboard" },
//                 ],
//               },
//               {
//                 title: "Students",
//                 icon: "fas fa-graduation-cap",
//                 submenu: [
//                   { path: "/view-students", label: "Student List" },
//                   { path: "#", label: "Student View" },
//                   { path: "/add-students", label: "Student Add" },
//                   { path: "/edit-student", label: "Student Edit" },
//                 ],
//               },
//               {
//                 title: "Attendance",
//                 icon: "fas fa-clipboard",
//                 submenu: [{ path: "/add-attendance", label: "Attendance" },
//                   { path: "/absent-students", label: "Absent Students" },
//                   {path: "/attendance-table", label: "Attendance Table" },
//                 ],
//               },
//               {
//                 title: "Exams",
//                 icon: "fas fa-book",
//                 submenu: [
//                   { path: "/add-marks", label: "Add Marks" },
//                   { path: "/marks-report", label: "Report" },
//                   {path: "/report-card", label: "Report Card" },
//                 ],
//               },
//               {
//                 title: "Teachers",
//                 icon: "fas fa-chalkboard-teacher",
//                 submenu: [
//                   { path: "/view-teachers", label: "Teacher List" },
//                   { path: "#", label: "Teacher View" },
//                   { path: "/add-teachers", label: "Teacher Add" },
//                   { path: "/edit-teacher", label: "Teacher Edit" },
//                 ],
//               },
//               {
//                 title: "Departments",
//                 icon: "fas fa-building",
//                 submenu: [
//                   { path: "/view-department", label: "Department List" },
//                   { path: "/add-department", label: "Department Add" },
//                   { path: "/edit-department", label: "Department Edit" },
//                 ],
//               },
//               {
//                 title: "Subjects",
//                 icon: "fas fa-book-reader",
//                 submenu: [
//                   { path: "/view-subject", label: "Subject List" },
//                   { path: "/add-subject", label: "Subject Add" },
//                   { path: "/edit-subject", label: "Subject Edit" },
//                 ],
//               },
//               {
//                 title: "Classes",
//                 icon: "fas fa-building",
//                 submenu: [
//                   { path: "/view-class", label: "Class List" },
//                   { path: "/add-class", label: "CLass Add" },
//                   { path: "/edit-class", label: "Class Edit" },
//                 ],
//               },
//               {
//                 title: "Contact",
//                 icon: "fas fa-check",
//                 submenu: [
//                   { path: "/contact", label: "Contact" },
//                   { path: "#", label: "Add Invoices" },
//                 ],
//               },
//             ].map((menu, index) => (
//               <li
//                 key={index}
//                 className={`submenu ${activeMenu === index ? "active" : ""}`}
//               >
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleMenuClick(index);
//                   }}
//                 >
//                   <i className={menu.icon}></i> <span>{menu.title}</span>
//                   <span className="menu-arrow"></span>
//                 </a>
//                 <ul
//                   style={{
//                     display: activeMenu === index ? "block" : "none",
//                   }}
//                 >
//                   {menu.submenu.map((item, subIndex) => (
//                     <li key={subIndex}>
//                       <Link
//                         to={item.path}
//                         className={`menu-item ${isActive(item.path) ? "active" : ""}`}
//                       >
//                         {item.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [role, setRole] = useState(""); // State to store the role
  const location = useLocation();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || ""); // Default to empty if no role is found
  }, []);

  const handleMenuClick = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  // Define the full sidebar menu
  const fullMenu = [
    {
      title: "Dashboard",
      icon: "feather-grid",
      submenu: [
        { path: "/", label: "Admin Dashboard" },
        { path: "/teacher-dashboard", label: "Teacher Dashboard" },
        { path: "/student-dashboard", label: "Student Dashboard" },
      ],
    },
    {
      title: "Students",
      icon: "fas fa-graduation-cap",
      submenu: [
        { path: "/view-students", label: "Student List" },
        { path: "#", label: "Student View" },
        { path: "/add-students", label: "Student Add" },
        { path: "/edit-student", label: "Student Edit" },
      ],
    },
    {
      title: "Attendance",
      icon: "fas fa-clipboard",
      submenu: [
        { path: "/add-attendance", label: "Attendance" },
        { path: "/absent-students", label: "Absent Students" },
        { path: "/attendance-table", label: "Attendance Table" },
      ],
    },
    {
      title: "Exams",
      icon: "fas fa-book",
      submenu: [
        { path: "/add-marks", label: "Add Marks" },
        { path: "/marks-report", label: "Report" },
        { path: "/report-card", label: "Report Card" },
      ],
    },
    {
      title: "Teachers",
      icon: "fas fa-chalkboard-teacher",
      submenu: [
        { path: "/view-teachers", label: "Teacher List" },
        { path: "#", label: "Teacher View" },
        { path: "/add-teachers", label: "Teacher Add" },
        { path: "/edit-teacher", label: "Teacher Edit" },
      ],
    },
    {
      title: "Departments",
      icon: "fas fa-building",
      submenu: [
        { path: "/view-department", label: "Department List" },
        { path: "/add-department", label: "Department Add" },
        { path: "/edit-department", label: "Department Edit" },
      ],
    },
    {
      title: "Subjects",
      icon: "fas fa-book-reader",
      submenu: [
        { path: "/view-subject", label: "Subject List" },
        { path: "/add-subject", label: "Subject Add" },
        { path: "/edit-subject", label: "Subject Edit" },
      ],
    },
    {
      title: "Classes",
      icon: "fas fa-building",
      submenu: [
        { path: "/view-class", label: "Class List" },
        { path: "/add-class", label: "Class Add" },
        { path: "/edit-class", label: "Class Edit" },
      ],
    },
    {
      title: "Contact",
      icon: "fas fa-check",
      submenu: [
        { path: "/contact", label: "Contact" },
        { path: "#", label: "Add Invoices" },
      ],
    },
  ];

  // Omit specific items for TEACHER role
  const filteredMenu =
    role === "TEACHER"
      ? fullMenu.filter((menu) => {
          const restrictedItems = [
            "Admin Dashboard",
            "Student Dashboard",
            "Student Add",
            "Student Edit",
            "Student View",
            "Teacher Add",
            "Teacher Edit",
            "Department Add",
            "Department Edit",
            "Subject Add",
            "Subject Edit",
            "Class Add",
            "Class Edit",
          ];
          menu.submenu = menu.submenu.filter(
            (item) => !restrictedItems.includes(item.label)
          );
          return menu.submenu.length > 0;
        })
      : fullMenu;

  return (
    <div
      className={`sidebar ${isSidebarOpen ? "" : "mini-sidebar"}`}
      style={{ width: location.pathname === "/add-students" ? "60%" : "20%" }}
      id="sidebar"
    >
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main Menu</span>
            </li>
            {filteredMenu.map((menu, index) => (
              <li
                key={index}
                className={`submenu ${activeMenu === index ? "active" : ""}`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(index);
                  }}
                >
                  <i className={menu.icon}></i> <span>{menu.title}</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul
                  style={{
                    display: activeMenu === index ? "block" : "none",
                  }}
                >
                  {menu.submenu.map((item, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={item.path}
                        className={`menu-item ${isActive(item.path) ? "active" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
