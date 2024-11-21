// Format Code

// import React, { useState } from "react";

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

//   // State variables for filters
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState(""); // ID state

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle filter logic (this can be expanded based on your data filtering requirements)
//     console.log({
//       classLevel,
//       section,
//       exam,
//       year,
//       id,
//     });
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
                
//                 <option value="">Select Exam Term</option>
//                 {["First Term Examination", "Second Term Examination"].map((term, idx) => (
//                 <option key={idx} value={term.toLowerCase()}>
//                     {term}
//                 </option>
//                 ))}

//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

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
//                     <td>{}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Footer Section */}
//             <div className="footer">
//               <p><strong>Total Credit Hours:</strong> {studentInfo.totalCreditHours}</p>
//               <p><strong>Grade Point Average (GPA):</strong> {studentInfo.gpa}</p>
//                 <p><strong>Attendance:</strong> {studentInfo.attendance}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;



// Second Code

// import React, { useState } from "react";

// const ReportCard = () => {
//   // Sample data for multiple students
//   const studentData = [
//     {
//       id: "IMS-25124",
//       name: "AarZoo Maharjan",
//       fatherName: "Rabindra Maharjan",
//       motherName: "Rajani Maharjan",
//       regNo: "IMS-25124",
//       class: "10 A",
//       dob: "2065-10-13",
//       examName: "First Term Examination-2081",
//       attendance: "89/89",
//       subjects: [
//         { name: "English", type: "TH", creditHour: 1.25, gradePoint: 3.6, grade: "A", finalGrade: "A" },
//         { name: "Nepali", type: "TH", creditHour: 1.25, gradePoint: 2.4, grade: "C+", finalGrade: "C+" },
//         { name: "Mathematics", type: "TH", creditHour: 1.25, gradePoint: 2.4, grade: "C+", finalGrade: "B" },
//         // Add more subjects as needed
//       ],
//       totalCreditHours: 16.5,
//       gpa: 2.74,
//     },
//     {
//       id: "IMS-25125",
//       name: "John Doe",
//       fatherName: "Robert Doe",
//       motherName: "Mary Doe",
//       regNo: "IMS-25125",
//       class: "10 B",
//       dob: "2065-05-12",
//       examName: "First Term Examination-2081",
//       attendance: "85/89",
//       subjects: [
//         { name: "English", type: "TH", creditHour: 1.25, gradePoint: 3.8, grade: "A", finalGrade: "A" },
//         { name: "Nepali", type: "TH", creditHour: 1.25, gradePoint: 3.0, grade: "B+", finalGrade: "B+" },
//         // Add more subjects as needed
//       ],
//       totalCreditHours: 16.5,
//       gpa: 3.0,
//     },
//     // Add more student objects as needed
//   ];

//   // State variables for filters
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");
//   const [filteredStudents, setFilteredStudents] = useState(studentData);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Filter logic
//     const filtered = studentData.filter((student) => {
//       const matchClass = classLevel ? student.class.startsWith(classLevel) : true;
//       const matchSection = section ? student.class.endsWith(section) : true;
//       const matchExam = exam ? student.examName.toLowerCase().includes(exam) : true;
//       const matchYear = year ? student.examName.includes(year) : true;
//       const matchId = id ? student.id === id : true;
//       return matchClass && matchSection && matchExam && matchYear && matchId;
//     });

