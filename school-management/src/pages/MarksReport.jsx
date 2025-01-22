// import React, { useState, useEffect } from 'react';
// import reportData from "../Data/reportData"; // Ensure the correct data file is imported

// // Grading function for theory
// const getGrade = (marks) => {
//   if (marks === undefined || marks === null || isNaN(marks)) {
//     return ''; // Return an empty string if no marks are provided
//   }

//   if (marks >= 0 && marks <= 15) {
//     return 'E';
//   } else if (marks > 15 && marks <= 22.5) {
//     return 'D';
//   } else if (marks > 22.5 && marks <= 30) {
//     return 'D+';
//   } else if (marks > 30 && marks <= 37.5) {
//     return 'C';
//   } else if (marks > 37.5 && marks <= 45) {
//     return 'C+';
//   } else if (marks > 45 && marks <= 52.5) {
//     return 'B';
//   } else if (marks > 52.5 && marks <= 60) {
//     return 'B+';
//   } else if (marks > 60 && marks <= 67.5) {
//     return 'A';
//   } else if (marks > 67.5 && marks <= 75) {
//     return 'A+';
//   } else {
//     return 'Invalid Marks';
//   }
// };

// // Grading function for practicals
// const getPracticalGrade = (marks) => {
//   if (marks === undefined || marks === null || isNaN(marks)) {
//     return ''; // Return an empty string if no marks are provided
//   }

//   if (marks >= 0 && marks <= 5) {
//     return 'E';
//   } else if (marks > 5 && marks <= 7.5) {
//     return 'D';
//   } else if (marks > 7.5 && marks <= 10) {
//     return 'D+';
//   } else if (marks > 10 && marks <= 12.5) {
//     return 'C';
//   } else if (marks > 12.5 && marks <= 15) {
//     return 'C+';
//   } else if (marks > 15 && marks <= 17.5) {
//     return 'B';
//   } else if (marks > 17.5 && marks <= 20) {
//     return 'B+';
//   } else if (marks > 20 && marks <= 22.5) {
//     return 'A';
//   } else if (marks > 22.5 && marks <= 25) {
//     return 'A+';
//   } else {
//     return 'Invalid Marks';
//   }
// };

// // Function to check if the marks are below the threshold
// const getBoxColor = (marks, isPractical = false) => {
//   if (isPractical) {
//     return marks < 10 ? 'red' : ''; // For practicals, if less than 40%, return red
//   } else {
//     return marks < 26.25 ? 'red' : ''; // For theory, if less than 35%, return red
//   }
// };

// const MarksReport = () => {
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSection, setSelectedSection] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedTerm, setSelectedTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(reportData);

//   useEffect(() => {
//     const filtered = reportData.filter(item => {
//       return (
//         (selectedClass ? item.class === selectedClass : true) &&
//         (selectedSection ? item.section === selectedSection : true) &&
//         (selectedYear ? item.year === selectedYear : true) &&
//         (selectedTerm ? item.term === selectedTerm : true)
//       );
//     });
//     setFilteredData(filtered);
//   }, [selectedClass, selectedSection, selectedYear, selectedTerm]);

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
//                 <option value="10">10</option>
//                 <option value="9">9</option>
//                 <option value="8">8</option>
//                 <option value="7">7</option>
//                 <option value="6">6</option>
//                 <option value="5">5</option>
//                 <option value="4">4</option>
//                 <option value="3">3</option>
//                 <option value="2">2</option>
//                 <option value="1">1</option>
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
//                 <option value="C">C</option>
//                 <option value="D">D</option>
//                 <option value="E">E</option>
//               </select>
//             </div>

//             <div className="col-md-2">
//               <label htmlFor="yearSelect" className="form-label">
//                 Year
//               </label>
//               <select
//                 className="form-control"
//                 id="yearSelect"
//                 value={selectedYear}
//                 onChange={(e) => setSelectedYear(e.target.value)}
//               >
//                 <option value="">Select Year</option>
//                 <option value="2025">2025</option>
//                 <option value="2024">2024</option>
//                 <option value="2023">2023</option>
//                 <option value="2022">2022</option>
//               </select>
//             </div>

//             <div className="col-md-2">
//               <label htmlFor="termSelect" className="form-label">
//                 Term
//               </label>
//               <select
//                 className="form-control"
//                 id="termSelect"
//                 value={selectedTerm}
//                 onChange={(e) => setSelectedTerm(e.target.value)}
//               >
//                 <option value="">Select Term</option>
//                 <option value="Term 1">Term 1</option>
//                 <option value="Term 2">Term 2</option>
//                 <option value="Term 3">Term 3</option>
//               </select>
//             </div>
//           </div>

