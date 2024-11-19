// import React, { useState } from "react";



// const AddMarks = () => {
//   // States for form controls
//   const [exam, setExam] = useState('first_term');
//   const [classLevel, setClassLevel] = useState('10');
//   const [section, setSection] = useState('A');
//   const [year, setYear] = useState('2081');
//   const [subject, setSubject] = useState('science');
//   const [orderBy, setOrderBy] = useState('id');

//   // Sample student data (You can fetch it from an API)
//   const students = [
//     { name: 'Rubin Shrestha', id: 'IMS-24291' },
//     { name: 'Saranshu Amatya', id: 'IMS-24388' },
//     { name: 'Anjina Maharjan', id: 'IMS-24742' },
//     // Add more students as needed
//   ];

//   // State to store marks input values
//   const [marks, setMarks] = useState({
//     'IMS-24291': '',
//     'IMS-24388': '',
//     'IMS-24742': '',
//     // Add more student IDs as needed
//   });

//   // Handle input changes for marks
//   const handleMarksChange = (id, value) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle the form submission, such as sending data to an API
//     console.log(marks);
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
//                     <li className="breadcrumb-item"><a href="students.html">Student</a></li>
//                     <li className="breadcrumb-item active">Marks Add/Edit</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Navigation Tabs */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <ul className="nav nav-tabs">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Add/Edit</a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Filter Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-3">
//                 <label htmlFor="examSelect" className="form-label">Exam</label>
//                 <select className="form-control" id="examSelect" value={exam} onChange={(e) => setExam(e.target.value)}>
//                   <option value="first_term">First Term Examination</option>
//                   <option value="second_term">Second Term Examination</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">Class</label>
//                 <select className="form-control" id="classSelect" value={classLevel} onChange={(e) => setClassLevel(e.target.value)}>
//                   <option value="10">10</option>
//                   <option value="9">9</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">Section</label>
//                 <select className="form-control" id="sectionSelect" value={section} onChange={(e) => setSection(e.target.value)}>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">Year</label>
//                 <select className="form-control" id="yearSelect" value={year} onChange={(e) => setYear(e.target.value)}>
//                   <option value="2081">2081</option>
//                   <option value="2080">2080</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="subjectSelect" className="form-label">Subject</label>
//                 <select className="form-control" id="subjectSelect" value={subject} onChange={(e) => setSubject(e.target.value)}>
//                   <option value="science">Science</option>
//                   <option value="math">Math</option>
//                 </select>
//               </div>
//               <div className="col-md-1">
//                 <label htmlFor="orderBySelect" className="form-label">Order By</label>
//                 <select className="form-control" id="orderBySelect" value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
//                   <option value="id">ID</option>
//                   <option value="name">Name</option>
//                 </select>
//               </div>
//             </div>

//             {/* Table Section */}
//             <div className="table-container">
//               <table className="table table-hover table-bordered">
//                 <thead className="fixed-header">
//                   <tr>
//                     <th>Name</th>
//                     <th>Student ID</th>
//                     <th>Marks (75)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {students.map((student) => (
//                     <tr key={student.id}>
//                       <td>{student.name}</td>
//                       <td>{student.id}</td>
//                       <td>
//                         <input
//                           type="number"
//                           className="form-control"
//                           value={marks[student.id] || ''}
//                           placeholder="Enter marks"
//                           onChange={(e) => handleMarksChange(student.id, e.target.value)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-4 text-end">
//               <button type="submit" className="btn btn-primary">Save Results</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMarks;


// import React, { useState } from "react";
// import students from "../Data/students";

// const AddMarks = () => {
//   // States for form controls
//   const [exam, setExam] = useState('first_term');
//   const [classLevel, setClassLevel] = useState('10');
//   const [section, setSection] = useState('A');
//   const [year, setYear] = useState('2081');
//   const [subject, setSubject] = useState('science');

//   // Filter students based on class and section
//   const filteredStudents = students.filter(student => student.class === classLevel && student.section === section);

//   // State to store marks input values
//   const [marks, setMarks] = useState({
//     'IMS-24291': '',
//     'IMS-24388': '',
//     'IMS-24742': '',
//     // Add more student IDs as needed
//   });

//   // Handle input changes for marks
//   const handleMarksChange = (id, value) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle the form submission, such as sending data to an API
//     const resultData = {
//       exam,
//       classLevel,
//       section,
//       year,
//       subject,
//       marks
//     };
//     console.log(resultData);
//     // You can replace the console.log with actual submission logic (API request, etc.)
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
//                     <li className="breadcrumb-item"><a href="students.html">Student</a></li>
//                     <li className="breadcrumb-item active">Marks Add/Edit</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Filter Section for Class and Section */}
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-3">
//               <div className="col-md-2">
//                 <label htmlFor="classSelect" className="form-label">Class</label>
//                 <select className="form-control" id="classSelect" value={classLevel} onChange={(e) => setClassLevel(e.target.value)}>
//                   <option value="10">10</option>
//                   <option value="9">9</option>
//                     <option value="8">8</option>
//                     <option value="7">7</option>
//                     <option value="6">6</option>
//                     <option value="5">5</option>
//                     <option value="4">4</option>
//                     <option value="3">3</option>
//                     <option value="2">2</option>
//                     <option value="1">1</option>

//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="sectionSelect" className="form-label">Section</label>
//                 <select className="form-control" id="sectionSelect" value={section} onChange={(e) => setSection(e.target.value)}>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                   <option value="E">E</option>
//                 </select>
//               </div>

//               {/* Other form controls for Exam, Year, and Subject */}
//               <div className="col-md-2">
//                 <label htmlFor="examSelect" className="form-label">Exam</label>
//                 <select className="form-control" id="examSelect" value={exam} onChange={(e) => setExam(e.target.value)}>
//                   <option value="first_term">First Term Examination (TH) </option>
//                   <option value="first_term">First Term Examination (PR) </option>
//                   <option value="second_term">Second Term Examination (TH) </option>
//                   <option value="second_term">Second Term Examination (PR) </option>

//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="yearSelect" className="form-label">Year</label>
//                 <select className="form-control" id="yearSelect" value={year} onChange={(e) => setYear(e.target.value)}>
//                   <option value="2081">2081</option>
//                   <option value="2080">2080</option>
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label htmlFor="subjectSelect" className="form-label">Subject</label>
//                 <select className="form-control" id="subjectSelect" value={subject} onChange={(e) => setSubject(e.target.value)}>
//                   <option value="science">Science</option>
//                   <option value="math">Math</option>
//                     <option value="english">English</option>
//                     <option value="nepali">Nepali</option>
//                     <option value="social">Social</option>
//                     <option value="computer">Computer</option>
//                     <option value="health">Health</option>
//                     <option value="moral">Moral</option>
//                     <option value="opt_math">Optional Math</option>
//                     <option value="accountancy">Accountancy</option>
//                     <option value="opt_english">Optional English</option>
//                     <option value="opt_science">Optional Science</option>
//                     <option value="opt_computer">Optional Computer</option>

//                 </select>
//               </div>
//             </div>

//             {/* Table Section */}
//             <div className="table-container">
//               <table className="table table-hover table-bordered">
//                 <thead className="fixed-header">
//                   <tr>
//                     <th>Name</th>
//                     <th>Student ID</th>
//                     <th>Marks (75)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStudents.map((student) => (
//                     <tr key={student.id}>
//                       <td>{student.name}</td>
//                       <td>{student.id}</td>
//                       <td>
//                         <input
//                           type="number"
//                           className="form-control"
//                           value={marks[student.id] || ''}
//                           placeholder="Enter marks"
//                           onChange={(e) => handleMarksChange(student.id, e.target.value)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-4 text-end">
//               <button type="submit" className="btn btn-primary">Save Results</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMarks;




import React, { useState } from "react";
import students from "../Data/students";

const AddMarks = () => {
  // States for form controls
  const [exam, setExam] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');

  // Filter students based on class and section
  const filteredStudents = students.filter(student => 
    (student.class === classLevel && student.section === section) || !classLevel || !section
  );

  // State to store marks input values
  const [marks, setMarks] = useState({});

  // Handle input changes for marks
  const handleMarksChange = (id, value) => {
    setMarks(prevMarks => ({
      ...prevMarks,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    const resultData = {
      exam,
      classLevel,
      section,
      year,
      subject,
      marks
    };
    console.log(resultData);
    // Replace console.log with actual submission logic (e.g., API call)
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
                    <li className="breadcrumb-item"><a href="students.html">Student</a></li>
                    <li className="breadcrumb-item active">Marks Add/Edit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter Section for Class, Section, Exam Term, Year, and Subject */}
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-2">
                <label htmlFor="classSelect" className="form-label">Class</label>
                <select 
                  className="form-control" 
                  id="classSelect" 
                  value={classLevel} 
                  onChange={(e) => setClassLevel(e.target.value)}
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
                  value={section} 
                  onChange={(e) => setSection(e.target.value)}
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
                <label htmlFor="examSelect" className="form-label">Exam Term</label>
                <select 
                  className="form-control" 
                  id="examSelect" 
                  value={exam} 
                  onChange={(e) => setExam(e.target.value)}
                >
                  <option value="">Select Exam Term</option>
                  <option value="first_term_th">First Term Examination (TH)</option>
                  <option value="first_term_pr">First Term Examination (PR)</option>
                  <option value="second_term_th">Second Term Examination (TH)</option>
                  <option value="second_term_pr">Second Term Examination (PR)</option>

                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="yearSelect" className="form-label">Year</label>
                <select 
                  className="form-control" 
                  id="yearSelect" 
                  value={year} 
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  <option value="2081">2081</option>
                  <option value="2080">2080</option>
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="subjectSelect" className="form-label">Subject</label>
                <select 
                  className="form-control" 
                  id="subjectSelect" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Select Subject</option>
                  <option value="science">Science</option>
                  <option value="math">Math</option>
                  <option value="english">English</option>
                  <option value="nepali">Nepali</option>
                  <option value="social">Social</option>
                  <option value="computer">Computer</option>
                  <option value="health">Health</option>
                  <option value="moral">Moral</option>
                  <option value="opt_math">Optional Math</option>
                  <option value="accountancy">Accountancy</option>
                  <option value="opt_english">Optional English</option>
                  <option value="opt_science">Optional Science</option>
                  <option value="opt_computer">Optional Computer</option>
                </select>
              </div>
            </div>

            {/* Render the table only if all filters are selected */}
            {classLevel && section && exam && subject && year && (
              <div className="table-container">
                <table className="table table-hover table-bordered">
                  <thead className="fixed-header">
                    <tr>
                      <th>Name</th>
                      <th>Student ID</th>
                      <th>Marks (75)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.id}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={marks[student.id] || ''}
                            placeholder="Enter marks"
                            onChange={(e) => handleMarksChange(student.id, e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-4 text-end">
              <button type="submit" className="btn btn-primary">Save Results</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMarks;

