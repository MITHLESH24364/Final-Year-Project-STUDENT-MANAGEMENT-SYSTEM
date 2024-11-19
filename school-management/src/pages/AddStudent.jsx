import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: new Date(),
    studentPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="main-content">
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Add Students</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="students.html">Student</a>
                    </li>
                    <li className="breadcrumb-item active">Add Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card comman-shadow">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* Student Info Header */}
                      <div className="col-12">
                        <h5 className="form-title student-info">
                          Student Information
                        </h5>
                      </div>

                      {/* First Name */}
                      <div className="col-12 col-sm-4">
                        <div className="form-group">
                          <label>
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col-12 col-sm-4">
                        <div className="form-group">
                          <label>
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Gender */}
                      <div className="col-12 col-sm-4">
                        <div className="form-group">
                          <label>
                            Gender <span className="text-danger">*</span>
                          </label>
                          <select
                            name="gender"
                            className="form-control"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="col-12 col-sm-4">
                        <div className="form-group">
                          <label>
                            Date Of Birth <span className="text-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control"
                            selected={formData.dob}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy"
                          />
                        </div>
                      </div>

                      {/* Upload Photo */}
                      <div className="col-12 col-sm-4">
                        <div className="form-group">
                          <label>Upload Student Photo (150px X 150px)</label>
                          <input
                            type="file"
                            name="studentPhoto"
                            className="form-control"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
