import React, { useState } from "react";
import studentData from "../Data/studentData"; // Ensure the correct data file is imported

const ViewStudents = () => {
  const [filters, setFilters] = useState({
    class: "",
    section: "",
    orderBy: "name",
  });

  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // For the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilter = () => {
    if (filters.class && filters.section) {
      const filtered = studentData.filter(
        (student) =>
          student.class === filters.class && student.section === filters.section
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents([]);
    }
  };

  const handleDetailClick = (student) => {
    setSelectedStudent(student); // Set the selected student
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedStudent(null); // Clear the selected student
    setIsModalOpen(false); // Close the modal
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
                          {filteredStudents.map((student) => (
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
                                    student.image || "assets/img/img-1.jpg"
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
          ) : null}

          {/* Modal for Student Details */}
          {isModalOpen && selectedStudent && (
            <div
              className="modal-backdrop"
              onClick={closeModal} // Close the modal when clicking outside
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1050,
              }}
            >
              <div
                className="modal-dialog"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  width: "50%",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedStudent.name}'s Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img src={selectedStudent.image || "assets/img/img-1.jpg"} alt="Student" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    <p><strong>ID:</strong> {selectedStudent.id}</p>
                    <p><strong>Name:</strong> {selectedStudent.name}</p>
                    <p><strong>Class:</strong> {selectedStudent.class}</p>
                    <p><strong>Section:</strong> {selectedStudent.section}</p>
                    <p><strong>Father's Phone:</strong> {selectedStudent.fatherPhone}</p>
                    <p><strong>Mother's Phone:</strong> {selectedStudent.motherPhone}</p>
                    {/* Add more fields as needed */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ViewStudents;


