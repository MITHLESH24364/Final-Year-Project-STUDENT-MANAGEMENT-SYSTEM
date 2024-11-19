// import React, { useState } from "react";
// import studentData from "../Data/studentData"; // Ensure the correct data file is imported

// const ViewStudents = () => {
//   const [filters, setFilters] = useState({
//     class: "",
//     section: "",
//     orderBy: "name",
//   });

//   const [filteredStudents, setFilteredStudents] = useState(studentData);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     const filtered = studentData.filter(
//       (student) =>
//         (filters.class ? student.class === filters.class : true) &&
//         (filters.section ? student.section === filters.section : true)
//     );
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
//                   <option value="">All Classes</option>
//                   <option value="10">10</option>
//                   <option value="9">9</option>
//                   <option value="8">8</option>
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
//                   <option value="">All Sections</option>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                 </select>
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
//                   <option value="name">Name</option>
//                   <option value="roll">Roll</option>
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

//           {/* Students Table */}
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Students List</h5>
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>Select</th>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Class - Section</th>
//                         <th>ID</th>
//                         <th>Father's Phone</th>
//                         <th>Mother's Phone</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredStudents.map((student, index) => (
//                         <tr key={student.id}>
//                           <td>
//                             <input type="checkbox" className="form-check-input" />
//                           </td>
//                           <td>
//                             <img
//                               src={student.image || "assets/img/default.jpg"}
//                               alt="Student"
//                               style={{
//                                 width: "40px",
//                                 height: "40px",
//                                 borderRadius: "50%",
//                               }}
//                             />
//                           </td>
//                           <td>{student.name}</td>
//                           <td>
//                             {student.class} - {student.section}
//                           </td>
//                           <td>{student.id}</td>
//                           <td>{student.fatherPhone}</td>
//                           <td>{student.motherPhone}</td>
//                           <td>
//                             <button className="btn btn-primary btn-sm">
//                               Detail
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   {filteredStudents.length === 0 && (
//                     <p className="text-center">No students found.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewStudents;



import React, { useState } from "react";
import studentData from "../Data/studentData"; // Ensure the correct data file is imported

const ViewStudents = () => {
  const [filters, setFilters] = useState({
    class: "",
    section: "",
    orderBy: "name",
  });

  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilter = () => {
    // Apply filter only if both class and section are selected
    if (filters.class && filters.section) {
      const filtered = studentData.filter(
        (student) =>
          student.class === filters.class && student.section === filters.section
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents([]); // Reset students if filters are incomplete
    }
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
              {/* Class Filter */}
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

              {/* Section Filter */}
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

              {/* Order By Filter */}
              <div className="col-md-3">
                <label htmlFor="orderByFilter">Order By</label>
                <select
                  className="form-control"
                  name="orderBy"
                  id="orderByFilter"
                  value={filters.orderBy}
                  onChange={handleFilterChange}
                >
                  <option value="name">Name</option>
                  <option value="roll">Roll</option>
                </select>
              </div>

              {/* Apply Filter Button */}
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

          {/* Conditional Rendering: Display data only when both filters are selected */}
          {filters.class && filters.section ? (
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
                            <th>Name</th>
                            <th>Class - Section</th>
                            <th>ID</th>
                            <th>Father's Phone</th>
                            <th>Mother's Phone</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredStudents.map((student, index) => (
                            <tr key={student.id}>
                              <td>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </td>
                              <td>
                                <img
                                  src={
                                    student.image || "assets/img/default.jpg"
                                  }
                                  alt="Student"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                  }}
                                />
                              </td>
                              <td>{student.name}</td>
                              <td>
                                {student.class} - {student.section}
                              </td>
                              <td>{student.id}</td>
                              <td>{student.fatherPhone}</td>
                              <td>{student.motherPhone}</td>
                              <td>
                                <button className="btn btn-primary btn-sm">
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
            <p className="text-center mt-4">
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewStudents;
