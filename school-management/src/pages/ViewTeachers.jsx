// import React, { useState } from "react";
// import { Tab, Tabs, Table, Card, Button } from "react-bootstrap";

// const ViewTeachers = () => {
//   const [teachers, setTeachers] = useState([
//     {
//       id: 1,
//       name: "Tiger Nixon",
//       department: "Architect",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "123 456 7890",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic1.jpg",
//     },
//     {
//       id: 2,
//       name: "Garrett Winters",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 654 3210",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic2.jpg",
//     },
//     // Add more sample data as needed
//   ]);

//   return (
//     <div className="container-fluid">
//       <div className="row page-titles">
//         <div className="col-sm-6">
//           <h4>All Teachers</h4>
//         </div>
//         <div className="col-sm-6 text-right">
//           <Button className="btn btn-primary">+ Add New</Button>
//         </div>
//       </div>

//       <Tabs defaultActiveKey="listView" id="teachers-view-tabs">
//         {/* List View */}
//         <Tab eventKey="listView" title="List View">
//           <div className="mt-4">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Department</th>
//                   <th>Gender</th>
//                   <th>Education</th>
//                   <th>Mobile</th>
//                   <th>Email</th>
//                   <th>Joining Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {teachers.map((teacher) => (
//                   <tr key={teacher.id}>
//                     <td>
//                       <img
//                         src={teacher.profileImage}
//                         alt={teacher.name}
//                         className="rounded-circle"
//                         width="35"
//                       />
//                     </td>
//                     <td>{teacher.name}</td>
//                     <td>{teacher.department}</td>
//                     <td>{teacher.gender}</td>
//                     <td>{teacher.education}</td>
//                     <td>{teacher.mobile}</td>
//                     <td>{teacher.email}</td>
//                     <td>{teacher.joiningDate}</td>
//                     <td>
//                       <Button variant="primary" size="sm">
//                         Edit
//                       </Button>
//                       <Button variant="danger" size="sm" className="ml-2">
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Tab>

//         {/* Grid View */}
//         <Tab eventKey="gridView" title="Grid View">
//           <div className="row mt-4">
//             {teachers.map((teacher) => (
//               <div className="col-lg-4 col-md-6" key={teacher.id}>
//                 <Card>
//                   <Card.Img
//                     variant="top"
//                     src={teacher.profileImage}
//                     className="rounded-circle mx-auto mt-3"
//                     style={{ width: "100px" }}
//                   />
//                   <Card.Body className="text-center">
//                     <Card.Title>{teacher.name}</Card.Title>
//                     <Card.Text>{teacher.education}</Card.Text>
//                     <Card.Text>
//                       <strong>{teacher.gender}</strong>
//                     </Card.Text>
//                     <Card.Text>{teacher.email}</Card.Text>
//                     <Button variant="outline-primary" size="sm">
//                       Read More
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// };

// export default ViewTeachers;






// import React, { useState } from "react";
// import GridView from "../components/GridView";

// const ViewTeachers = () => {
//   const [viewMode, setViewMode] = useState("listView");

//   const teachers = [
//     {
//       id: 1,
//       name: "Tiger Nixon",
//       department: "Architect",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "123 456 7890",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic1.jpg",
//     },
//     {
//       id: 2,
//       name: "Garrett Winters",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 654 3210",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic2.jpg",
//     },
//     // Add more sample data as needed
//   ];

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-6">
//           <h4>All Teachers</h4>
//         </div>
//         <div className="col-sm-6 text-right">
//           <button className="btn btn-primary">+ Add New</button>
//         </div>
//       </div>

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

//       <div className="mt-4">
//         {viewMode === "listView" ? (
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
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
//               {teachers.map((teacher) => (
//                 <tr key={teacher.id}>
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
//                     <button className="btn btn-sm btn-primary">Edit</button>
//                     <button className="btn btn-sm btn-danger ml-2">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <GridView teachers={teachers} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewTeachers;







// import React, { useState } from "react";
// import GridView from "../components/GridView";

// const ViewTeachers = () => {
//   const [viewMode, setViewMode] = useState("listView");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage, setEntriesPerPage] = useState(10);

