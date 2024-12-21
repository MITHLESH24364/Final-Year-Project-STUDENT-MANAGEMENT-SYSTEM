// // import React, { useState, useEffect } from "react";

// // const ViewStudents = () => {
// //   const [filters, setFilters] = useState({
// //     class: "",
// //     section: "",
// //     orderBy: "name",
// //   });

// //   const [students, setStudents] = useState([]);
// //   const [filteredStudents, setFilteredStudents] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null); // For the modal
// //   const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

// //   // Fetch students data from backend
// //   const fetchStudents = async () => {
// //     const authToken = localStorage.getItem("authToken");

// //     if (!authToken) {
// //       console.error("Authentication token not found. Please log in.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:8080/sms/user/student/all", {
// //         headers: {
// //           Authorization: `Basic ${authToken}`,
// //         },
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         setStudents(data);
// //       } else {
// //         throw new Error("Error fetching students: " + response.statusText);
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   const handleFilterChange = (e) => {
// //     const { name, value } = e.target;
// //     setFilters({ ...filters, [name]: value });
// //   };

// //   const handleApplyFilter = () => {
// //     let filtered = [...students];

// //     if (filters.class && filters.section) {
// //       filtered = filtered.filter(
// //         (student) =>
// //           student.studentClass === filters.class && student.section === filters.section
// //       );

// //       if (filters.orderBy === "name") {
// //         filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
// //       } else if (filters.orderBy === "roll") {
// //         filtered.sort((a, b) => a.rollNo - b.rollNo);
// //       }

// //       setFilteredStudents(filtered);
// //     }
// //   };

// //   const handleDetailClick = (student) => {
// //     setSelectedStudent(student); // Set the selected student
// //     setIsModalOpen(true); // Open the modal
// //   };

// //   const closeModal = () => {
// //     setSelectedStudent(null); // Clear the selected student
// //     setIsModalOpen(false); // Close the modal
// //   };

// //   return (
// //     <div className="main-wrapper">
// //       <div className="page-wrapper">
// //         <div className="content container-fluid">
// //           {/* Page Header */}
// //           <div className="page-header">
// //             <div className="row">
// //               <div className="col-sm-12">
// //                 <div className="page-sub-header">
// //                   <h3 className="page-title">View Students</h3>
// //                   <ul className="breadcrumb">
// //                     <li className="breadcrumb-item">
// //                       <a href="/students">Students</a>
// //                     </li>
// //                     <li className="breadcrumb-item active">View Students</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Filter Section */}
// //           <form>
// //             <div className="row mb-4">
// //               <div className="col-md-2">
// //                 <label htmlFor="classFilter">Class</label>
// //                 <select
// //                   className="form-control"
// //                   name="class"
// //                   id="classFilter"
// //                   value={filters.class}
// //                   onChange={handleFilterChange}
// //                 >
// //                   <option value="">Select Class</option>
// //                   <option value="10">10</option>
// //                   <option value="9">9</option>
// //                   <option value="8">8</option>
// //                   <option value="7">7</option>
// //                   <option value="6">6</option>
// //                   <option value="5">5</option>
// //                   <option value="4">4</option>
// //                   <option value="3">3</option>
// //                   <option value="2">2</option>
// //                   <option value="1">1</option>
// //                 </select>
// //               </div>

// //               <div className="col-md-2">
// //                 <label htmlFor="sectionFilter">Section</label>
// //                 <select
// //                   className="form-control"
// //                   name="section"
// //                   id="sectionFilter"
// //                   value={filters.section}
// //                   onChange={handleFilterChange}
// //                 >
// //                   <option value="">Select Section</option>
// //                   <option value="A">A</option>
// //                   <option value="B">B</option>
// //                   <option value="C">C</option>
// //                   <option value="D">D</option>
// //                   <option value="E">E</option>
// //                 </select>
// //               </div>

// //               <div className="col-md-3">
// //                 <label htmlFor="orderByFilter">Order By</label>
// //                 <select
// //                   className="form-control"
// //                   name="orderBy"
// //                   id="orderByFilter"
// //                   value={filters.orderBy}
// //                   onChange={handleFilterChange}
// //                 >
// //                   <option value="name">Name</option>
// //                   <option value="roll">Roll</option>
// //                 </select>
// //               </div>

// //               <div className="col-md-2 mt-4">
// //                 <button
// //                   type="button"
// //                   className="btn btn-primary"
// //                   onClick={handleApplyFilter}
// //                 >
// //                   Apply Filter
// //                 </button>
// //               </div>
// //             </div>
// //           </form>

// //           {filters.class && filters.section && (
// //             <div className="row">
// //               <div className="col-md-12">
// //                 <div className="card">
// //                   <div className="card-body">
// //                     <h5 className="card-title">Students List</h5>
// //                     {filteredStudents.length > 0 ? (
// //                       <table className="table table-bordered">
// //                         <thead>
// //                           <tr>
// //                             <th>Select</th>
// //                             <th>Image</th>
// //                             <th>ID</th>
// //                             <th>Name</th>
// //                             <th>Class - Section</th>
// //                             <th>Roll No</th>
// //                             <th>Action</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {filteredStudents.map((student) => (
// //                             <tr key={student.accountId}>
// //                               <td>
// //                                 <input
// //                                   type="checkbox"
// //                                   className="form-check-input"
// //                                 />
// //                               </td>
// //                               <td>
// //                                 <img
// //                                   src={student.image || "assets/img/img-1.jpg"}
// //                                   alt="Student"
// //                                   style={{
// //                                     width: "40px",
// //                                     height: "40px",
// //                                     borderRadius: "50%",
// //                                   }}
// //                                 />
// //                               </td>
// //                               <td>{student.accountId}</td>
// //                               <td>{student.fullname}</td>
// //                               <td>
// //                                 {student.studentClass} - {student.section}
// //                               </td>
// //                               <td>{student.rollNo}</td>
// //                               <td>
// //                                 <button
// //                                   className="btn btn-primary btn-sm"
// //                                   onClick={() => handleDetailClick(student)}
// //                                 >
// //                                   Detail
// //                                 </button>
// //                               </td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     ) : (
// //                       <p className="text-center">No students found.</p>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Modal */}
// //           {selectedStudent && (
// //             <StudentDetailsModal
// //               student={selectedStudent}
// //               onClose={closeModal}
// //             />
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewStudents;


// import React, { useState, useEffect } from "react";

// const ViewStudents = () => {
//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     orderBy: "name",
//     name: "" // Name filter
//   });

//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null); // For the modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

//   // Fetch students data from backend
//   const fetchStudents = async () => {
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("Authentication token not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/sms/user/student/all", {
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setStudents(data);
//       } else {
//         throw new Error("Error fetching students: " + response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     let filtered = [...students];

//     // Filter by class, section, and name if provided
//     if (filters.class && filters.section) {
//       filtered = filtered.filter(
//         (student) =>
//           student.studentClass === filters.class &&
//           student.section === filters.section &&
//           (filters.name === "" || student.fullname.toLowerCase().includes(filters.name.toLowerCase()))
//       );

//       if (filters.orderBy === "name") {
//         filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
//       } else if (filters.orderBy === "roll") {
//         filtered.sort((a, b) => a.rollNo - b.rollNo);
//       }

//       setFilteredStudents(filtered);
//     }
//   };

//   const handleDetailClick = (student) => {
//     setSelectedStudent(student); // Set the selected student
//     setIsModalOpen(true); // Open the modal
//   };

//   const closeModal = () => {
//     setSelectedStudent(null); // Clear the selected student
//     setIsModalOpen(false); // Close the modal
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">View Students</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Students</a>
//                     </li>
//                     <li className="breadcrumb-item active">View Students</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <form>
//             <div className="row mb-4">
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
//                   <option value="10">10</option>
//                   <option value="9">9</option>
//                   <option value="8">8</option>
//                   <option value="7">7</option>
//                   <option value="6">6</option>
//                   <option value="5">5</option>
//                   <option value="4">4</option>
//                   <option value="3">3</option>
//                   <option value="2">2</option>
//                   <option value="1">1</option>
//                 </select>
//               </div>

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
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                   <option value="E">E</option>
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="nameFilter">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   id="nameFilter"
//                   value={filters.name}
//                   onChange={handleFilterChange}
//                   placeholder="Enter Name (Optional)"
//                 />
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="orderByFilter">Order By</label>
//                 <select
//                   className="form-control"
//                   name="orderBy"
//                   id="orderByFilter"
//                   value={filters.orderBy}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="name">Name</option>
//                   <option value="roll">Roll</option>
//                 </select>
//               </div>

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

//           {filters.class && filters.section && (
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">Students List</h5>
//                     {filteredStudents.length > 0 ? (
//                       <table className="table table-bordered">
//                         <thead>
//                           <tr>
//                             <th>Select</th>
//                             <th>Image</th>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Class - Section</th>
//                             <th>Roll No</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredStudents.map((student) => (
//                             <tr key={student.accountId}>
//                               <td>
//                                 <input
//                                   type="checkbox"
//                                   className="form-check-input"
//                                 />
//                               </td>
//                               <td>
//                                 <img
//                                   src={student.image || "assets/img/img-1.jpg"}
//                                   alt="Student"
//                                   style={{
//                                     width: "40px",
//                                     height: "40px",
//                                     borderRadius: "50%",
//                                   }}
//                                 />
//                               </td>
//                               <td>{student.accountId}</td>
//                               <td>{student.fullname}</td>
//                               <td>
//                                 {student.studentClass} - {student.section}
//                               </td>
//                               <td>{student.rollNo}</td>
//                               <td>
//                                 <button
//                                   className="btn btn-primary btn-sm"
//                                   onClick={() => handleDetailClick(student)}
//                                 >
//                                   Detail
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     ) : (
//                       <p className="text-center">No students found.</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Modal */}
//           {selectedStudent && (
//             <StudentDetailsModal
//               student={selectedStudent}
//               onClose={closeModal}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewStudents;




// import React, { useState, useEffect } from "react";

// const ViewStudents = () => {
//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     orderBy: "id", // Default sort by ID
//     name: "" // Name filter
//   });

//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);

//   // Fetch students data from backend
//   const fetchStudents = async () => {
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("Authentication token not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/sms/user/student/all", {
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setStudents(data);
//       } else {
//         throw new Error("Error fetching students: " + response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     let filtered = [...students];

//     // Filter by class and section
//     if (filters.class && filters.section) {
//       filtered = filtered.filter(
//         (student) =>
//           student.studentClass === filters.class &&
//           student.section === filters.section
//       );

//       // Apply name filter if provided
//       if (filters.name) {
//         filtered = filtered.filter(student =>
//           student.fullname.toLowerCase().includes(filters.name.toLowerCase())
//         );
//       }

//       // Sort by selected order (ID, Name, or Roll No.)
//       if (filters.orderBy === "id") {
//         filtered.sort((a, b) => a.accountId - b.accountId);
//       } else if (filters.orderBy === "name") {
//         filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
//       } else if (filters.orderBy === "roll") {
//         filtered.sort((a, b) => a.rollNo - b.rollNo);
//       }

//       setFilteredStudents(filtered);
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">View Students</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Students</a>
//                     </li>
//                     <li className="breadcrumb-item active">View Students</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <form>
//             <div className="row mb-4">
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
//                   <option value="10">10</option>
//                   <option value="9">9</option>
//                   <option value="8">8</option>
//                   <option value="7">7</option>
//                   <option value="6">6</option>
//                   <option value="5">5</option>
//                   <option value="4">4</option>
//                   <option value="3">3</option>
//                   <option value="2">2</option>
//                   <option value="1">1</option>
//                 </select>
//               </div>

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
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                   <option value="E">E</option>
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="nameFilter">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   id="nameFilter"
//                   value={filters.name}
//                   onChange={handleFilterChange}
//                   placeholder="Enter Name (Optional)"
//                 />
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="orderByFilter">Order By</label>
//                 <select
//                   className="form-control"
//                   name="orderBy"
//                   id="orderByFilter"
//                   value={filters.orderBy}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="id">ID</option>
//                   <option value="name">Name</option>
//                   <option value="roll">Roll</option>
//                 </select>
//               </div>

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

//           {filters.class && filters.section && (
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">Students List</h5>
//                     {filteredStudents.length > 0 ? (
//                       <table className="table table-bordered">
//                         <thead>
//                           <tr>
//                             <th>Select</th>
//                             <th>Image</th>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Class - Section</th>
//                             <th>Roll No</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredStudents.map((student) => (
//                             <tr key={student.accountId}>
//                               <td>
//                                 <input
//                                   type="checkbox"
//                                   className="form-check-input"
//                                 />
//                               </td>
//                               <td>
//                                 <img
//                                   src={student.image || "assets/img/img-1.jpg"}
//                                   alt="Student"
//                                   style={{
//                                     width: "40px",
//                                     height: "40px",
//                                     borderRadius: "50%",
//                                   }}
//                                 />
//                               </td>
//                               <td>{student.accountId}</td>
//                               <td>{student.fullname}</td>
//                               <td>
//                                 {student.studentClass} - {student.section}
//                               </td>
//                               <td>{student.rollNo}</td>
//                               <td>
//                                 <button
//                                   className="btn btn-primary btn-sm"
//                                   onClick={() => handleDetailClick(student)}
//                                 >
//                                   Detail
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     ) : (
//                       <p className="text-center">No students found.</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewStudents;






// import React, { useState, useEffect } from "react";

// const ViewStudents = () => {
//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     orderBy: "id", // Default sort by ID
//     name: "" // Name filter
//   });

//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);

//   // Fetch students data from backend
//   const fetchStudents = async () => {
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("Authentication token not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/sms/user/student/all", {
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setStudents(data);
//       } else {
//         throw new Error("Error fetching students: " + response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     let filtered = [...students];

//     // Filter by Name if provided
//     if (filters.name) {
//       filtered = filtered.filter(student =>
//         student.fullname.toLowerCase().includes(filters.name.toLowerCase())
//       );
//     } else {
//       // Filter by class and section if Name is empty
//       if (filters.class && filters.section) {
//         filtered = filtered.filter(
//           (student) =>
//             student.studentClass === filters.class &&
//             student.section === filters.section
//         );
//       }

//       // Sort by selected order (ID, Name, or Roll No.)
//       if (filters.orderBy === "id") {
//         filtered.sort((a, b) => a.accountId - b.accountId);
//       } else if (filters.orderBy === "name") {
//         filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
//       } else if (filters.orderBy === "roll") {
//         filtered.sort((a, b) => a.rollNo - b.rollNo);
//       }
//     }

//     setFilteredStudents(filtered);
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">View Students</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Students</a>
//                     </li>
//                     <li className="breadcrumb-item active">View Students</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <form>
//             <div className="row mb-4">
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
//                   <option value="10">10</option>
//                   <option value="9">9</option>
//                   <option value="8">8</option>
//                   <option value="7">7</option>
//                   <option value="6">6</option>
//                   <option value="5">5</option>
//                   <option value="4">4</option>
//                   <option value="3">3</option>
//                   <option value="2">2</option>
//                   <option value="1">1</option>
//                 </select>
//               </div>

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
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                   <option value="E">E</option>
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="nameFilter">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   id="nameFilter"
//                   value={filters.name}
//                   onChange={handleFilterChange}
//                   placeholder="Enter Name (Optional)"
//                 />
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="orderByFilter">Order By</label>
//                 <select
//                   className="form-control"
//                   name="orderBy"
//                   id="orderByFilter"
//                   value={filters.orderBy}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="id">ID</option>
//                   <option value="name">Name</option>
//                   <option value="roll">Roll</option>
//                 </select>
//               </div>

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

//           {filters.class || filters.section || filters.name ? (
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">Students List</h5>
//                     {filteredStudents.length > 0 ? (
//                       <table className="table table-bordered">
//                         <thead>
//                           <tr>
//                             <th>Select</th>
//                             <th>Image</th>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Class - Section</th>
//                             <th>Roll No</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredStudents.map((student) => (
//                             <tr key={student.accountId}>
//                               <td>
//                                 <input
//                                   type="checkbox"
//                                   className="form-check-input"
//                                 />
//                               </td>
//                               <td>
//                                 <img
//                                   src={student.image || "assets/img/img-1.jpg"}
//                                   alt="Student"
//                                   style={{
//                                     width: "40px",
//                                     height: "40px",
//                                     borderRadius: "50%",
//                                   }}
//                                 />
//                               </td>
//                               <td>{student.accountId}</td>
//                               <td>{student.fullname}</td>
//                               <td>
//                                 {student.studentClass} - {student.section}
//                               </td>
//                               <td>{student.rollNo}</td>
//                               <td>
//                                 <button
//                                   className="btn btn-primary btn-sm"
//                                   onClick={() => handleDetailClick(student)}
//                                 >
//                                   Detail
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     ) : (
//                       <p className="text-center">No students found.</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <p>Please enter filter criteria to view students.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewStudents;





import React, { useState, useEffect } from "react";

const ViewStudents = () => {
  const [filters, setFilters] = useState({
    class: "",
    section: "",
    orderBy: "id", // Default sort by ID
    name: "" // Name filter
  });

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Fetch students data from backend
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
        setStudents(data);
      } else {
        throw new Error("Error fetching students: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilter = () => {
    let filtered = [...students];

    // Filter by Name if only Name is entered
    if (filters.name) {
      filtered = filtered.filter(student =>
        student.fullname.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    // Filter by Class and Section only when Name is not provided
    if (!filters.name) {
      filtered = filtered.filter(
        (student) =>
          student.studentClass === filters.class &&
          student.section === filters.section
      );
    }

    // Sort by selected order (ID, Name, or Roll No.)
    if (filters.orderBy === "id") {
      filtered.sort((a, b) => a.accountId - b.accountId);
    } else if (filters.orderBy === "name") {
      filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
    } else if (filters.orderBy === "roll") {
      filtered.sort((a, b) => a.rollNo - b.rollNo);
    }

    setFilteredStudents(filtered);
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">View Students</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/students">Students</a>
                    </li>
                    <li className="breadcrumb-item active">View Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <form>
            <div className="row mb-4">
              <div className="col-md-2">
                <label htmlFor="classFilter">Class</label>
                <select
                  className="form-control"
                  name="class"
                  id="classFilter"
                  value={filters.class}
                  onChange={handleFilterChange}
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
                <label htmlFor="sectionFilter">Section</label>
                <select
                  className="form-control"
                  name="section"
                  id="sectionFilter"
                  value={filters.section}
                  onChange={handleFilterChange}
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="nameFilter">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="nameFilter"
                  value={filters.name}
                  onChange={handleFilterChange}
                  placeholder="Enter Name (Optional)"
                />
              </div>

              <div className="col-md-3">
                <label htmlFor="orderByFilter">Order By</label>
                <select
                  className="form-control"
                  name="orderBy"
                  id="orderByFilter"
                  value={filters.orderBy}
                  onChange={handleFilterChange}
                >
                  <option value="id">ID</option>
                  <option value="name">Name</option>
                  <option value="roll">Roll</option>
                </select>
              </div>

              <div className="col-md-2 mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleApplyFilter}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </form>

          {filters.class || filters.section || filters.name ? (
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Students List</h5>
                    {filteredStudents.length > 0 ? (
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Select</th>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class - Section</th>
                            <th>Roll No</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredStudents.map((student) => (
                            <tr key={student.accountId}>
                              <td>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </td>
                              <td>
                                <img
                                  src={student.image || "assets/img/img-1.jpg"}
                                  alt="Student"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                  }}
                                />
                              </td>
                              <td>{student.accountId}</td>
                              <td>{student.fullname}</td>
                              <td>
                                {student.studentClass} - {student.section}
                              </td>
                              <td>{student.rollNo}</td>
                              <td>
                                <button
                                  className="btn btn-primary btn-sm"
                                  onClick={() => handleDetailClick(student)}
                                >
                                  Detail
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-center">No students found.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Please enter filter criteria to view students.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;
