// import React, { useState } from "react";
// import GridView from "../components/GridView";
// import teachersData from "../data/teachersData";

// const ViewTeachers = () => {
//   const [viewMode, setViewMode] = useState("listView");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage, setEntriesPerPage] = useState(10);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(teachersData.length / entriesPerPage);

//   // Get the current page's teachers
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentTeachers = teachersData.slice(indexOfFirstEntry, indexOfLastEntry);

//   // Handle entries per page change
//   const handleEntriesChange = (event) => {
//     setEntriesPerPage(parseInt(event.target.value));
//     setCurrentPage(1); // Reset to first page when entries per page change
//   };

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-6">
//           <h4>All Teachers</h4>
//         </div>
//       </div>

//       {/* View Mode Switcher */}
//       <div className="view-switcher mt-4">
//         <button
//           className={`btn ${viewMode === "listView" ? "btn-primary" : "btn-secondary"}`}
//           onClick={() => setViewMode("listView")}
//         >
//           List View
//         </button>
//         <button
//           className={`btn ml-2 ${viewMode === "gridView" ? "btn-primary" : "btn-secondary"}`}
//           onClick={() => setViewMode("gridView")}
//         >
//           Grid View
//         </button>
//       </div>

//       {/* Filter by entries */}
//       <div className="mt-3">
//         <label>Show</label>
//         <select
//           className="ml-2"
//           value={entriesPerPage}
//           onChange={handleEntriesChange}
//         >
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//           <option value={30}>30</option>
//           <option value={50}>50</option>
//           <option value={100}>100</option>
//         </select>
//         <span className="ml-2">entries</span>
//       </div>

//       {/* Table View */}
//       <div className="mt-4">
//         {viewMode === "listView" ? (
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th>S.N</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Department</th>
//                 <th>Gender</th>
//                 <th>Education</th>
//                 <th>Mobile</th>
//                 <th>Email</th>
//                 <th>Joining Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentTeachers.map((teacher, index) => (
//                 <tr key={index}>
//                   <td>{indexOfFirstEntry + index + 1}</td>
//                   <td>
//                     <img
//                       src={teacher.profileImage}
//                       alt={teacher.name}
//                       className="rounded-circle"
//                       width="35"
//                     />
//                   </td>
//                   <td>{teacher.name}</td>
//                   <td>{teacher.department}</td>
//                   <td>{teacher.gender}</td>
//                   <td>{teacher.education}</td>
//                   <td>{teacher.mobile}</td>
//                   <td>{teacher.email}</td>
//                   <td>{teacher.joiningDate}</td>
//                   <td>
//                     <button className="btn btn-sm btn-primary">
//                       <i className="fa fa-pen"></i>
//                     </button>
//                     <br />
//                     <button className="btn btn-sm btn-danger ml-2">
//                       <i className="fa fa-trash"></i>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <GridView teachers={currentTeachers} />
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="pagination mt-4">
//         <div className="fit">
//           <div>
//             <span>
//               Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, teachersData.length)} of {teachersData.length} entries
//             </span>
//           </div>

//           {/* Pagination Controls */}
//           <div className="ml-auto d-flex">
//             <button
//               className="btn btn-secondary"
//               onClick={() => setCurrentPage(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             {[...Array(totalPages).keys()].map((num) => (
//               <button
//                 key={num}
//                 className={`btn ${currentPage === num + 1 ? "btn-primary" : "btn-secondary"} ml-1`}
//                 onClick={() => handlePageChange(num + 1)}
//               >
//                 {num + 1}
//               </button>
//             ))}
//             <button
//               className="btn btn-secondary ml-2"
//               onClick={() => setCurrentPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewTeachers;




// import React, { useState, useEffect } from "react";

// const ViewTeachers = () => {
//   const [filters, setFilters] = useState({
//     subject: "",
//     orderBy: "id", // Default sort by ID
//     name: "" // Name filter
//   });

//   const [teachers, setTeachers] = useState([]);
//   const [filteredTeachers, setFilteredTeachers] = useState([]);

