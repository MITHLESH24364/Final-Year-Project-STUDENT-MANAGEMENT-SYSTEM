import React, { useState, useEffect } from "react";
import StudentDetailsModal from "./StudentDetailsModal";

const ViewStudents = () => {
  const [filters, setFilters] = useState({
    class: "",
    section: "",
    orderBy: "id", // Default sort by ID
    name: "" // Name filter
  });

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({}); // For modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

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
  }, [selectedStudent]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilter = () => {
    let filtered = [...students];

    if (filters.name) {
      filtered = filtered.filter(student =>
        student.fullname.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (!filters.name) {
      filtered = filtered.filter(
        (student) =>
          student.studentClass === filters.class &&
          student.section === filters.section
      );
    }

    if (filters.orderBy === "id") {
      filtered.sort((a, b) => a.accountId - b.accountId);
    } else if (filters.orderBy === "name") {
      filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
    } else if (filters.orderBy === "roll") {
      filtered.sort((a, b) => a.rollNo - b.rollNo);
    }

    setFilteredStudents(filtered);
  };

  const handleDetailClick = (student) => {
    console.log("The student dtails are")
    setIsModalOpen(true);
    setSelectedStudent(student)
    console.log(selectedStudent)
  };

  const closeModal = () => {
    // setSelectedStudent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
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
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={10 - i}>{10 - i}</option>
                  ))}
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
                  {["A", "B", "C", "D", "E"].map(section => (
                    <option key={section} value={section}>{section}</option>
                  ))}
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
                                  Details
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

          <StudentDetailsModal
            student={selectedStudent}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;




// import React, { useState, useEffect } from "react";
// import StudentDetailsModal from "./StudentDetailsModal";

// const ViewStudents = () => {
//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     orderBy: "id",
//     name: "",
//   });

//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [classes, setClasses] = useState([]); // Dynamic classes and sections
//   const [sections, setSections] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch students
//   const fetchStudents = async () => {
//     const authToken = localStorage.getItem("authToken");
//     if (!authToken) {
//       console.error("Authentication token not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/sms/user/student/all", {
//         headers: { Authorization: `Basic ${authToken}` },
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

//   // Fetch classes
//   const fetchClasses = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/sms/classes/all", {
//         headers: {
//           Authorization: `Basic ${localStorage.getItem("authToken")}`,
//         },
//       }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setClasses(data);
//         const uniqueSections = [...new Set(data.map((cls) => cls.section))];
//         setSections(uniqueSections);
//       } else {
//         throw new Error("Error fetching classes: " + response.statusText);
//       }
//     } catch (error) {
//       console.error("Error fetching classes:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//     fetchClasses();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     let filtered = [...students];

//     if (filters.name) {
//       filtered = filtered.filter((student) =>
//         student.fullname.toLowerCase().includes(filters.name.toLowerCase())
//       );
//     }

//     if (!filters.name) {
//       filtered = filtered.filter(
//         (student) =>
//           student.studentClass === filters.class &&
//           student.section === filters.section
//       );
//     }

//     if (filters.orderBy === "id") {
//       filtered.sort((a, b) => a.accountId - b.accountId);
//     } else if (filters.orderBy === "name") {
//       filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
//     } else if (filters.orderBy === "roll") {
//       filtered.sort((a, b) => a.rollNo - b.rollNo);
//     }

//     setFilteredStudents(filtered);
//   };

//   const handleDetailClick = (student) => {
//     setIsModalOpen(true);
//     setSelectedStudent(student);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
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
//                   {classes.map((cls) => (
//                     <option key={cls.id} value={cls.className}>
//                       {cls.className}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionFilter">Section</label>
//                 {/* <select
//                   className="form-control"
//                   name="section"
//                   id="sectionFilter"
//                   value={filters.section}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Section</option>
//                   {sections.map((section, index) => (
//                     <option key={index} value={section}>
//                       {section}
//                     </option>
//                   ))}
//                 </select> */}

// <select
//                    className="form-control"
//                    name="section"
//                    id="sectionFilter"
//                    value={filters.section}
//                    onChange={handleFilterChange}
//                  >
//                    <option value="">Select Section</option>
//                    {["A", "B", "C", "D", "E"].map(section => (
//                      <option key={section} value={section}>{section}</option>
//                    ))}
//                  </select>
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
//           {/* Existing student list rendering */}
//           <StudentDetailsModal
//             student={selectedStudent}
//             isOpen={isModalOpen}
//             onClose={closeModal}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewStudents;
