import React, { useState, useEffect } from 'react';

const AbsentStudents = () => {
  const [activeTab, setActiveTab] = useState('Absentee');

  // Filters and sorting options
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [orderBy, setOrderBy] = useState('sno');
  const [dateFilter, setDateFilter] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Default to current date in YYYY-MM-DD format
  });

  // State to store displayed data
  const [displayData, setDisplayData] = useState([]);




  const fetchAbsentData = async () => {
    const authToken = localStorage.getItem('authToken');
  
    const params = new URLSearchParams({
      date: dateFilter,
      class: classFilter || '', // Handle optional params
      section: sectionFilter || '',
    });
  
    const response = await fetch("http://sms/attandence/absent-by-date?${params.toString()}", {
      headers: {
        Authorization: `Basic ${authToken}`,
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      setDisplayData(data);
    } else {
      console.error("Failed to fetch absent data:", response.statusText);
    }
  };
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterClick = () => {
    fetchAbsentData(); // Call the function to fetch filtered data
  };

  // Effect to load data on component mount
  useEffect(() => {
    fetchAbsentData();
  }, []); // Empty array ensures this runs once on mount

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
                  <option value="date">Date</option>
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
                <button className="btn btn-primary w-100" onClick={handleFilterClick}>
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
                    <th>Attendance Date</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((student, index) => (
                    <tr key={student.attendance.id}>
                      <td>{index + 1}</td>
                      <td>{student.attendance.sid}</td>
                      <td>{student.studentDetail.name}</td>
                      <td>{student.studentDetail.rollno}</td>
                      <td>{student.studentDetail.class}</td>
                      <td>{student.studentDetail.section}</td>
                      <td>{student.studentDetail.phone}</td>
                      <td>{student.studentDetail.guardianPhone}</td>
                      <td>{student.attendance.date}</td>
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