//   const teachers = [
//     {
//       id: 1,
//       name: "Tiger Nixon",
//       department: "Architect",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "123 456 7890",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic1.jpg",
//     },
//     {
//       id: 2,
//       name: "Garrett Winters",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 654 3210",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic2.jpg",
//     },
//     {
//       id: 3,
//       name: "Ashton Cox",
//       department: "Junior Technical Author",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "321 654 9870",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic3.jpg",
//     },
//     {
//       id: 4,
//       name: "Cedric Kelly",
//       department: "Senior Javascript Developer",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "567 789 3450",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic4.jpg",
//     },
//     {
//       id: 5,
//       name: "Airi Satou",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 321 6540",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic5.jpg",
//     },
//     {
//       id: 1,
//       name: "Tiger Nixon",
//       department: "Architect",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "123 456 7890",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic1.jpg",
//     },
//     {
//       id: 2,
//       name: "Garrett Winters",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 654 3210",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic2.jpg",
//     },
//     {
//       id: 3,
//       name: "Ashton Cox",
//       department: "Junior Technical Author",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "321 654 9870",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic3.jpg",
//     },
//     {
//       id: 4,
//       name: "Cedric Kelly",
//       department: "Senior Javascript Developer",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "567 789 3450",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic4.jpg",
//     },
//     {
//       id: 5,
//       name: "Airi Satou",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 321 6540",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic5.jpg",
//     },
//     {
//       id: 1,
//       name: "Tiger Nixon",
//       department: "Architect",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "123 456 7890",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic1.jpg",
//     },
//     {
//       id: 2,
//       name: "Garrett Winters",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 654 3210",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic2.jpg",
//     },
//     {
//       id: 3,
//       name: "Ashton Cox",
//       department: "Junior Technical Author",
//       gender: "Male",
//       education: "M.COM., P.H.D.",
//       mobile: "321 654 9870",
//       email: "info@example.com",
//       joiningDate: "2011/04/25",
//       profileImage: "images/profile/small/pic3.jpg",
//     },
//     {
//       id: 4,
//       name: "Cedric Kelly",
//       department: "Senior Javascript Developer",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "567 789 3450",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic4.jpg",
//     },
//     {
//       id: 5,
//       name: "Airi Satou",
//       department: "Accountant",
//       gender: "Female",
//       education: "M.COM., P.H.D.",
//       mobile: "987 321 6540",
//       email: "info@example.com",
//       joiningDate: "2011/07/25",
//       profileImage: "images/profile/small/pic5.jpg",
//     },
//     // Add more teacher data as needed
//   ];

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(teachers.length / entriesPerPage);

//   // Get the current page's teachers
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentTeachers = teachers.slice(indexOfFirstEntry, indexOfLastEntry);

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
//               {currentTeachers.map((teacher) => (
//                 <tr key={teacher.id}>
//                 <td>{teacher.id}</td> 

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
//                     <button className="btn btn-sm btn-primary"><i class="fa fa-pen"></i></button><br />
//                     <button className="btn btn-sm btn-danger ml-2"><i class="fa fa-trash"></i></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <GridView teachers={currentTeachers} />
//         )}
//       </div>

//      {/* Pagination */}
// <div className="pagination mt-4">
//   <div className="fit">
//     <div>
//     <span>
//       Showing {indexOfFirstEntry + 1} to {indexOfLastEntry} of {teachers.length} entries
//     </span>
//     </div>

//     {/* Pagination Controls */}
//     <div className="ml-auto d-flex">
//       <button
//         className="btn btn-secondary"
//         onClick={() => setCurrentPage(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>

//       {/* Page Number Buttons */}
//       {[...Array(totalPages).keys()].map((num) => (
//         <button
//           key={num}
//           className={`btn ${currentPage === num + 1 ? "btn-primary" : "btn-secondary"} ml-1`}
//           onClick={() => handlePageChange(num + 1)}
//         >
//           {num + 1}
//         </button>
//       ))}

//       <button
//         className="btn btn-secondary ml-2"
//         onClick={() => setCurrentPage(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default ViewTeachers;









import React, { useState } from "react";
import GridView from "../components/GridView";
import teachersData from "../data/teachersData";

const ViewTeachers = () => {
  const [viewMode, setViewMode] = useState("listView");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Calculate the total number of pages
  const totalPages = Math.ceil(teachersData.length / entriesPerPage);

  // Get the current page's teachers
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentTeachers = teachersData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Handle entries per page change
  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page when entries per page change
  };

  // Handle page change
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
        <select
          className="ml-2"
          value={entriesPerPage}
          onChange={handleEntriesChange}
        >
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
                <th>Education</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Joining Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{indexOfFirstEntry + index + 1}</td>
                  <td>
                    <img
                      src={teacher.profileImage}
                      alt={teacher.name}
                      className="rounded-circle"
                      width="35"
                    />
                  </td>
                  <td>{teacher.name}</td>
                  <td>{teacher.department}</td>
                  <td>{teacher.gender}</td>
                  <td>{teacher.education}</td>
                  <td>{teacher.mobile}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.joiningDate}</td>
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
              Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, teachersData.length)} of {teachersData.length} entries
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