//     setFilteredStudents(filtered);
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <h3 className="page-title">Student Marks</h3>
//           </div>

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label>Class</label>
//                 <select className="form-control" value={classLevel} onChange={(e) => setClassLevel(e.target.value)}>
//                   <option value="">All Classes</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label>Section</label>
//                 <select className="form-control" value={section} onChange={(e) => setSection(e.target.value)}>
//                   <option value="">All Sections</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label>Exam Term</label>
//                 <select className="form-control" value={exam} onChange={(e) => setExam(e.target.value)}>
//                   <option value="">All Exams</option>
//                   {["First Term Examination", "Second Term Examination"].map((term, idx) => (
//                     <option key={idx} value={term.toLowerCase()}>
//                       {term}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label>Year</label>
//                 <select className="form-control" value={year} onChange={(e) => setYear(e.target.value)}>
//                   <option value="">All Years</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label>ID</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>
//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Report Card Section */}
//           {filteredStudents.length > 0 ? (
//             filteredStudents.map((student, index) => (
//               <div key={index} className="report-card">
//                 <h4>{student.name}'s Report Card</h4>
//                 <p>Class: {student.class}</p>
//                 <p>Exam: {student.examName}</p>
//                 <p>GPA: {student.gpa}</p>
//                 {/* Render subjects */}
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>S.N</th>
//                       <th>Subject</th>
//                       <th>Grade</th>
//                       <th>Final Grade</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {student.subjects.map((sub, idx) => (
//                       <tr key={idx}>
//                         <td>{idx + 1}</td>
//                         <td>{sub.name}</td>
//                         <td>{sub.grade}</td>
//                         <td>{sub.finalGrade}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ))
//           ) : (
//             <p>No students found for the selected filters.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;





// Third Code

// import React, { useState } from "react";

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

//   // State variables for filters
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState(""); // ID state

//   // State to store filtered data
//   const [filteredData, setFilteredData] = useState(studentInfo.subjects);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Filtering logic
//     const filteredSubjects = studentInfo.subjects.filter((subject) => {
//       return (
//         (!classLevel || studentInfo.class.includes(classLevel)) &&
//         (!section || studentInfo.class.includes(section)) &&
//         (!exam || studentInfo.examName.toLowerCase().includes(exam)) &&
//         (!year || studentInfo.examName.includes(year)) &&
//         (!id || studentInfo.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredSubjects);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Report Card Content */}
//           <div className="report-card">
//             {/* Header Section */}
//             <div className="student-info">
//               <div className="student-left">
//                 <p>
//                   <strong>NAME OF THE STUDENT:</strong> {studentInfo.name}
//                 </p>
//                 <p>
//                   <strong>FATHER NAME:</strong> {studentInfo.fatherName}
//                 </p>
//                 <p>
//                   <strong>MOTHER NAME:</strong> {studentInfo.motherName}
//                 </p>
//               </div>
//               <div className="student-right">
//                 <p>
//                   <strong>REG NO.:</strong> {studentInfo.regNo}
//                 </p>
//                 <p>
//                   <strong>CLASS:</strong> {studentInfo.class}
//                 </p>
//                 <p>
//                   <strong>DOB:</strong> {studentInfo.dob}
//                 </p>
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
//                 {filteredData.map((subject, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>
//                       {subject.name} ({subject.type})
//                     </td>
//                     <td>{subject.creditHour}</td>
//                     <td>{subject.gradePoint}</td>
//                     <td>{subject.grade}</td>
//                     <td>{subject.finalGrade}</td>
//                     <td>{}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Footer Section */}
//             <div className="footer">
//               <p>
//                 <strong>Total Credit Hours:</strong> {studentInfo.totalCreditHours}
//               </p>
//               <p>
//                 <strong>Grade Point Average (GPA):</strong> {studentInfo.gpa}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




// Fourth Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";
// const ReportCard = () => {
//   // State variables for filters
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState(""); // ID state

//   // State to store filtered data
//   const [filteredData, setFilteredData] = useState(studentInfo.subjects);
//   const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true); // Set form as submitted

//     // Filtering logic
//     const filteredSubjects = studentInfo.subjects.filter((subject) => {
//       return (
//         (!classLevel || studentInfo.class.includes(classLevel)) &&
//         (!section || studentInfo.class.includes(section)) &&
//         (!exam || studentInfo.examName.toLowerCase().includes(exam)) &&
//         (!year || studentInfo.examName.includes(year)) &&
//         (!id || studentInfo.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredSubjects);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Render Student Information Only After Filter Button Clicked */}
//           {isSubmitted && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong> {studentInfo.name}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {studentInfo.fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {studentInfo.motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {studentInfo.regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {studentInfo.class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {studentInfo.dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{studentInfo.examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong> {studentInfo.totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {studentInfo.gpa}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




// Fifth Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   // State variables for filters
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState(""); // ID state

//   // State to store filtered data
//   const [filteredData, setFilteredData] = useState(studentInfo.subjects);
//   const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true); // Set form as submitted

