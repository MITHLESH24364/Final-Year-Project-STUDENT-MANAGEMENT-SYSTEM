import React, { useState, useEffect } from "react";

const ViewSection = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSections = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("No auth token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/sms/sections/all", {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      });

      const contentType = response.headers.get("Content-Type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setSections(data);
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
    fetchSections();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Sections</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Sections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section List */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                {/* Table Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Sections</h3>
                    </div>
                    <div className="col-auto text-end float-end ms-auto download-grp">
                      <a href="#" className="btn btn-outline-primary me-2">
                        <i className="fas fa-download"></i> Download
                      </a>
                      <a href="/add-section" className="btn btn-primary">
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
                        <th>Section</th>
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
                      ) : sections.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No sections found
                          </td>
                        </tr>
                      ) : (
                        sections.map((section, index) => (
                          <tr key={index}>
                            <td>
                              <div className="form-check check-tables">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={section.id}
                                />
                              </div>
                            </td>
                            <td>{section.id}</td>
                            <td>{section.sectionName}</td>
                            <td>{section.classId}</td>
                            <td className="text-end">
                              <div className="actions">
                                <a
                                  href={`/edit-section/${section.id}`}
                                  className="btn btn-sm bg-danger-light"
                                >
                                  <i className="feather-edit"></i>
                                </a>
                                <a
                                  href={`/delete-section/${section.id}`}
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

export default ViewSection;
