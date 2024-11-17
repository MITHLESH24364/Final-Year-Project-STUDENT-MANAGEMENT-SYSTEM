import React, { useState } from "react";

const StudentDashboard = () => {
  const [filters, setFilters] = useState({
    class: "10",
    section: "A",
    attendanceDate: "",
    orderBy: "name",
  });

  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      name: "Mithlesh Kumar Singh",
      roll: 1,
      present: false,
      late: false,
    },
    {
      id: 2,
      name: "Mithlesh Kumar Singh",
      roll: 2,
      present: false,
      late: false,
    },
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleAttendanceChange = (id, field) => {
    setAttendanceData((prevData) =>
      prevData.map((student) =>
        student.id === id ? { ...student, [field]: !student[field] } : student
      )
    );
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setAttendanceData((prevData) =>
      prevData.map((student) => ({ ...student, present: checked }))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Attendance Data:", attendanceData);
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
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
                  <a className={`nav-link ${index === 0 ? "active" : ""}`} href="#">
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter Section */}
          <form>
            <div className="row mb-4">
              <div className="col-md-2">
                <label htmlFor="classFilter">Class</label>
                <select
                  className="form-control"
                  name="class"
                  id="classFilter"
                  value={filters.class}
                  onChange={handleFilterChange}
                >
                  <option value="10">10</option>
                  <option value="9">9</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="sectionFilter">Section</label>
                <select
                  className="form-control"
                  name="section"
                  id="sectionFilter"
                  value={filters.section}
                  onChange={handleFilterChange}
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="attendanceDate">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="attendanceDate"
                  id="attendanceDate"
                  value={filters.attendanceDate}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="orderByFilter">Order By</label>
                <select
                  className="form-control"
                  name="orderBy"
                  id="orderByFilter"
                  value={filters.orderBy}
                  onChange={handleFilterChange}
                >
                  <option value="name">Order By Name</option>
                  <option value="roll">Order By Roll</option>
                  <option value="status">Order By Status</option>
                </select>
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary btn-block">
                  Apply Filters
                </button>
              </div>
            </div>
          </form>

          {/* Attendance Table */}
          <div className="card card-table">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Students</th>
                        <th>Roll Number</th>
                        <th>
                          Attendance
                          <br />
                          Select All
                          <input
                            type="checkbox"
                            id="selectAllAttendance"
                            onChange={handleSelectAll}
                          />
                        </th>
                        <th>Late</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceData.map((student) => (
                        <tr key={student.id}>
                          <td>
                            <img
                              src="assets/img/img-01.jpg"
                              alt="Student"
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                          </td>
                          <td>{student.name}</td>
                          <td>{student.roll}</td>
                          <td>
                            <input
                              type="checkbox"
                              className="attendance-checkbox"
                              checked={student.present}
                              onChange={() => handleAttendanceChange(student.id, "present")}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              className="late-checkbox"
                              checked={student.late}
                              onChange={() => handleAttendanceChange(student.id, "late")}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit Attendance
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