//     // Filtering logic
//     const filteredSubjects = studentInfo.subjects.filter((subject) => {
//       return (
//         (!classLevel || studentInfo.class.includes(classLevel)) &&
//         (!section || studentInfo.class.includes(section)) &&
//         (!exam || studentInfo.examName.toLowerCase().includes(exam)) &&
//         (!year || studentInfo.examName.includes(year)) &&
//         (!id || studentInfo.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredSubjects);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Render Student Information Only After Filter Button Clicked */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong>{" "}
//                     {filteredData[0].fullName} {/* Assuming filteredData has the correct student data */}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {filteredData[0].fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {filteredData[0].motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {filteredData[0].regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {filteredData[0].class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {filteredData[0].dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{filteredData[0].examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong> {filteredData[0].totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {filteredData[0].gpa}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* If no students match filter */}
//           {isSubmitted && filteredData.length === 0 && <p>No students match the filter criteria.</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




// Sixth Code


// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");

//   const [filteredData, setFilteredData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Filtering logic
//     const filteredStudents = studentInfo.filter((student) => {
//       const [classNum, classSec] = student.class.split(" ");
//       const examYear = student.examName.split("-")[1];

//       return (
//         (!classLevel || classNum === classLevel) &&
//         (!section || classSec === section) &&
//         (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
//         (!year || examYear === year) &&
//         (!id || student.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredStudents);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Render Student Information */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div>
//               {filteredData.map((student, idx) => (
//                 <div key={idx} className="report-card">
//                   <div className="student-info">
//                     <p>
//                       <strong>Name:</strong> {student.fullName}
//                     </p>
//                     <p>
//                       <strong>Father:</strong> {student.fatherName}
//                     </p>
//                     <p>
//                       <strong>Mother:</strong> {student.motherName}
//                     </p>
//                     <p>
//                       <strong>Reg No:</strong> {student.regNo}
//                     </p>
//                   </div>

//                   <h3 className="exam-title">{student.examName}</h3>
//                   <table className="report-table">
//                     <thead>
//                       <tr>
//                         <th>S.N</th>
//                         <th>Subject</th>
//                         <th>Credit Hour</th>
//                         <th>Grade Point</th>
//                         <th>Grade</th>
//                         <th>Final Grade</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {student.subjects.map((subject, i) => (
//                         <tr key={i}>
//                           <td>{i + 1}</td>
//                           <td>{subject.name}</td>
//                           <td>{subject.creditHour}</td>
//                           <td>{subject.gradePoint}</td>
//                           <td>{subject.grade}</td>
//                           <td>{subject.finalGrade}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   <p>
//                     <strong>Total Credit Hours:</strong>{" "}
//                     {student.totalCreditHours}
//                   </p>
//                   <p>
//                     <strong>GPA:</strong> {student.gpa}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* If no students match the filter */}
//           {isSubmitted && filteredData.length === 0 && (
//             <p>No students match the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;



// Seventh Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");

//   const [filteredData, setFilteredData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Filtering logic
//     const filteredStudents = studentInfo.filter((student) => {
//       const [classNum, classSec] = student.class.split(" ");
//       const examYear = student.examName.split("-")[1];

//       return (
//         (!classLevel || classNum === classLevel) &&
//         (!section || classSec === section) &&
//         (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
//         (!year || examYear === year) &&
//         (!id || student.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredStudents);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Render Student Information Only After Filter Button Clicked */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong>{" "}
//                     {filteredData[0].fullName}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {filteredData[0].fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {filteredData[0].motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {filteredData[0].regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {filteredData[0].class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {filteredData[0].dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{filteredData[0].examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData[0].subjects.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{/* Add remarks logic if needed */}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong>{" "}
//                   {filteredData[0].totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {filteredData[0].gpa}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* If no students match filter */}
//           {isSubmitted && filteredData.length === 0 && (
//             <p>No students match the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;





// Eighth Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");

//   const [filteredData, setFilteredData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Filtering logic
//     const filteredStudents = studentInfo.filter((student) => {
//       const [classNum, classSec] = student.class.split(" ");
//       const examYear = student.examName.split("-")[1];

