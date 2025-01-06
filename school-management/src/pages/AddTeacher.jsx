import React, { useState } from "react";


const AddTeacher = () => {
  const [formData, setFormData] = useState({
    staffId: "",
    fullname: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    location: "",
    bloodGroup: "",
    department: "",
    classTeacher: "",
    blockHead: "",
    username: "",
    password: "",
    teacherPhoto: "",
    // joinedDate: new Date().toISOString().split("T")[0],
     // Default to today's date
  });

    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("Authentication token not found. Please log in.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch("http://localhost:8080/sms/user/staff/add", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Teacher added successfully:", data);
        setSuccessMessage("Teacher added successfully!"); // Set the success message
      } else {
        throw new Error("Error adding teacher: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="page-sub-header">
              <h3 className="page-title">Add Teacher</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="teachers.html">Teacher</a>
                </li>
                <li className="breadcrumb-item active">Add Teacher</li>
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
                {/* Basic Details Section */}
                <div className="row">
                  <div className="col-12">
                    <h5 className="form-title student-info">Basic Details</h5>
                  </div>
                  {/* Staff Id */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Staff Id <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="staffId"
                        placeholder="Enter Staff ID"
                        value={formData.staffId}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Full Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="fullname"
                        placeholder="Enter Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Gender <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option>Select Gender</option>
                        <option>FEMALE</option>
                        <option>MALE</option>
                        <option>OTHER</option>
                      </select>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms calendar-icon">
                      <label>Date of Birth <span className="login-danger">*</span></label>
                      <input
                        className="form-control datetimepicker"
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Email <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Phone Number <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Location</label>
                      <input
                        className="form-control"
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Blood Group <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                      >
                        <option>Please Select Group</option>
                        <option>A_PLUS</option>
                        <option>B_MINUS</option>
                        <option>O_PLUS</option>
                        <option>A_MINUS</option>
                        <option>B_PLUS</option>
                        <option>O_MINUS</option>
                        <option>AB_PLUS</option>
                        <option>AB_MINUS</option>
                      </select>
                    </div>
                  </div>

                  {/* Department */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Department <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <option>Please Select Department</option>
                        <option>ADMIN</option>
                        <option>English Department</option>
                        <option>Nepali Department</option>
                        <option>Maths Department</option>
                        <option>Science Department</option>
                        <option>Social Department</option>
                        <option>Computer Department</option>
                        <option>Accountancy Department</option>
                      </select>
                    </div>
                  </div>

                  {/* Class Teacher */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Class Teacher</label>
                      <input
                        className="form-control"
                        type="text"
                        name="classTeacher"
                        placeholder="Enter Class"
                        value={formData.classTeacher}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Block Head */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Block Head</label>
                      <input
                        className="form-control"
                        type="text"
                        name="blockHead"
                        placeholder="Enter Block"
                        value={formData.blockHead}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Login Details Section */}
                <div className="row">
                  <div className="col-12">
                    <h5 className="form-title student-info">Login Details</h5>
                  </div>

                  {/* Username */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Username <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Upload Photo */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label>Upload Teacher Photo</label>
                      <input
                        type="text"
                        name="teacherPhoto"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="row">
                  <div className="col-12">
                    <div className="student-submit">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
               {/* Display Success or Error Message */}
               {successMessage && (
                    <div className="alert alert-success mt-3">
                      {successMessage}
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger mt-3">
                      {error}
                    </div>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
