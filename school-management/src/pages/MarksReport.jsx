// import React, { useState, useEffect } from 'react';
// import reportData from "../Data/reportData"; // Ensure the correct data file is imported


// const getGrade = (marks) => {
//   // Check if marks are undefined, null, or not a number
//   if (marks === undefined || marks === null || isNaN(marks)) {
//     return ''; // Return an empty string if no marks are provided
//   }
  
//   // Check for invalid marks range (greater than 75)
//   if (marks > 75) {
//     return 'Invalid Marks'; 
//   }

//   // Check for valid grading scale
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
//     return 'Invalid Marks'; // In case the marks are out of the expected range
//   }
// };

// // Grading function for practicals
// const getPracticalGrade = (marks) => {
//   // Check if marks are undefined, null, or not a number
//   if (marks === undefined || marks === null || isNaN(marks)) {
//     return ''; // Return an empty string if no marks are provided
//   }
  
//   // Check for invalid marks range (greater than 25)
//   if (marks > 25) {
//     return 'Invalid Marks';
//   }

//   // Check for valid grading scale
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
//     return 'Invalid Marks'; // In case the marks are out of the expected range
//   }
// };




// const MarksReport = () => {
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSection, setSelectedSection] = useState('');
//   const [filteredData, setFilteredData] = useState(reportData);

//   useEffect(() => {
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
//           </div>

//           {/* Render the table only if filters are selected */}
//           {(selectedClass || selectedSection) && (
//             <div className="table-container">
        


// <table className="table table-hover table-bordered">
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>ID</th>
//       <th>Class</th>
//       <th>Section</th>
//       <th>English</th>
//       <th>English (Grade)</th>
//       <th>English (Practical)</th>
//       <th>English Practical (Grade)</th>
//       <th>Nepali</th>
//       <th>Nepali (Grade)</th>
//       <th>Nepali (Practical)</th>
//       <th>Nepali Practical (Grade)</th>
//       <th>Maths</th>
//       <th>Maths (Grade)</th>
//       <th>Maths (Practical)</th>
//       <th>Maths Practical (Grade)</th>
//       <th>Science</th>
//       <th>Science (Grade)</th>
//       <th>Science (Practical)</th>
//       <th>Science Practical (Grade)</th>
//       <th>Social</th>
//       <th>Social (Grade)</th>
//       <th>Social (Practical)</th>
//       <th>Social Practical (Grade)</th>
//       <th>Opt. Maths</th>
//       <th>Opt. Maths (Grade)</th>
//       <th>Opt. Maths (Practical)</th>
//       <th>Opt. Maths Practical (Grade)</th>
//       <th>Opt. English</th>
//       <th>Opt. English (Grade)</th>
//       <th>Opt. English (Practical)</th>
//       <th>Opt. English Practical (Grade)</th>
//       <th>Opt. Computer</th>
//       <th>Opt. Computer (Grade)</th>
//       <th>Opt. Computer (Practical)</th>
//       <th>Opt. Computer Practical (Grade)</th>
//       <th>Opt. Accountancy</th>
//       <th>Opt. Accountancy (Grade)</th>
//       <th>Opt. Accountancy (Practical)</th>
//       <th>Opt. Accountancy Practical (Grade)</th>
//       <th>Opt. Science</th>
//       <th>Opt. Science (Grade)</th>
//       <th>Opt. Science (Practical)</th>
//       <th>Opt. Science Practical (Grade)</th>
//     </tr>
//   </thead>
//   <tbody>
//     {filteredData.map((item) => (
//       <tr key={item.id}>
//         <td>{item.name}</td>
//         <td>{item.id}</td>
//         <td>{item.class}</td>
//         <td>{item.section}</td>
//         <td>{item.english}</td>
//         <td>{getGrade(item.english)}</td>
//         <td>{item.englishPractical}</td>
//         <td>{getPracticalGrade(item.englishPractical)}</td>
//         <td>{item.nepali}</td>
//         <td>{getGrade(item.nepali)}</td>
//         <td>{item.nepaliPractical}</td>
//         <td>{getPracticalGrade(item.nepaliPractical)}</td>
//         <td>{item.maths}</td>
//         <td>{getGrade(item.maths)}</td>
//         <td>{item.mathsPractical}</td>
//         <td>{getPracticalGrade(item.mathsPractical)}</td>
//         <td>{item.science}</td>
//         <td>{getGrade(item.science)}</td>
//         <td>{item.sciencePractical}</td>
//         <td>{getPracticalGrade(item.sciencePractical)}</td>
//         <td>{item.social}</td>
//         <td>{getGrade(item.social)}</td>
//         <td>{item.socialPractical}</td>
//         <td>{getPracticalGrade(item.socialPractical)}</td>
//         <td>{item.optMath}</td>
//         <td>{getGrade(item.optMath)}</td>
//         <td>{item.optMathPractical}</td>
//         <td>{getPracticalGrade(item.optMathPractical)}</td>
//         <td>{item.optEnglish}</td>
//         <td>{getGrade(item.optEnglish)}</td>
//         <td>{item.optEnglishPractical}</td>
//         <td>{getPracticalGrade(item.optEnglishPractical)}</td>
//         <td>{item.optComputer}</td>
//         <td>{getGrade(item.optComputer)}</td>
//         <td>{item.optComputerPractical}</td>
//         <td>{getPracticalGrade(item.optComputerPractical)}</td>
//         <td>{item.optAccountancy}</td>
//         <td>{getGrade(item.optAccountancy)}</td>
//         <td>{item.optAccountancyPractical}</td>
//         <td>{getPracticalGrade(item.optAccountancyPractical)}</td>
//         <td>{item.optScience}</td>
//         <td>{getGrade(item.optScience)}</td>
//         <td>{item.optSciencePractical}</td>
//         <td>{getPracticalGrade(item.optSciencePractical)}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarksReport;






