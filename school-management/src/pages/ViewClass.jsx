import React, { useState, useEffect } from "react";

const ViewClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

//   const fetchClasses = async () => {
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("No auth token found");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/sms/classes/all", {
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setClasses(data);
//       } else {
//         throw new Error("Error fetching classes");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };


const fetchClasses = async () => {
    const authToken = localStorage.getItem("authToken");
  
    if (!authToken) {
      console.error("No auth token found");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/sms/classes/all", {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });
  
      const contentType = response.headers.get("Content-Type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setClasses(data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };
  


  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Classes</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Classes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Class List */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                {/* Table Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Classes</h3>
                    </div>
                    <div className="col-auto text-end float-end ms-auto download-grp">
                      <a href="#" className="btn btn-outline-primary me-2">
                        <i className="fas fa-download"></i> Download
                      </a>
                      <a href="/add-class" className="btn btn-primary">
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
                        <th>Class</th>
                        <th>Section</th>
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
                      ) : classes.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No classes found
                          </td>
                        </tr>
                      ) : (
                        classes.map((classItem, index) => (
                          <tr key={index}>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={classItem.id}
                                />
                              </div>
                            </td>
                            <td>{classItem.id}</td>
                            <td>{classItem.className}</td>
                            <td>{classItem.section}</td>
                            <td className="text-end">
                              <div className="actions">
                                <a
                                  href={`/edit-class/${classItem.id}`}
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                                <a
                                  href={`/delete-class/${classItem.id}`}
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

export default ViewClass;