//       return (
//         (!classLevel || classNum === classLevel) &&
//         (!section || classSec === section) &&
//         (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
//         (!year || examYear === year) &&
//         (!id || student.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredStudents);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Render Student Information Only After Filter Button Clicked */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong>{" "}
//                     {filteredData[0].fullName}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {filteredData[0].fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {filteredData[0].motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {filteredData[0].regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {filteredData[0].class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {filteredData[0].dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{filteredData[0].examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData[0].subjects.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{/* Add remarks logic if needed */}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong>{" "}
//                   {filteredData[0].totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {filteredData[0].gpa}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* If no students match filter */}
//           {isSubmitted && filteredData.length === 0 && (
//             <p>No students match the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




// Ninth Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");

//   const [filteredData, setFilteredData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isFilterEmpty, setIsFilterEmpty] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Check if no filters are applied
//     if (!classLevel && !section && !exam && !year && !id) {
//       setFilteredData([]);
//       setIsFilterEmpty(true);
//       return;
//     }

//     // Filtering logic
//     const filteredStudents = studentInfo.filter((student) => {
//       const [classNum, classSec] = student.class.split(" ");
//       const examYear = student.examName.split("-")[1];

//       return (
//         (!classLevel || classNum === classLevel) &&
//         (!section || classSec === section) &&
//         (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
//         (!year || examYear === year) &&
//         (!id || student.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredStudents);
//     setIsFilterEmpty(false); // Reset empty filter flag if data is found
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Warnings and Messages */}
//           {isFilterEmpty && (
//             <p className="text-danger">Please select at least one filter.</p>
//           )}

//           {/* Render Student Information */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong>{" "}
//                     {filteredData[0].fullName}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {filteredData[0].fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {filteredData[0].motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {filteredData[0].regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {filteredData[0].class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {filteredData[0].dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{filteredData[0].examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData[0].subjects.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{/* Add remarks logic if needed */}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong>{" "}
//                   {filteredData[0].totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {filteredData[0].gpa}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* If no students match filter */}
//           {isSubmitted && filteredData.length === 0 && !isFilterEmpty && (
//             <p>No students match the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;





// Tenth Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");

//   const [filteredData, setFilteredData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isFilterEmpty, setIsFilterEmpty] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Check if no filters are applied
//     if (!classLevel && !section && !exam && !year && !id) {
//       setFilteredData([]);
//       setIsFilterEmpty(true);
//       return;
//     }

//     // Filtering logic
//     const filteredStudents = studentInfo.filter((student) => {
//       const [classNum, classSec] = student.class.split(" ");
//       const examYear = student.examName.split("-")[1];

//       return (
//         (!classLevel || classNum === classLevel) &&
//         (!section || classSec === section) &&
//         (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
//         (!year || examYear === year) &&
//         (!id || student.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredStudents);
//     setIsFilterEmpty(false); // Reset empty filter flag if data is found
//   };

//   const handleReset = () => {
//     setClassLevel("");
//     setSection("");
//     setExam("");
//     setYear("");
//     setId("");
//     setFilteredData([]);
//     setIsSubmitted(false);
//     setIsFilterEmpty(false);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary ms-2"
//                   onClick={handleReset}
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Warnings and Messages */}
//           {isFilterEmpty && (
//             <p className="text-danger">Please select at least one filter.</p>
//           )}

//           {/* Render Student Information */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong>{" "}
//                     {filteredData[0].fullName}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {filteredData[0].fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {filteredData[0].motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {filteredData[0].regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {filteredData[0].class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {filteredData[0].dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{filteredData[0].examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData[0].subjects.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{/* Add remarks logic if needed */}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong>{" "}
//                   {filteredData[0].totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {filteredData[0].gpa}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* If no students match filter */}
//           {isSubmitted && filteredData.length === 0 && !isFilterEmpty && (
//             <p>No students match the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




// Eleventh Code

// import React, { useState } from "react";
// import studentInfo from "../data/studentInfo";

// const ReportCard = () => {
//   const [classLevel, setClassLevel] = useState("");
//   const [section, setSection] = useState("");
//   const [exam, setExam] = useState("");
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");