import React, { useState, useEffect } from 'react';
import reportData from "../Data/reportData"; // Ensure the correct data file is imported

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
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredData, setFilteredData] = useState(reportData);

  useEffect(() => {
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
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
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
                    <th>Opt. Computer Practical (Grade)</th>

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
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.id}</td>
                      <td>{item.class}</td>
                      <td>{item.section}</td>
                      {/* Data cells for subjects */}
                      <td style={{ backgroundColor: getBoxColor(item.maths) }}>{item.maths}</td>
                      <td>{getGrade(item.maths)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.mathsPractical, true) }}>{item.mathsPractical}</td>
                      <td>{getPracticalGrade(item.mathsPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.science) }}>{item.science}</td>
                      <td>{getGrade(item.science)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.sciencePractical, true) }}>{item.sciencePractical}</td>
                      <td>{getPracticalGrade(item.sciencePractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.english) }}>{item.english}</td>
                      <td>{getGrade(item.english)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.englishPractical, true) }}>{item.englishPractical}</td>
                      <td>{getPracticalGrade(item.englishPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.nepali) }}>{item.nepali}</td>
                      <td>{getGrade(item.nepali)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.nepaliPractical, true) }}>{item.nepaliPractical}</td>
                      <td>{getPracticalGrade(item.nepaliPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.social) }}>{item.social}</td>
                      <td>{getGrade(item.social)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.socialPractical, true) }}>{item.socialPractical}</td>
                      <td>{getPracticalGrade(item.socialPractical)}</td>

                      {/* Optional subjects */}
                      <td style={{ backgroundColor: getBoxColor(item.optMaths) }}>{item.optMaths}</td>
                      <td>{getGrade(item.optMaths)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.optMathsPractical, true) }}>{item.optMathsPractical}</td>
                      <td>{getPracticalGrade(item.optMathsPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.optEnglish) }}>{item.optEnglish}</td>
                      <td>{getGrade(item.optEnglish)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.optEnglishPractical, true) }}>{item.optEnglishPractical}</td>
                      <td>{getPracticalGrade(item.optEnglishPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.optComputer) }}>{item.optComputer}</td>
                      <td>{getGrade(item.optComputer)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.optComputerPractical, true) }}>{item.optComputerPractical}</td>
                      <td>{getPracticalGrade(item.optComputerPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.optAccountancy) }}>{item.optAccountancy}</td>
                      <td>{getGrade(item.optAccountancy)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.optAccountancyPractical, true) }}>{item.optAccountancyPractical}</td>
                      <td>{getPracticalGrade(item.optAccountancyPractical)}</td>

                      <td style={{ backgroundColor: getBoxColor(item.optScience) }}>{item.optScience}</td>
                      <td>{getGrade(item.optScience)}</td>
                      <td style={{ backgroundColor: getBoxColor(item.optSciencePractical, true) }}>{item.optSciencePractical}</td>
                      <td>{getPracticalGrade(item.optSciencePractical)}</td>
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