//           {/* Render the table only if filters are selected */}
//           {(selectedClass || selectedSection || selectedYear || selectedTerm) && (
//             <div className="table-container">
//               <table className="table table-hover table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>ID</th>
//                     <th>Class</th>
//                     <th>Section</th>
//                     {/* Subject columns with theory and practical grades */}
//                     <th>Maths</th>
//                     <th>Grade (Maths)</th>
//                     <th>Maths (Practical)</th>
//                     <th>Maths Practical (Grade)</th>

//                     <th>Science</th>
//                     <th>Grade (Science)</th>
//                     <th>Science (Practical)</th>
//                     <th>Science Practical (Grade)</th>

//                     <th>English</th>
//                     <th>Grade (English)</th>
//                     <th>English (Practical)</th>
//                     <th>English Practical (Grade)</th>

//                     <th>Nepali</th>
//                     <th>Grade (Nepali)</th>
//                     <th>Nepali (Practical)</th>
//                     <th>Nepali Practical (Grade)</th>

//                     <th>Social</th>
//                     <th>Grade (Social)</th>
//                     <th>Social (Practical)</th>
//                     <th>Social Practical (Grade)</th>

//                     <th>Opt. Maths</th>
//                     <th>Opt. Maths (Grade)</th>
//                     <th>Opt. Maths (Practical)</th>
//                     <th>Opt. Maths Practical (Grade)</th>

//                     <th>Opt. English</th>
//                     <th>Opt. English (Grade)</th>
//                     <th>Opt. English (Practical)</th>
//                     <th>Opt. English Practical (Grade)</th>

//                     <th>Opt. Computer</th>
//                     <th>Opt. Computer (Grade)</th>
//                     <th>Opt. Computer (Practical)</th>
//                     <th>Opt. Computer Practical (Grade)</th>

//                     <th>Opt. Accountancy</th>
//                     <th>Opt. Accountancy (Grade)</th>
//                     <th>Opt. Accountancy (Practical)</th>
//                     <th>Opt. Accountancy Practical (Grade)</th>

//                     <th>Opt. Science</th>
//                     <th>Opt. Science (Grade)</th>
//                     <th>Opt. Science (Practical)</th>
//                     <th>Opt. Science Practical (Grade)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.name}</td>
//                       <td>{item.id}</td>
//                       <td>{item.class}</td>
//                       <td>{item.section}</td>
//                       {/* Data cells for subjects */}
//                       <td style={{ backgroundColor: getBoxColor(item.maths) }}>{item.maths}</td>
//                       <td>{getGrade(item.maths)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.mathsPractical, true) }}>{item.mathsPractical}</td>
//                       <td>{getPracticalGrade(item.mathsPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.science) }}>{item.science}</td>
//                       <td>{getGrade(item.science)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.sciencePractical, true) }}>{item.sciencePractical}</td>
//                       <td>{getPracticalGrade(item.sciencePractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.english) }}>{item.english}</td>
//                       <td>{getGrade(item.english)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.englishPractical, true) }}>{item.englishPractical}</td>
//                       <td>{getPracticalGrade(item.englishPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.nepali) }}>{item.nepali}</td>
//                       <td>{getGrade(item.nepali)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.nepaliPractical, true) }}>{item.nepaliPractical}</td>
//                       <td>{getPracticalGrade(item.nepaliPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.social) }}>{item.social}</td>
//                       <td>{getGrade(item.social)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.socialPractical, true) }}>{item.socialPractical}</td>
//                       <td>{getPracticalGrade(item.socialPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.optMaths) }}>{item.optMaths}</td>
//                       <td>{getGrade(item.optMaths)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.optMathsPractical, true) }}>{item.optMathsPractical}</td>
//                       <td>{getPracticalGrade(item.optMathsPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.optEnglish) }}>{item.optEnglish}</td>
//                       <td>{getGrade(item.optEnglish)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.optEnglishPractical, true) }}>{item.optEnglishPractical}</td>
//                       <td>{getPracticalGrade(item.optEnglishPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.optComputer) }}>{item.optComputer}</td>
//                       <td>{getGrade(item.optComputer)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.optComputerPractical, true) }}>{item.optComputerPractical}</td>
//                       <td>{getPracticalGrade(item.optComputerPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.optAccountancy) }}>{item.optAccountancy}</td>
//                       <td>{getGrade(item.optAccountancy)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.optAccountancyPractical, true) }}>{item.optAccountancyPractical}</td>
//                       <td>{getPracticalGrade(item.optAccountancyPractical)}</td>