//   const [filteredData, setFilteredData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isFilterEmpty, setIsFilterEmpty] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Check if no filters are applied
//     if (!classLevel && !section && !exam && !year && !id) {
//       setFilteredData([]);
//       setIsFilterEmpty(true);
//       return;
//     }

//     // Filtering logic
//     const filteredStudents = studentInfo.filter((student) => {
//       const [classNum, classSec] = student.class.split(" "); // classNum is "10", classSec is "A"
//       const examYear = student.examName.split("-")[1]; // Extract year from the exam name

//       return (
//         (!classLevel || classNum === classLevel) &&
//         (!section || classSec === section) &&
//         (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
//         (!year || examYear === year) &&
//         (!id || student.regNo.includes(id))
//       );
//     });

//     setFilteredData(filteredStudents);
//     setIsFilterEmpty(false); // Reset empty filter flag if data is found
//   };

//   const handleReset = () => {
//     setClassLevel("");
//     setSection("");
//     setExam("");
//     setYear("");
//     setId("");
//     setFilteredData([]);
//     setIsSubmitted(false);
//     setIsFilterEmpty(false);
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

//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">
//                   Class
//                 </label>
//                 <select
//                   className="form-control"
//                   id="classSelect"
//                   value={classLevel}
//                   onChange={(e) => setClassLevel(e.target.value)}
//                 >
//                   <option value="">Select Class</option>
//                   {[...Array(10)].map((_, i) => (
//                     <option key={i + 1} value={10 - i}>
//                       {10 - i}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">
//                   Section
//                 </label>
//                 <select
//                   className="form-control"
//                   id="sectionSelect"
//                   value={section}
//                   onChange={(e) => setSection(e.target.value)}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E", "F", "G"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">
//                   Exam Term
//                 </label>
//                 <select
//                   className="form-control"
//                   id="examSelect"
//                   value={exam}
//                   onChange={(e) => setExam(e.target.value)}
//                 >
//                   <option value="">Select Exam Term</option>
//                   {["First Term Examination", "Second Term Examination"].map(
//                     (term, idx) => (
//                       <option key={idx} value={term.toLowerCase()}>
//                         {term}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">
//                   Year
//                 </label>
//                 <select
//                   className="form-control"
//                   id="yearSelect"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select Year</option>
//                   {["2081", "2080"].map((yr) => (
//                     <option key={yr} value={yr}>
//                       {yr}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="idInput" className="form-label">
//                   ID
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="idInput"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="Enter ID"
//                 />
//               </div>

//               <div className="col-md-2 d-flex align-items-end">
//                 <button type="submit" className="btn btn-primary">
//                   Filter
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary ms-2"
//                   onClick={handleReset}
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Warnings and Messages */}
//           {isFilterEmpty && (
//             <p className="text-danger">Please select at least one filter.</p>
//           )}

//           {/* Render Student Information */}
//           {isSubmitted && filteredData.length > 0 && (
//             <div className="report-card">
//               {/* Header Section */}
//               <div className="student-info">
//                 <div className="student-left">
//                   <p>
//                     <strong>NAME OF THE STUDENT:</strong>{" "}
//                     {filteredData[0].fullName}
//                   </p>
//                   <p>
//                     <strong>FATHER NAME:</strong> {filteredData[0].fatherName}
//                   </p>
//                   <p>
//                     <strong>MOTHER NAME:</strong> {filteredData[0].motherName}
//                   </p>
//                 </div>
//                 <div className="student-right">
//                   <p>
//                     <strong>REG NO.:</strong> {filteredData[0].regNo}
//                   </p>
//                   <p>
//                     <strong>CLASS:</strong> {filteredData[0].class}
//                   </p>
//                   <p>
//                     <strong>DOB:</strong> {filteredData[0].dob}
//                   </p>
//                 </div>
//               </div>

//               {/* Exam Title */}
//               <h3 className="exam-title">{filteredData[0].examName}</h3>

