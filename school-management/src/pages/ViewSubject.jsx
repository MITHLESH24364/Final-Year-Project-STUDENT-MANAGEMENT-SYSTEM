// import React, { useState, useEffect } from "react";

// const ViewSubject = () => {
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchSubjects = async () => {
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("No auth token found");
//       setLoading(false);
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:8080/sms/subjects", {
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },  
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setSubjects(data);
//       } else {
//         throw new Error("Error fetching subjects");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSubjects();
//   }, []);



//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         {/* Page Header */}
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title">Subjects</h3>
//               <ul className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <a href="index.html">Dashboard</a>
//                 </li>
//                 <li className="breadcrumb-item active">Subjects</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Search Form */}
//         <div className="student-group-form">
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search by ID ..."
//                 />
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search by Name ..."
//                 />
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search by Class ..."
//                 />
//               </div>
//             </div>
//             <div className="col-lg-2">
//               <div className="search-student-btn">
//                 <button type="button" className="btn btn-primary">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Subject List */}
//         <div className="row">
//           <div className="col-sm-12">
//             <div className="card card-table">
//               <div className="card-body">
//                 {/* Table Header */}
//                 <div className="page-header">
//                   <div className="row align-items-center">
//                     <div className="col">
//                       <h3 className="page-title">Subjects</h3>
//                     </div>
//                     <div className="col-auto text-end float-end ms-auto download-grp">
//                       <a href="#" className="btn btn-outline-primary me-2">
//                         <i className="fas fa-download"></i> Download
//                       </a>
//                       <a href="add-subject.html" className="btn btn-primary">
//                         <i className="fas fa-plus"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Table */}
//                 <div className="table-responsive">
//                   <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
//                     <thead className="student-thread">
//                       <tr>
//                         <th>
//                           <div className="form-check check-tables">
//                             <input
//                               className="form-check-input"
//                               type="checkbox"
//                               value="something"
//                             />
//                           </div>
//                         </th>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Class</th>
//                         <th className="text-end">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         { id: "PRE2209", name: "Mathematics", class: "5" },
//                         { id: "PRE2213", name: "History", class: "6" },
//                         { id: "PRE2143", name: "Science", class: "3" },
//                         { id: "PRE2431", name: "Geography", class: "8" },
//                         { id: "PRE1534", name: "Botany", class: "9" },
//                         { id: "PRE2153", name: "English", class: "4" },
//                       ].map((subject, index) => (
//                         <tr key={index}>
//                           <td>
//                             <div className="form-check check-tables">
//                               <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 value={subject.id}
//                               />
//                             </div>
//                           </td>
//                           <td>{subject.id}</td>
//                           <td>
//                             <h2>
//                               <a href="#">{subject.name}</a>
//                             </h2>
//                           </td>
//                           <td>{subject.class}</td>
//                           <td className="text-end">
//                             <div className="actions">
//                               <a
//                                 href="javascript:void(0);"
//                                 className="btn btn-sm bg-success-light me-2"
//                               >
//                                 <i className="feather-eye"></i>
//                               </a>
//                               <a
//                                 href="edit-subject.html"
//                                 className="btn btn-sm bg-danger-light"
//                               >
//                                 <i className="feather-edit"></i>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewSubject;



import React, { useState, useEffect } from "react";

const ViewSubject = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubjects = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("No auth token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/sms/subjects/all", {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSubjects(data);
      } else {
        throw new Error("Error fetching subjects");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Subjects</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Subjects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="student-group-form">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by ID ..."
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name ..."
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Class ..."
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="search-student-btn">
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subject List */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                {/* Table Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Subjects</h3>
                    </div>
                    <div className="col-auto text-end float-end ms-auto download-grp">
                      <a href="#" className="btn btn-outline-primary me-2">
                        <i className="fas fa-download"></i> Download
                      </a>
                      <a href="/add-subject" className="btn btn-primary">
                        <i className="fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="table-responsive">
                  <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                    <thead className="student-thread">
                      <tr>
                        <th>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="something"
                            />
                          </div>
                        </th>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : subjects.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No subjects found
                          </td>
                        </tr>
                      ) : (
                        subjects.map((subject, index) => (
                          <tr key={index}>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={subject.id}
                                />
                              </div>
                            </td>
                            <td>{subject.id}</td>
                            <td>{subject.subjectId}</td>
                            <td>
                              <h2>
                                <a href="#">{subject.subjectName}</a>
                              </h2>
                            </td>
                            <td>{subject.subjectClass}</td>
                            <td className="text-end">
                              <div className="actions">
                              <a
                                  href={`/edit-subject/${subject.id}`}
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                                <a
                                  href={`/delete-subject/${subject.id}`}
                                  className="btn btn-sm bg-success-light me-2"
                                >
                                  <i className="feather-trash-2"></i>
                                </a>
                                
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSubject;
