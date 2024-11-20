import React, { useState } from 'react';
import studentData from "../Data/studentData"; // Import the data from the studentData file

const AbsentStudents = () => {
  const [activeTab, setActiveTab] = useState('Absentee');

  // Filters and sorting options
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [orderBy, setOrderBy] = useState('sno');
  const [dateFilter, setDateFilter] = useState(''); // New state for date filter

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter students based on class, section, date, and order
  const filteredStudents = studentData
    .filter(student => {
      // Filter by class
      if (classFilter && student.class !== classFilter) return false;
      // Filter by section
      if (sectionFilter && student.section !== sectionFilter) return false;
      // Filter by date (if date filter is provided)
      if (dateFilter && student.attendanceDate !== dateFilter) return false;
      return true;
    })
    .sort((a, b) => {
      // Sorting logic
      if (orderBy === 'sno') {
        return a.sno - b.sno;
      } else if (orderBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (orderBy === 'class') {
        return a.class - b.class;
      } else if (orderBy === 'date') {
        return new Date(a.attendanceDate) - new Date(b.attendanceDate); // Sort by date
      }
      return 0;
    });

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Student Attendance</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/students">Student</a>
                    </li>
                    <li className="breadcrumb-item active">Attendance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <ul className="nav nav-tabs">
              {[
                "Add/Edit",
                "Recent",
                "Absentee",
                "Absentee Range",
                "Attendance Record",
                "Download",
                "Daily(Student)",
                "Monthly",
                "Attendance Chart",
              ].map((tab, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    href="#"
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter Section */}
          <div className="filter-section mb-4">
            <div className="row">
              <div className="col-md-3">
                <label>Class</label>
                <select
                  className="form-control"
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                >
                  <option value="">All</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classItem) => (
                    <option key={classItem} value={classItem}>
                      {classItem}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Section</label>
                <select
                  className="form-control"
                  value={sectionFilter}
                  onChange={(e) => setSectionFilter(e.target.value)}
                >
                  <option value="">All</option>
                  {['A', 'B', 'C', 'D', 'E'].map((section) => (
                    <option key={section} value={section}>
                       {section}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Order By</label>
                <select
                  className="form-control"
                  value={orderBy}
                  onChange={(e) => setOrderBy(e.target.value)}
                >
                  <option value="sno">ID</option>
                  <option value="name">Name</option>
                  <option value="class">Class</option>
                  <option value="date">Date</option> {/* Added Date sorting option */}
                </select>
              </div>

              <div className="col-md-3">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <label>&nbsp;</label>
                <button className="btn btn-primary w-100" onClick={() => {}}>
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content - Absentee Data */}
          {activeTab === "Absentee" && (
            <div className="absentee-table">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Roll no.</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Phone</th>
                    <th>Guardian's Phone</th>
                    <th>Attendance Date</th> {/* Added attendance date column */}
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={student.sno}>
                      <td>{index + 1}</td> {/* Dynamically generate S.no */}
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.rollno}</td>
                      <td>{student.class}</td>
                      <td>{student.section}</td>
                      <td>{student.phone}</td>
                      <td>{student.guardianPhone}</td>
                      <td>{student.attendanceDate}</td> {/* Display attendance date */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbsentStudents;
