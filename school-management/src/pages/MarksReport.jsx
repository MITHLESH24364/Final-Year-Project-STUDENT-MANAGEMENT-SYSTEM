// import React, { useState, useEffect } from 'react';

// // Dummy data for report cards
// const reportData = [
//   { id: 1, name: 'John Doe', class: '10', section: 'A', maths: 95, science: 90, english: 88 },
//   { id: 2, name: 'Jane Smith', class: '10', section: 'A', maths: 80, science: 85, english: 78 },
//   { id: 3, name: 'Alice Johnson', class: '9', section: 'B', maths: 75, science: 70, english: 72 },
//   { id: 4, name: 'Bob Brown', class: '9', section: 'B', maths: 90, science: 85, english: 91 },
// ];

// const MarksReport = () => {
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSection, setSelectedSection] = useState('');
//   const [filteredData, setFilteredData] = useState(reportData);

//   useEffect(() => {
//     // Filter data based on selected filters
//     const filtered = reportData.filter(item => {
//       return (
//         (selectedClass ? item.class === selectedClass : true) &&
//         (selectedSection ? item.section === selectedSection : true)
//       );
//     });
//     setFilteredData(filtered);
//   }, [selectedClass, selectedSection]);

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Student Report Card</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="students.html">Student</a>
//                     </li>
//                     <li className="breadcrumb-item active">Report Card</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <div className="row mb-3">
//             <div className="col-md-2">
//               <label htmlFor="classSelect" className="form-label">
//                 Class
//               </label>
//               <select
//                 className="form-control"
//                 id="classSelect"
//                 value={selectedClass}
//                 onChange={(e) => setSelectedClass(e.target.value)}
//               >
//                 <option value="">Select Class</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>

//             <div className="col-md-2">
//               <label htmlFor="sectionSelect" className="form-label">
//                 Section
//               </label>
//               <select
//                 className="form-control"
//                 id="sectionSelect"
//                 value={selectedSection}
//                 onChange={(e) => setSelectedSection(e.target.value)}
//               >
//                 <option value="">Select Section</option>
//                 <option value="A">A</option>
//                 <option value="B">B</option>
//               </select>
//             </div>
//           </div>

//           {/* Render the table only if filters are selected */}
//           {(selectedClass || selectedSection) && (
//             <div className="table-container">
//               <table className="table table-hover table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>ID</th>
//                     <th>Class</th>
//                     <th>Section</th>
//                     <th>Maths</th>
//                     <th>Science</th>
//                     <th>English</th>
//                     <th>Nepali</th>
//                     <th>Computer</th>
//                     <th>Account</th>
//                     <th>Grade</th>

//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.name}</td>
//                         <td>{item.id}</td>
//                       <td>{item.class}</td>
//                       <td>{item.section}</td>
//                       <td>{item.maths}</td>
//                       <td>{item.science}</td>
//                       <td>{item.english}</td>
//                         <td>{item.nepali}</td>
//                         <td>{item.computer}</td>
//                         <td>{item.account}</td>
//                         <td>{item.grade}</td>
                        
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarksReport;





import React, { useState, useEffect } from 'react';
import { reportData } from '../data/reportData';

// Dummy data for report cards


// Grading function
const getGrade = (marks) => {
  if (marks >= 0 && marks <= 15) {
    return 'E';
  } else if (marks > 15 && marks <= 22.5) {
    return 'D';
  } else if (marks > 22.5 && marks <= 30) {
    return 'D+';
  } else if (marks > 30 && marks <= 37.5) {
    return 'C';
  } else if (marks > 37.5 && marks <= 45) {
    return 'C+';
  } else if (marks > 45 && marks <= 52.5) {
    return 'B';
  } else if (marks > 52.5 && marks <= 60) {
    return 'B+';
  } else if (marks > 60 && marks <= 67.5) {
    return 'A';
  } else if (marks > 67.5 && marks <= 75) {
    return 'A+';
  } else {
    return 'Invalid Marks'; // In case the marks are out of the expected range
  }
};

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
                    <th>Grade (Maths)</th>
                    <th>Science</th>
                    <th>Grade (Science)</th>
                    <th>English</th>
                    <th>Grade (English)</th>
                    <th>Nepali</th>
                    <th>Grade (Nepali)</th>
                    <th>Computer</th>
                    <th>Grade (Computer)</th>
                    <th>Account</th>
                    <th>Grade (Account)</th>
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
                      <td>{getGrade(item.maths)}</td>
                      <td>{item.science}</td>
                      <td>{getGrade(item.science)}</td>
                      <td>{item.english}</td>
                      <td>{getGrade(item.english)}</td>
                      <td>{item.nepali}</td>
                      <td>{getGrade(item.nepali)}</td>
                      <td>{item.computer}</td>
                      <td>{getGrade(item.computer)}</td>
                      <td>{item.account}</td>
                      <td>{getGrade(item.account)}</td>
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
