import React, { useState, useEffect } from "react";

const AddAttendance = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [filters, setFilters] = useState({
    class: "",
    section: "",
    attendanceDate: getCurrentDate(),
    orderBy: "name",
  });

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

  useEffect(() => {
    const fetchStudents = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        console.error("Authentication token not found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/sms/user/student/all", {
          headers: {
            Authorization: `Basic ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStudents(
            data.map((student) => ({
              ...student,
              present: false,
              late: false,
            }))
          );
        } else {
          console.error("Error fetching students:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchStudents();
  }, []);

  

  const fetchAttendanceForDate = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("Authentication token not found. Please log in.");
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:8080/sms/attandence/getByDate?date=${filters.attendanceDate}&class=${filters.class}&section=${filters.section}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authToken}`,
          },
        }
      );
  
      if (response.ok) {
        const attendanceData = await response.json();
  
        // Map fetched attendance data to students
        setFilteredStudents((prevStudents) =>
          prevStudents.map((student) => {
            const attendance = attendanceData.find(
              (record) => record.sid === student.accountId
            );
  
            // Update attendance or default to 'a'
            return attendance
              ? {
                  ...student,
                  present: attendance.present === "p",
                  late: attendance.late === "l",
                }
              : {
                  ...student,
                  present: false, // Default to absent
                  late: false,
                };
          })
        );
      } else {
        console.error("Error fetching attendance:", response.statusText);
        setFilteredStudents((prevStudents) =>
          prevStudents.map((student) => ({
            ...student,
            present: false, // Default to absent
            late: false,
          }))
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  



  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

 
  

  const handleApplyFilter = () => {
    const filtered = students.filter(
      (student) =>
        student.studentClass === filters.class &&
        student.section === filters.section
    );
  
    filtered.sort((a, b) => {
      if (filters.orderBy === "name") {
        return a.fullname.localeCompare(b.fullname);
      } else if (filters.orderBy === "roll") {
        return a.rollNo - b.rollNo;
      }
      return 0;
    });
  
    setFilteredStudents(filtered);
    setIsFiltered(true);
  
    // Fetch attendance for the selected date and filter
    fetchAttendanceForDate();
  };
  

  
  const handleAttendanceChange = (id, field) => {
    setFilteredStudents((prevData) =>
      prevData.map((student) =>
        student.accountId === id ? { ...student, [field]: !student[field] } : student
      )
    );
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setFilteredStudents((prevData) =>
      prevData.map((student) => ({
        ...student,
        present: checked,
      }))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const attendanceData = filteredStudents.map((student) => ({
      sid: student.accountId,
      date: filters.attendanceDate,
      present: student.present ? "p" : null,
      late: student.late ? "l" : null,
      absent: !student.present && !student.late ? "a" : null,
    }));

    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch("http://localhost:8080/sms/attandence/bulk-add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify(attendanceData),
      });

      if (response.ok) {
        console.log("Bulk attendance submitted successfully!");
        setIsSubmitted(true); // Set success state
      } else {
        console.error("Error submitting attendance:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <h3 className="page-title">Student Attendance</h3>
          </div>

          <form>
            {/* Filters */}
            <div className="row mb-4">
              <div className="col-md-2">
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
              <div className="col-md-2">
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
              <div className="col-md-3">
                <label>Order By</label>
                <select
                  className="form-control"
                  name="orderBy"
                  value={filters.orderBy}
                  onChange={handleFilterChange}
                >
                  <option value="name">Name</option>
                  <option value="roll">Roll</option>
                </select>
              </div>
              <div className="col-md-2 mt-4">
                <button type="button" className="btn btn-primary" onClick={handleApplyFilter}>
                  Apply Filter
                </button>
              </div>
            </div>
          </form>

          {isFiltered && (
            <form onSubmit={handleSubmit}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Roll</th>
                    <th>
                      Present 
                      <br />
                      Select All
                      <input
                        type="checkbox"
                        className="ml-2"
                        onChange={handleSelectAll}

                      />
                    </th>
                    <th>Late</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.accountId}>
                      <td>{student.fullname}</td>
                      <td>{student.rollNo}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={student.present}
                          onChange={() => handleAttendanceChange(student.accountId, "present")}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={student.late}
                          onChange={() => handleAttendanceChange(student.accountId, "late")}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="submit" className="btn btn-primary mt-3">
                Submit Attendance
              </button>
            </form>
          )}
          {isSubmitted && (
            <div className="alert alert-success mt-3">
              Attendance submitted successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAttendance;
