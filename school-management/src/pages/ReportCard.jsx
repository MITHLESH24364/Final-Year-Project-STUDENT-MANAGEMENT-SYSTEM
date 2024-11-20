// import React from "react";

// const ReportCard = () => {
//   // Sample data
//   const studentInfo = {
//     name: "AarZoo Maharjan",
//     fatherName: "Rabindra Maharjan",
//     motherName: "Rajani Maharjan",
//     regNo: "IMS-25124",
//     class: "10 A",
//     dob: "2065-10-13",
//     examName: "First Term Examination-2081",
//     attendance: "89/89",
//     subjects: [
//       {
//         name: "English",
//         type: "TH",
//         creditHour: 1.25,
//         gradePoint: 3.6,
//         grade: "A",
//         finalGrade: "A",
//       },
//       {
//         name: "Nepali",
//         type: "TH",
//         creditHour: 1.25,
//         gradePoint: 2.4,
//         grade: "C+",
//         finalGrade: "C+",
//       },
//       {
//         name: "Mathematics",
//         type: "TH",
//         creditHour: 1.25,
//         gradePoint: 2.4,
//         grade: "C+",
//         finalGrade: "B",
//       },
//       {
//         name: "Science",
//         type: "TH",
//         creditHour: 1.25,
//         gradePoint: 2.4,
//         grade: "C+",
//         finalGrade: "C+",
//       },
//       {
//         name: "Social Studies",
//         type: "TH",
//         creditHour: 1.25,
//         gradePoint: 2.0,
//         grade: "C",
//         finalGrade: "C+",
//       },
//       {
//         name: "Opt English",
//         type: "TH",
//         creditHour: 1,
//         gradePoint: 2.8,
//         grade: "B",
//         finalGrade: "B",
//       },
//       {
//         name: "Accountancy",
//         type: "TH",
//         creditHour: 1,
//         gradePoint: 2.8,
//         grade: "B",
//         finalGrade: "B",
//       },
//     ],
//     totalCreditHours: 16.5,
//     gpa: 2.74,
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Student Marks</h3>
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

//           {/* Report Card Content */}
//           <div className="report-card">
//             {/* Header Section */}
//             <div className="student-info">
//               <div className="student-left">
//                 <p><strong>NAME OF THE STUDENT:</strong> {studentInfo.name}</p>
//                 <p><strong>FATHER NAME:</strong> {studentInfo.fatherName}</p>
//                 <p><strong>MOTHER NAME:</strong> {studentInfo.motherName}</p>
//               </div>
//               <div className="student-right">
//                 <p><strong>REG NO.:</strong> {studentInfo.regNo}</p>
//                 <p><strong>CLASS:</strong> {studentInfo.class}</p>
//                 <p><strong>DOB:</strong> {studentInfo.dob}</p>
//               </div>
//             </div>

//             {/* Exam Title */}
//             <h3 className="exam-title">{studentInfo.examName}</h3>

//             {/* Table */}
//             <table className="report-table">
//               <thead>
//                 <tr>
//                   <th>S.N</th>
//                   <th>SUBJECTS</th>
//                   <th>CREDIT HOUR (CH)</th>
//                   <th>GRADE POINT (GP)</th>
//                   <th>GRADE</th>
//                   <th>FINAL GRADE</th>
//                   <th>REMARKS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {studentInfo.subjects.map((subject, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>
//                       {subject.name} ({subject.type})
//                     </td>
//                     <td>{subject.creditHour}</td>
//                     <td>{subject.gradePoint}</td>
//                     <td>{subject.grade}</td>
//                     <td>{subject.finalGrade}</td>
//                     <td>{subject.finalGrade}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Footer Section */}
//             <div className="footer">
//               <p><strong>Total Credit Hours:</strong> {studentInfo.totalCreditHours}</p>
//               <p><strong>Grade Point Average (GPA):</strong> {studentInfo.gpa}</p>
//               <p><strong>Attendance:</strong> {studentInfo.attendance}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




import React, { useState } from "react";

