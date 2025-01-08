// import React, { useState, useEffect } from "react";
// import GridView from "../components/GridView";

// const ViewTeachers = () => {
//   const [viewMode, setViewMode] = useState("listView");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage, setEntriesPerPage] = useState(10);
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

//   // Pagination Logic
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentTeachers = filteredTeachers.slice(indexOfFirstEntry, indexOfLastEntry);

//   const totalPages = Math.ceil(filteredTeachers.length / entriesPerPage);

//   const handleEntriesChange = (event) => {
//     setEntriesPerPage(parseInt(event.target.value));
//     setCurrentPage(1); // Reset to first page when entries per page change
//   };

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
//         <select className="ml-2" value={entriesPerPage} onChange={handleEntriesChange}>
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
//                 <th>Mobile</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentTeachers.map((teacher, index) => (
//                 <tr key={teacher.accountId}>
//                   <td>{indexOfFirstEntry + index + 1}</td>
//                   <td>
//                     <img
//                       src={teacher.image || "mks.jpg"} // Fallback for missing images
//                       alt={teacher.fullname}
//                       className="rounded-circle"
//                       width="35"
//                     />
//                   </td>
//                   <td>{teacher.fullname}</td>
//                   <td>{teacher.department || "N/A"}</td>
//                   <td>{teacher.gender || "N/A"}</td>
//                   <td>{teacher.phoneNumber}</td>
//                   <td>{teacher.email}</td>
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
//               Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredTeachers.length)} of {filteredTeachers.length} entries
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





import React, { useState, useEffect } from "react";
import GridView from "../components/GridView";
import { useNavigate } from "react-router-dom";

const ViewTeachers = () => {
  const [viewMode, setViewMode] = useState("listView");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  const navigate = useNavigate();

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

  const handleEdit = (teacherId) => {
    navigate(`/edit-teacher/${teacherId}`);
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
                      src={`assets/img/profiles/${teacher.image || "mks.jpg"}`} // Fallback for missing images
                      // alt={teacher.fullname}
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
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(teacher.id)}
                    >
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
