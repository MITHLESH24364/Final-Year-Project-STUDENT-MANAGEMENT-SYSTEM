import React, { useState, useEffect } from 'react';

// Dummy data for report cards
const reportData = [
  { id: 1, name: 'John Doe', class: '10', section: 'A', maths: 95, science: 90, english: 88 },
  { id: 2, name: 'Jane Smith', class: '10', section: 'A', maths: 80, science: 85, english: 78 },
  { id: 3, name: 'Alice Johnson', class: '9', section: 'B', maths: 75, science: 70, english: 72 },
  { id: 4, name: 'Bob Brown', class: '9', section: 'B', maths: 90, science: 85, english: 91 },
];

const MarksReport = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredData, setFilteredData] = useState(reportData);

  useEffect(() => {
    // Filter data based on selected filters
    const filtered = reportData.filter(item => {
      return (
        (selectedClass ? item.class === selectedClass : true) &&
        (selectedSection ? item.section === selectedSection : true)
      );
    });
    setFilteredData(filtered);
  }, [selectedClass, selectedSection]);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Student Report Card</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="students.html">Student</a>
                    </li>
                    <li className="breadcrumb-item active">Report Card</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="classSelect" className="form-label">
                Class
              </label>
              <select
                className="form-control"
                id="classSelect"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="sectionSelect" className="form-label">
                Section
              </label>
              <select
                className="form-control"
                id="sectionSelect"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
          </div>

          {/* Render the table only if filters are selected */}
          {(selectedClass || selectedSection) && (
            <div className="table-container">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Maths</th>
                    <th>Science</th>
                    <th>English</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                        <td>{item.id}</td>
                      <td>{item.class}</td>
                      <td>{item.section}</td>
                      <td>{item.maths}</td>
                      <td>{item.science}</td>
                      <td>{item.english}</td>
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

export default MarksReport;
