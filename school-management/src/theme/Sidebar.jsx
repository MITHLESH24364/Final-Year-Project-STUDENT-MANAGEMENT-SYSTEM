import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track the currently active menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle
  const location = useLocation();

  const handleMenuClick = (menuIndex) => {
    // Toggle active state for the clicked menu
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`sidebar ${isSidebarOpen ? "" : "mini-sidebar"}`}
      style={{ width: location.pathname === "/add-students" ? "60%" : "20%" }}
      id="sidebar"
    >
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            {/* Main Menu */}
            <li className="menu-title">
              <span>Main Menu</span>
            </li>

            {/* Submenus */}
            {[
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
                  { path: "/students", label: "Student List" },
                  { path: "/student-details", label: "Student View" },
                  { path: "/add-students", label: "Student Add" },
                  { path: "/edit-student", label: "Student Edit" },
                ],
              },
              {
                title: "Attendance",
                icon: "fas fa-clipboard",
                submenu: [{ path: "/add-attendance", label: "Attendance" }],
              },
              {
                title: "Exams",
                icon: "fas fa-book",
                submenu: [{ path: "/add-marks", label: "Add Marks" }],
              },
              {
                title: "Teachers",
                icon: "fas fa-chalkboard-teacher",
                submenu: [
                  { path: "/teachers", label: "Teacher List" },
                  { path: "/teacher-details", label: "Teacher View" },
                  { path: "/add-teacher", label: "Teacher Add" },
                  { path: "/edit-teacher", label: "Teacher Edit" },
                ],
              },
              {
                title: "Departments",
                icon: "fas fa-building",
                submenu: [
                  { path: "/departments", label: "Department List" },
                  { path: "/add-department", label: "Department Add" },
                  { path: "/edit-department", label: "Department Edit" },
                ],
              },
              {
                title: "Subjects",
                icon: "fas fa-book-reader",
                submenu: [
                  { path: "/subjects", label: "Subject List" },
                  { path: "/add-subject", label: "Subject Add" },
                  { path: "/edit-subject", label: "Subject Edit" },
                ],
              },
              {
                title: "Invoices",
                icon: "fas fa-check",
                submenu: [
                  { path: "/invoices", label: "Invoices List" },
                  { path: "/add-invoice", label: "Add Invoices" },
                ],
              },
            ].map((menu, index) => (
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
                        className={`menu-item ${
                          isActive(item.path) ? "active" : ""
                        }`}
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