//               {/* Table */}
//               <table className="report-table">
//                 <thead>
//                   <tr>
//                     <th>S.N</th>
//                     <th>SUBJECTS</th>
//                     <th>CREDIT HOUR (CH)</th>
//                     <th>GRADE POINT (GP)</th>
//                     <th>GRADE</th>
//                     <th>FINAL GRADE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData[0].subjects.map((subject, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {subject.name} ({subject.type})
//                       </td>
//                       <td>{subject.creditHour}</td>
//                       <td>{subject.gradePoint}</td>
//                       <td>{subject.grade}</td>
//                       <td>{subject.finalGrade}</td>
//                       <td>{/* Add remarks logic if needed */}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Footer Section */}
//               <div className="footer">
//                 <p>
//                   <strong>Total Credit Hours:</strong>{" "}
//                   {filteredData[0].totalCreditHours}
//                 </p>
//                 <p>
//                   <strong>GPA:</strong> {filteredData[0].gpa}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* If no students match filter */}
//           {isSubmitted && filteredData.length === 0 && !isFilterEmpty && (
//             <p>No students match the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;




// Twelveth Code

import React, { useState } from "react";
import studentInfo from "../data/studentInfo";

const ReportCard = () => {
  const [classLevel, setClassLevel] = useState("");
  const [section, setSection] = useState("");
  const [exam, setExam] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFilterEmpty, setIsFilterEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Check if no filters are applied
    if (!classLevel && !section && !exam && !year && !id) {
      setFilteredData([]);
      setIsFilterEmpty(true);
      return;
    }

    // Filtering logic
    const filteredStudents = studentInfo.filter((student) => {
      const [classNum, classSec] = student.class.split(" "); // classNum is "10", classSec is "A"
      const examYear = student.examName.split("-")[1]; // Extract year from the exam name

      return (
        (!classLevel || classNum === classLevel) &&
        (!section || classSec === section) &&
        (!exam || student.examName.toLowerCase().includes(exam.toLowerCase())) &&
        (!year || examYear === year) &&
        (!id || student.regNo.includes(id))
      );
    });

    setFilteredData(filteredStudents);
    setIsFilterEmpty(false); // Reset empty filter flag if data is found
  };

  const handleReset = () => {
    setClassLevel("");
    setSection("");
    setExam("");
    setYear("");
    setId("");
    setFilteredData([]);
    setIsSubmitted(false);
    setIsFilterEmpty(false);
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
                  {["A", "B", "C", "D", "E", "F", "G"].map((sec) => (
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
                      <option key={idx} value={term.toLowerCase()}>
                        {term}
                      </option>
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
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>

          {/* Warnings and Messages */}
          {isFilterEmpty && (
            <p className="text-danger">Please select at least one filter.</p>
          )}

          {/* Render Student Information */}
          {isSubmitted && filteredData.length > 0 && (
            <div className="report-cards-container">
              {filteredData.map((student, idx) => (
                <div key={idx} className="report-card" style={{ marginBottom: "20px" }}>
                  {/* Header Section */}
                  <div className="student-info">
                    <div className="student-left">
                      <p>
                        <strong>NAME OF THE STUDENT:</strong> {student.fullName}
                      </p>
                      <p>
                        <strong>FATHER NAME:</strong> {student.fatherName}
                      </p>
                      <p>
                        <strong>MOTHER NAME:</strong> {student.motherName}
                      </p>
                    </div>
                    <div className="student-right">
                      <p>
                        <strong>REG NO.:</strong> {student.regNo}
                      </p>
                      <p>
                        <strong>CLASS:</strong> {student.class}
                      </p>
                      <p>
                        <strong>DOB:</strong> {student.dob}
                      </p>
                    </div>
                  </div>

                  {/* Exam Title */}
                  <h3 className="exam-title">{student.examName}</h3>

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
                      {student.subjects.map((subject, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {subject.name} ({subject.type})
                          </td>
                          <td>{subject.creditHour}</td>
                          <td>{subject.gradePoint}</td>
                          <td>{subject.grade}</td>
                          <td>{subject.finalGrade}</td>
                          <td>{/* Add remarks logic if needed */}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Footer Section */}
                  <div className="footer">
                    <p>
                      <strong>Total Credit Hours:</strong> {student.totalCreditHours}
                    </p>
                    <p>
                      <strong>GPA:</strong> {student.gpa}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* If no students match filter */}
          {isSubmitted && filteredData.length === 0 && !isFilterEmpty && (
            <p>No students match the filter criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
