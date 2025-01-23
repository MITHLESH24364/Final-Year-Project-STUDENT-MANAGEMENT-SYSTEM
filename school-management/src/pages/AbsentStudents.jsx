import React, { useState } from "react";

const AbsentStudent = () => {
  const [filters, setFilters] = useState({
    class: "",
    section: "",
    attendanceDate: new Date().toISOString().split("T")[0],
  });
  const [absentStudents, setAbsentStudents] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const fetchAbsentStudents = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("Authentication token not found. Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/sms/attandence/absent/getByDate?date=${filters.attendanceDate}&class=${filters.class}&section=${filters.section}`,
        {
          headers: {
            Authorization: `Basic ${authToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        // Updated mapping to include all relevant student details
        const students = data.map((student) => ({
          sid: student.sid,
          fullname: student.fullname,
          rollNo: student.rollNo,
          studentClass: student.studentClass,
          section: student.section
        }));

        setAbsentStudents(students);
        setIsFiltered(true);
      } else {
        console.error("Error fetching absent students:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleApplyFilter = () => {
    fetchAbsentStudents();
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <h3 className="page-title">Absent Students</h3>
          </div>

          {/* Filters */}
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Class</label>
              <select
                className="form-control"
                name="class"
                value={filters.class}
                onChange={handleFilterChange}
              >
                <option value="">Select Class</option>
                {["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"].map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label>Section</label>
              <select
                className="form-control"
                name="section"
                value={filters.section}
                onChange={handleFilterChange}
              >
                <option value="">Select Section</option>
                {["A", "B", "C", "D", "E"].map((sec) => (
                  <option key={sec} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                name="attendanceDate"
                value={filters.attendanceDate}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-3 mt-4">
              <button type="button" className="btn btn-primary" onClick={handleApplyFilter}>
                Apply Filter
              </button>
            </div>
          </div>

          {/* Absent Students Table */}
          {isFiltered && (
            <table className="table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Full Name</th>
                  <th>Roll No</th>
                  <th>Class</th>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                {absentStudents.length > 0 ? (
                  absentStudents.map((student) => (
                    <tr key={student.sid}>
                      <td>{student.sid}</td>
                      <td>{student.fullname}</td>
                      <td>{student.rollNo}</td>
                      <td>{student.studentClass}</td>
                      <td>{student.section}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No absent students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbsentStudent;