// import React, { useState } from "react";
// import studentData from "../Data/studentData";

// const AddAttendance = () => {
//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     attendanceDate: "",
//     orderBy: "name",
//   });

//   const [attendanceData, setAttendanceData] = useState(studentData); // Use imported data
//   const [isFiltered, setIsFiltered] = useState(false);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     setIsFiltered(true);
//   };

//   const handleAttendanceChange = (id, field) => {
//     setAttendanceData((prevData) =>
//       prevData.map((student) =>
//         student.id === id ? { ...student, [field]: !student[field] } : student
//       )
//     );
//   };

//   const handleSelectAll = (e) => {
//     const { checked } = e.target;
//     setAttendanceData((prevData) =>
//       prevData.map((student) =>
//         student.class === filters.class && student.section === filters.section
//           ? { ...student, present: checked }
//           : student
//       )
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Attendance Data:", attendanceData);
//   };

//   const filteredAttendanceData = [...attendanceData]
//     .filter(
//       (student) =>
//         student.class === filters.class && student.section === filters.section
//     )
//     .sort((a, b) => {
//       if (filters.orderBy === "name") {
//         return a.name.localeCompare(b.name); // Sort by name alphabetically
//       } else if (filters.orderBy === "roll") {
//         return a.roll - b.roll; // Sort by roll number numerically
//       }
//       return 0; // Default no sorting
//     });

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Student Attendance</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Student</a>
//                     </li>
//                     <li className="breadcrumb-item active">Attendance</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Tabs */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <ul className="nav nav-tabs">
//               {[
//                 "Add/Edit",
//                 "Recent",
//                 "Absentee",
//                 "Absentee Range",
//                 "Attendance Record",
//                 "Download",
//                 "Daily(Student)",
//                 "Monthly",
//                 "Attendance Chart",
//               ].map((tab, index) => (
//                 <li className="nav-item" key={index}>
//                   <a className={`nav-link ${index === 0 ? "active" : ""}`} href="#">
//                     {tab}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Filter Section */}
//           <form>
//             <div className="row mb-4">
//               {/* Class Filter */}
//               <div className="col-md-2">
//                 <label htmlFor="classFilter">Class</label>
//                 <select
//                   className="form-control"
//                   name="class"
//                   id="classFilter"
//                   value={filters.class}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Class</option>
//                   {["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"].map((cls) => (
//                     <option key={cls} value={cls}>
//                       {cls}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Section Filter */}
//               <div className="col-md-2">
//                 <label htmlFor="sectionFilter">Section</label>
//                 <select
//                   className="form-control"
//                   name="section"
//                   id="sectionFilter"
//                   value={filters.section}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Date Filter */}
//               <div className="col-md-3">
//                 <label htmlFor="attendanceDate">Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="attendanceDate"
//                   id="attendanceDate"
//                   value={filters.attendanceDate}
//                   onChange={handleFilterChange}
//                 />
//               </div>

//               {/* Order By Filter */}
//               <div className="col-md-3">
//                 <label htmlFor="orderByFilter">Order By</label>
//                 <select
//                   className="form-control"
//                   name="orderBy"
//                   id="orderByFilter"
//                   value={filters.orderBy}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="name">Order By Name</option>
//                   <option value="roll">Order By Roll</option>
//                 </select>
//               </div>

//               {/* Apply Filter Button */}
//               <div className="col-md-2 mt-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleApplyFilter}
//                 >
//                   Apply Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Attendance Table */}
//           {isFiltered && filteredAttendanceData.length > 0 && (
//             <div className="card card-table">
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="table-responsive">
//                     <table className="table table-hover table-center mb-0">
//                       <thead>
//                         <tr>
//                           <th>Image</th>
//                           <th>Students</th>
//                           <th>Class</th>
//                           <th>Section</th>
//                           <th>Roll Number</th>
//                           <th>
//                             Attendance
//                             <br />
//                             Select All
//                             <input
//                               type="checkbox"
//                               id="selectAllAttendance"
//                               onChange={handleSelectAll}
//                             />
//                           </th>
//                           <th>Late</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredAttendanceData.map((student) => (
//                           <tr key={student.id}>
//                             <td>
//                               <img
//                                 src="assets/img/img-01.jpg"
//                                 alt="Student"
//                                 style={{
//                                   width: "50px",
//                                   height: "50px",
//                                   borderRadius: "50%",
//                                 }}
//                               />
//                             </td>
//                             <td>{student.name}</td>
//                             <td>{student.class}</td>
//                             <td>{student.section}</td>
//                             <td>{student.roll}</td>
//                             <td>
//                               <input
//                                 type="checkbox"
//                                 className="attendance-checkbox"
//                                 checked={student.present}
//                                 onChange={() =>
//                                   handleAttendanceChange(student.id, "present")
//                                 }
//                               />
//                             </td>
//                             <td>
//                               <input
//                                 type="checkbox"
//                                 className="late-checkbox"
//                                 checked={student.late}
//                                 onChange={() =>
//                                   handleAttendanceChange(student.id, "late")
//                                 }
//                               />
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="mt-3">
//                     <button type="submit" className="btn btn-primary">
//                       Submit Attendance
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//           {isFiltered && filteredAttendanceData.length === 0 && (
//             <p>No students found for the selected filter.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAttendance;




// import React, { useState } from "react";
// import studentData from "../Data/studentData";

// const AddAttendance = () => {
//   // Get the current date in 'YYYY-MM-DD' format
//   const getCurrentDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     const day = String(today.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     attendanceDate: getCurrentDate(), // Auto-fill with today's date
//     orderBy: "name",
//   });

//   const [attendanceData, setAttendanceData] = useState(studentData); // Use imported data
//   const [isFiltered, setIsFiltered] = useState(false);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     setIsFiltered(true);
//   };

//   const handleAttendanceChange = (id, field) => {
//     setAttendanceData((prevData) =>
//       prevData.map((student) =>
//         student.id === id ? { ...student, [field]: !student[field] } : student
//       )
//     );
//   };

//   const handleSelectAll = (e) => {
//     const { checked } = e.target;
//     setAttendanceData((prevData) =>
//       prevData.map((student) =>
//         student.class === filters.class && student.section === filters.section
//           ? { ...student, present: checked }
//           : student
//       )
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Attendance Data:", attendanceData);
//   };

//   const filteredAttendanceData = [...attendanceData]
//     .filter(
//       (student) =>
//         student.class === filters.class && student.section === filters.section
//     )
//     .sort((a, b) => {
//       if (filters.orderBy === "name") {
//         return a.name.localeCompare(b.name); // Sort by name alphabetically
//       } else if (filters.orderBy === "roll") {
//         return a.roll - b.roll; // Sort by roll number numerically
//       }
//       return 0; // Default no sorting
//     });

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Student Attendance</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Student</a>
//                     </li>
//                     <li className="breadcrumb-item active">Attendance</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <form>
//             <div className="row mb-4">
//               {/* Class Filter */}
//               <div className="col-md-2">
//                 <label htmlFor="classFilter">Class</label>
//                 <select
//                   className="form-control"
//                   name="class"
//                   id="classFilter"
//                   value={filters.class}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Class</option>
//                   {["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"].map((cls) => (
//                     <option key={cls} value={cls}>
//                       {cls}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Section Filter */}
//               <div className="col-md-2">
//                 <label htmlFor="sectionFilter">Section</label>
//                 <select
//                   className="form-control"
//                   name="section"
//                   id="sectionFilter"
//                   value={filters.section}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Date Filter */}
//               <div className="col-md-3">
//                 <label htmlFor="attendanceDate">Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="attendanceDate"
//                   id="attendanceDate"
//                   value={filters.attendanceDate}
//                   onChange={handleFilterChange}
//                 />
//               </div>

//               {/* Order By Filter */}
//               <div className="col-md-3">
//                 <label htmlFor="orderByFilter">Order By</label>
//                 <select
//                   className="form-control"
//                   name="orderBy"
//                   id="orderByFilter"
//                   value={filters.orderBy}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="name">Order By Name</option>
//                   <option value="roll">Order By Roll</option>
//                 </select>
//               </div>

//               {/* Apply Filter Button */}
//               <div className="col-md-2 mt-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleApplyFilter}
//                 >
//                   Apply Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Attendance Table */}
//           {isFiltered && filteredAttendanceData.length > 0 && (
//             <div className="card card-table">
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="table-responsive">
//                     <table className="table table-hover table-center mb-0">
//                       <thead>
//                         <tr>
//                           <th>Image</th>
//                           <th>Students</th>
//                           <th>Class</th>
//                           <th>Section</th>
//                           <th>Roll Number</th>
//                           <th>
//                             Attendance
//                             <br />
//                             Select All
//                             <input
//                               type="checkbox"
//                               id="selectAllAttendance"
//                               onChange={handleSelectAll}
//                             />
//                           </th>
//                           <th>Late</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredAttendanceData.map((student) => (
//                           <tr key={student.id}>
//                             <td>
//                               <img
//                                 src="assets/img/img-01.jpg"
//                                 alt="Student"
//                                 style={{
//                                   width: "50px",
//                                   height: "50px",
//                                   borderRadius: "50%",
//                                 }}
//                               />
//                             </td>
//                             <td>{student.name}</td>
//                             <td>{student.class}</td>
//                             <td>{student.section}</td>
//                             <td>{student.roll}</td>
//                             <td>
//                               <input
//                                 type="checkbox"
//                                 className="attendance-checkbox"
//                                 checked={student.present}
//                                 onChange={() =>
//                                   handleAttendanceChange(student.id, "present")
//                                 }
//                               />
//                             </td>
//                             <td>
//                               <input
//                                 type="checkbox"
//                                 className="late-checkbox"
//                                 checked={student.late}
//                                 onChange={() =>
//                                   handleAttendanceChange(student.id, "late")
//                                 }
//                               />
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="mt-3">
//                     <button type="submit" className="btn btn-primary">
//                       Submit Attendance
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//           {isFiltered && filteredAttendanceData.length === 0 && (
//             <p>No students found for the selected filter.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAttendance;




// import React, { useState, useEffect } from "react";

// const AddAttendance = () => {
//   const getCurrentDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     const day = String(today.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     attendanceDate: getCurrentDate(),
//     orderBy: "name",
//   });

//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [isFiltered, setIsFiltered] = useState(false);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const authToken = localStorage.getItem("authToken");
//       if (!authToken) {
//         console.error("Authentication token not found. Please log in.");
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:8080/sms/user/student/all", {
//           headers: {
//             Authorization: `Basic ${authToken}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setStudents(
//             data.map((student) => ({
//               ...student,
//               present: false,
//               late: false,
//             }))
//           );
//         } else {
//           console.error("Error fetching students:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     const filtered = students.filter(
//       (student) =>
//         student.studentClass === filters.class &&
//         student.section === filters.section
//     );

//     filtered.sort((a, b) => {
//       if (filters.orderBy === "name") {
//         return a.fullname.localeCompare(b.fullname);
//       } else if (filters.orderBy === "roll") {
//         return a.rollNo - b.rollNo;
//       }
//       return 0;
//     });

//     setFilteredStudents(filtered);
//     setIsFiltered(true);
//   };

//   const handleAttendanceChange = (id, field) => {
//     setFilteredStudents((prevData) =>
//       prevData.map((student) =>
//         student.accountId === id ? { ...student, [field]: !student[field] } : student
//       )
//     );
//   };

//   const handleSelectAll = (e) => {
//     const { checked } = e.target;
//     setFilteredStudents((prevData) =>
//       prevData.map((student) => ({
//         ...student,
//         present: checked,
//       }))
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitted Attendance Data:", filteredStudents);

//     const authToken = localStorage.getItem("authToken");
//     try {
//       const response = await fetch("http://localhost:8080/sms/attendance/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Basic ${authToken}`,
//         },
//         body: JSON.stringify(filteredStudents),
//       });

//       if (response.ok) {
//         console.log("Attendance submitted successfully!");
//       } else {
//         console.error("Error submitting attendance:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <h3 className="page-title">Student Attendance</h3>
//           </div>

//           <form>
//             {/* Filters */}
//             <div className="row mb-4">
//               <div className="col-md-2">
//                 <label>Class</label>
//                 <select
//                   className="form-control"
//                   name="class"
//                   value={filters.class}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Class</option>
//                   {["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"].map((cls) => (
//                     <option key={cls} value={cls}>
//                       {cls}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-2">
//                 <label>Section</label>
//                 <select
//                   className="form-control"
//                   name="section"
//                   value={filters.section}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Section</option>
//                   {["A", "B", "C", "D", "E"].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-3">
//                 <label>Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="attendanceDate"
//                   value={filters.attendanceDate}
//                   onChange={handleFilterChange}
//                 />
//               </div>
//               <div className="col-md-3">
//                 <label>Order By</label>
//                 <select
//                   className="form-control"
//                   name="orderBy"
//                   value={filters.orderBy}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="name">Name</option>
//                   <option value="roll">Roll</option>
//                 </select>
//               </div>
//               <div className="col-md-2 mt-4">
//                 <button type="button" className="btn btn-primary" onClick={handleApplyFilter}>
//                   Apply Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           {isFiltered && (
//             <form onSubmit={handleSubmit}>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th>Student Name</th>
//                     <th>Roll</th>
//                     <th>Present</th>
//                     <th>Late</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStudents.map((student) => (
//                     <tr key={student.accountId}>
//                       <td>{student.fullname}</td>
//                       <td>{student.rollNo}</td>
//                       <td>
//                         <input
//                           type="checkbox"
//                           checked={student.present}
//                           onChange={() => handleAttendanceChange(student.accountId, "present")}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="checkbox"
//                           checked={student.late}
//                           onChange={() => handleAttendanceChange(student.accountId, "late")}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button type="submit" className="btn btn-primary mt-3">
//                 Submit Attendance
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAttendance;




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

  useEffect(() => {
    const fetchStudents = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        console.error("Authentication token not found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/sms/user/student/get/",id, {
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
    console.log("Submitted Attendance Data:", filteredStudents);

    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch("http://localhost:8080/sms/attendance/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify(filteredStudents),
      });

      if (response.ok) {
        console.log("Attendance submitted successfully!");
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
        </div>
      </div>
    </div>
  );
};

export default AddAttendance;