//                       <td style={{ backgroundColor: getBoxColor(item.optScience) }}>{item.optScience}</td>
//                       <td>{getGrade(item.optScience)}</td>
//                       <td style={{ backgroundColor: getBoxColor(item.optSciencePractical, true) }}>{item.optSciencePractical}</td>
//                       <td>{getPracticalGrade(item.optSciencePractical)}</td>
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

// Grading function for theory
const getGrade = (marks) => {
  if (marks === undefined || marks === null || isNaN(marks)) {
    return ''; // Return an empty string if no marks are provided
  }

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
    return 'Invalid Marks';
  }
};

// Grading function for practicals
const getPracticalGrade = (marks) => {
  if (marks === undefined || marks === null || isNaN(marks)) {
    return ''; // Return an empty string if no marks are provided
  }

  if (marks >= 0 && marks <= 5) {
    return 'E';
  } else if (marks > 5 && marks <= 7.5) {
    return 'D';
  } else if (marks > 7.5 && marks <= 10) {
    return 'D+';
  } else if (marks > 10 && marks <= 12.5) {
    return 'C';
  } else if (marks > 12.5 && marks <= 15) {
    return 'C+';
  } else if (marks > 15 && marks <= 17.5) {
    return 'B';
  } else if (marks > 17.5 && marks <= 20) {
    return 'B+';
  } else if (marks > 20 && marks <= 22.5) {
    return 'A';
  } else if (marks > 22.5 && marks <= 25) {
    return 'A+';
  } else {
    return 'Invalid Marks';
  }
};

// Function to check if the marks are below the threshold
const getBoxColor = (marks, isPractical = false) => {
  if (isPractical) {
    return marks < 10 ? 'red' : ''; // For practicals, if less than 40%, return red
  } else {
    return marks < 26.25 ? 'red' : ''; // For theory, if less than 35%, return red
  }
};