const ReportCard = () => {
  // Sample data
  const studentInfo = {
    name: "AarZoo Maharjan",
    fatherName: "Rabindra Maharjan",
    motherName: "Rajani Maharjan",
    regNo: "IMS-25124",
    class: "10 A",
    dob: "2065-10-13",
    examName: "First Term Examination-2081",
    attendance: "89/89",
    subjects: [
      {
        name: "English",
        type: "TH",
        creditHour: 1.25,
        gradePoint: 3.6,
        grade: "A",
        finalGrade: "A",
      },
      {
        name: "Nepali",
        type: "TH",
        creditHour: 1.25,
        gradePoint: 2.4,
        grade: "C+",
        finalGrade: "C+",
      },
      {
        name: "Mathematics",
        type: "TH",
        creditHour: 1.25,
        gradePoint: 2.4,
        grade: "C+",
        finalGrade: "B",
      },
      {
        name: "Science",
        type: "TH",
        creditHour: 1.25,
        gradePoint: 2.4,
        grade: "C+",
        finalGrade: "C+",
      },
      {
        name: "Social Studies",
        type: "TH",
        creditHour: 1.25,
        gradePoint: 2.0,
        grade: "C",
        finalGrade: "C+",
      },
      {
        name: "Opt English",
        type: "TH",
        creditHour: 1,
        gradePoint: 2.8,
        grade: "B",
        finalGrade: "B",
      },
      {
        name: "Accountancy",
        type: "TH",
        creditHour: 1,
        gradePoint: 2.8,
        grade: "B",
        finalGrade: "B",
      },
    ],
    totalCreditHours: 16.5,
    gpa: 2.74,
  };

  // State variables for filters
  const [classLevel, setClassLevel] = useState("");
  const [section, setSection] = useState("");
  const [exam, setExam] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState(""); // ID state

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle filter logic (this can be expanded based on your data filtering requirements)
    console.log({
      classLevel,
      section,
      exam,
      year,
      id,
    });
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Student Marks</h3>
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
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-2">
                <label htmlFor="classSelect" className="form-label">
                  Class
                </label>
                <select
                  className="form-control"
                  id="classSelect"
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                >
                  <option value="">Select Class</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={10 - i}>
                      {10 - i}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="sectionSelect" className="form-label">
                  Section
                </label>
                <select
                  className="form-control"
                  id="sectionSelect"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option value="">Select Section</option>
                  {["A", "B", "C", "D", "E"].map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="examSelect" className="form-label">
                  Exam Term
                </label>
                <select
                  className="form-control"
                  id="examSelect"
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                >
                  <option value="">Select Exam Term</option>
                  {["First Term Examination", "Second Term Examination"].map(
                    (term, idx) => (
                      <React.Fragment key={idx}>
                        <option value={`${term.toLowerCase()}_th`}>
                          {term} (TH)
                        </option>
                        <option value={`${term.toLowerCase()}_pr`}>
                          {term} (PR)
                        </option>
                      </React.Fragment>
                    )
                  )}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="yearSelect" className="form-label">
                  Year
                </label>
                <select
                  className="form-control"
                  id="yearSelect"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {["2081", "2080"].map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="idInput" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idInput"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter ID"
                />
              </div>

              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary">
                  Filter
                </button>
              </div>
            </div>
          </form>

          {/* Report Card Content */}
          <div className="report-card">
            {/* Header Section */}
            <div className="student-info">
              <div className="student-left">
                <p><strong>NAME OF THE STUDENT:</strong> {studentInfo.name}</p>
                <p><strong>FATHER NAME:</strong> {studentInfo.fatherName}</p>
                <p><strong>MOTHER NAME:</strong> {studentInfo.motherName}</p>
              </div>
              <div className="student-right">
                <p><strong>REG NO.:</strong> {studentInfo.regNo}</p>
                <p><strong>CLASS:</strong> {studentInfo.class}</p>
                <p><strong>DOB:</strong> {studentInfo.dob}</p>
              </div>
            </div>

            {/* Exam Title */}
            <h3 className="exam-title">{studentInfo.examName}</h3>

            {/* Table */}
            <table className="report-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>SUBJECTS</th>
                  <th>CREDIT HOUR (CH)</th>
                  <th>GRADE POINT (GP)</th>
                  <th>GRADE</th>
                  <th>FINAL GRADE</th>
                  <th>REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {studentInfo.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {subject.name} ({subject.type})
                    </td>
                    <td>{subject.creditHour}</td>
                    <td>{subject.gradePoint}</td>
                    <td>{subject.grade}</td>
                    <td>{subject.finalGrade}</td>
                    <td>{}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer Section */}
            <div className="footer">
              <p><strong>Total Credit Hours:</strong> {studentInfo.totalCreditHours}</p>
              <p><strong>Grade Point Average (GPA):</strong> {studentInfo.gpa}</p>
                <p><strong>Attendance:</strong> {studentInfo.attendance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