//   // Fetch teachers data from the backend
//   const fetchTeachers = async () => {
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("Authentication token not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/sms/user/staff/all", {
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Fetched teachers:", data); // Debugging
//         setTeachers(data);
//         setFilteredTeachers(data); // Display all data by default
//       } else {
//         throw new Error("Error fetching teachers: " + response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTeachers();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const handleApplyFilter = () => {
//     let filtered = [...teachers];

//     // Apply filters only if criteria are specified
//     if (filters.name) {
//       filtered = filtered.filter(teacher =>
//         teacher.fullname.toLowerCase().includes(filters.name.toLowerCase())
//       );
//     }

//     if (filters.subject) {
//       filtered = filtered.filter(teacher => teacher.subject === filters.subject);
//     }

//     // Sort by selected order (ID or Name)
//     if (filters.orderBy === "id") {
//       filtered.sort((a, b) => a.accountId - b.accountId);
//     } else if (filters.orderBy === "name") {
//       filtered.sort((a, b) => a.fullname.localeCompare(b.fullname));
//     }

//     setFilteredTeachers(filtered);
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
//                   <h3 className="page-title">View Teachers</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/teachers">Teachers</a>
//                     </li>
//                     <li className="breadcrumb-item active">View Teachers</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <form>
//             <div className="row mb-4">
//               <div className="col-md-3">
//                 <label htmlFor="subjectFilter">Subject</label>
//                 <select
//                   className="form-control"
//                   name="subject"
//                   id="subjectFilter"
//                   value={filters.subject}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Subject</option>
//                   <option value="Math">Math</option>
//                   <option value="Science">Science</option>
//                   <option value="English">English</option>
//                   <option value="Social">Social</option>
//                   <option value="Computer">Computer</option>
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
//                 </select>
//               </div>

//               <div className="col-md-3 mt-4">
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

//           {filteredTeachers.length > 0 ? (
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">Teachers List</h5>
//                     <table className="table table-bordered">
//                       <thead>
//                         <tr>
//                           <th>ID</th>
//                           <th>Name</th>
//                           <th>Department</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredTeachers.map((teacher) => (
//                           <tr key={teacher.accountId}>
//                             <td>{teacher.id}</td>
//                             <td>{teacher.fullname}</td>
//                             <td>{teacher.department}</td>
//                             <td>
//                               <button
//                                 className="btn btn-primary btn-sm"
//                                 onClick={() => console.log("View details for", teacher)}
//                               >
//                                 Detail
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <p className="text-center">No teachers found. Please adjust the filter criteria.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewTeachers;



import React, { useState, useEffect } from "react";
import GridView from "../components/GridView";

const ViewTeachers = () => {
  const [viewMode, setViewMode] = useState("listView");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  // Fetch teachers data from the backend
  const fetchTeachers = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("Authentication token not found. Please log in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/sms/user/staff/all", {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched teachers:", data); // Debugging
        setTeachers(data);
        setFilteredTeachers(data); // Display all data by default
      } else {
        throw new Error("Error fetching teachers: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Pagination Logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentTeachers = filteredTeachers.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(filteredTeachers.length / entriesPerPage);

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page when entries per page change
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h4>All Teachers</h4>
        </div>
      </div>

      {/* View Mode Switcher */}
      <div className="view-switcher mt-4">
        <button
          className={`btn ${viewMode === "listView" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setViewMode("listView")}
        >
          List View
        </button>
        <button
          className={`btn ml-2 ${viewMode === "gridView" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setViewMode("gridView")}
        >
          Grid View
        </button>
      </div>

      {/* Filter by entries */}
      <div className="mt-3">
        <label>Show</label>
        <select className="ml-2" value={entriesPerPage} onChange={handleEntriesChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="ml-2">entries</span>
      </div>

      {/* Table View */}
      <div className="mt-4">
        {viewMode === "listView" ? (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Image</th>
                <th>Name</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTeachers.map((teacher, index) => (
                <tr key={teacher.accountId}>
                  <td>{indexOfFirstEntry + index + 1}</td>
                  <td>
                    <img
                      src={teacher.image || "mks.jpg"} // Fallback for missing images
                      alt={teacher.fullname}
                      className="rounded-circle"
                      width="35"
                    />
                  </td>
                  <td>{teacher.fullname}</td>
                  <td>{teacher.department || "N/A"}</td>
                  <td>{teacher.gender || "N/A"}</td>
                  <td>{teacher.phoneNumber}</td>
                  <td>{teacher.email}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-pen"></i>
                    </button>
                    <br />
                    <button className="btn btn-sm btn-danger ml-2">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <GridView teachers={currentTeachers} />
        )}
      </div>

      {/* Pagination */}
      <div className="pagination mt-4">
        <div className="fit">
          <div>
            <span>
              Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredTeachers.length)} of {filteredTeachers.length} entries
            </span>
          </div>

          {/* Pagination Controls */}
          <div className="ml-auto d-flex">
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num}
                className={`btn ${currentPage === num + 1 ? "btn-primary" : "btn-secondary"} ml-1`}
                onClick={() => handlePageChange(num + 1)}
              >
                {num + 1}
              </button>
            ))}
            <button
              className="btn btn-secondary ml-2"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeachers;