const MarksReport = () => {
  const [students, setStudents] = useState([]);  // State to store fetched students data
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
    const [sortBy, setSortBy] = useState("");
  const [marks, setMarks] = useState({});  // State to store marks for each student

  const fetchStudents = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return console.error("Authentication token not found.");

    try {
      const response = await fetch("http://localhost:8080/sms/user/student/all", {
        headers: { Authorization: `Basic ${authToken}` },
      });

      if (response.ok) {
        const data = await response.json();
        setStudents(data);  // Set fetched data in the students state
      } else {
        throw new Error(`Error fetching students: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchStudents();  // Call fetchStudents when the component mounts
  }, []);

  useEffect(() => {
    const filtered = students.filter(item => {
      return (
        (selectedClass ? item.class === selectedClass : true) &&
        (selectedSection ? item.section === selectedSection : true) &&
        (selectedYear ? item.year === selectedYear : true) &&
        (selectedTerm ? item.term === selectedTerm : true)
      );
    });
    setFilteredData(filtered);
  }, [selectedClass, selectedSection, selectedYear, selectedTerm, students]);

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
              <label htmlFor="classSelect" className="form-label">Class</label>
              <select
                className="form-control"
                id="classSelect"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="sectionSelect" className="form-label">Section</label>
              <select
                className="form-control"
                id="sectionSelect"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="yearSelect" className="form-label">Year</label>
              <select
                className="form-control"
                id="yearSelect"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="termSelect" className="form-label">Term</label>
              <select
                className="form-control"
                id="termSelect"
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
              >
                <option value="">Select Term</option>
                <option value="Term 1">Term 1</option>
                <option value="Term 2">Term 2</option>
                <option value="Term 3">Term 3</option>
              </select>
            </div>
          </div>

          {/* Render the table only if filters are selected */}
          {(selectedClass || selectedSection || selectedYear || selectedTerm) && (
            <div className="table-container">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Roll Number</th>
{/* Subject columns with theory and practical grades */}
                     <th>Maths</th>
                     <th>Grade (Maths)</th>
                     <th>Maths (Practical)</th>
                     <th>Maths Practical (Grade)</th>
                     <th>Science</th>
                      <th>Grade (Science)</th>
                      <th>Science (Practical)</th>
                      <th>Science Practical (Grade)</th>
                      <th>English</th>
                      <th>Grade (English)</th>
                      <th>English (Practical)</th>
                      <th>English Practical (Grade)</th>
                      <th>Nepali</th>
                      <th>Grade (Nepali)</th>
                      <th>Nepali (Practical)</th>
                      <th>Nepali Practical (Grade)</th>
                      <th>Social</th>
                      <th>Grade (Social)</th>
                      <th>Social (Practical)</th>
                      <th>Social Practical (Grade)</th>
                      <th>Opt. Maths</th>
                      <th>Opt. Maths (Grade)</th>
                      <th>Opt. Maths (Practical)</th>
                      <th>Opt. Maths Practical (Grade)</th>
                      <th>Opt. English</th>
                      <th>Opt. English (Grade)</th>
                      <th>Opt. English (Practical)</th>
                      <th>Opt. English Practical (Grade)</th>
                      <th>Opt. Computer</th>
                      <th>Opt. Computer (Grade)</th>
                      <th>Opt. Computer (Practical)</th>
                      <th>Opt. Computer Practical(Grade)</th>
                      <th>Opt. Accountancy</th>
                      <th>Opt. Accountancy (Grade)</th>
                      <th>Opt. Accountancy (Practical)</th>
                      <th>Opt. Accountancy Practical (Grade)</th>
                      <th>Opt. Science</th>
                      <th>Opt. Science (Grade)</th>
                      <th>Opt. Science (Practical)</th>
                      <th>Opt. Science Practical (Grade)</th>

                    
                  </tr>
                </thead>
                <tbody>
                  {students
                    .filter((student) => student.studentClass === selectedClass && student.section === selectedSection)
                    .sort((a, b) => {
                      switch (sortBy) {
                        case "id":
                          return a.accountId - b.accountId;
                        case "name":
                          return a.fullname.localeCompare(b.fullname);
                        case "rollNumber":
                          return a.rollNo - b.rollNo;
                        default:
                          return a.accountId - b.accountId;
                      }
                    })
                    .map((student) => (
                      <tr key={student.accountId}>
                        <td>{student.fullname}</td>
                        <td>{student.accountId}</td>
                        <td>{student.rollNo}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.maths) }}>
                          {marks[student.accountId]?.maths}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.maths)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.mathsPractical, true) }}>
                          {marks[student.accountId]?.mathsPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.mathsPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.science) }}>
                          {marks[student.accountId]?.science}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.science)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.sciencePractical, true) }}>
                          {marks[student.accountId]?.sciencePractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.sciencePractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.english) }}>
                          {marks[student.accountId]?.english}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.english)}</td>

                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.englishPractical, true) }}>
                          {marks[student.accountId]?.englishPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.englishPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.nepali) }}>
                          {marks[student.accountId]?.nepali}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.nepali)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.nepaliPractical, true) }}>
                          {marks[student.accountId]?.nepaliPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.nepaliPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.social) }}>
                          {marks[student.accountId]?.social}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.social)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.socialPractical, true) }}>
                          {marks[student.accountId]?.socialPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.socialPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optMaths) }}>
                          {marks[student.accountId]?.optMaths}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.optMaths)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optMathsPractical, true) }}>
                          {marks[student.accountId]?.optMathsPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.optMathsPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optEnglish) }}>
                          {marks[student.accountId]?.optEnglish}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.optEnglish)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optEnglishPractical, true) }}>
                          {marks[student.accountId]?.optEnglishPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.optEnglishPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optComputer) }}>
                          {marks[student.accountId]?.optComputer}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.optComputer)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optComputerPractical, true) }}>
                          {marks[student.accountId]?.optComputerPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.optComputerPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optAccountancy) }}>
                          {marks[student.accountId]?.optAccountancy}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.optAccountancy)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optAccountancyPractical, true) }}>
                          {marks[student.accountId]?.optAccountancyPractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.optAccountancyPractical)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optScience) }}>
                          {marks[student.accountId]?.optScience}
                        </td>
                        <td>{getGrade(marks[student.accountId]?.optScience)}</td>
                        <td style={{ backgroundColor: getBoxColor(marks[student.accountId]?.optSciencePractical, true) }}>
                          {marks[student.accountId]?.optSciencePractical}
                        </td>
                        <td>{getPracticalGrade(marks[student.accountId]?.optSciencePractical)}</td>
                        

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
