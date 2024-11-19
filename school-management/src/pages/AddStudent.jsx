import React, { useState } from "react";
import DatePicker from "react-datepicker";

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
       <div>
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
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms calendar-icon">
            <label>Date Of Birth <span className="login-danger">*</span></label>
            <input
              className="form-control datetimepicker"
              type="text"
              name="dateOfBirth"
              placeholder="DD-MM-YYYY"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Roll No */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Roll No</label>
            <input
              className="form-control"
              type="number"
              name="rollNo"
              placeholder="Enter Roll Number"
              value={formData.rollNo}
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
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
        </div>

        {/* Religion */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Religion <span className="login-danger">*</span></label>
            <select
              className="form-control select"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
            >
              <option>Please Select Religion</option>
              <option>Hindu</option>
              <option>Christian</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>E-Mail <span className="login-danger">*</span></label>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Class */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Class <span className="login-danger">*</span></label>
            <select
              className="form-control select"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
            >
              <option>Please Select Class</option>
              <option>12</option>
              <option>11</option>
              <option>10</option>
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
              <option>Pre II</option>
              <option>Pre I</option>
              <option>Foundation</option>
            </select>
          </div>
        </div>

        {/* Section */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Section <span className="login-danger">*</span></label>
            <select
              className="form-control select"
              name="section"
              value={formData.section}
              onChange={handleChange}
            >
              <option>Please Select Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </select>
          </div>
        </div>

        {/* Phone Number */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Phone Number</label>
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

        {/* Parent Name */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Parent Name</label>
            <input
              className="form-control"
              type="text"
              name="parentName"
              placeholder="Enter Parent Name"
              value={formData.parentName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Parent Number */}
        <div className="col-12 col-sm-4">
          <div className="form-group local-forms">
            <label>Parent Number</label>
            <input
              className="form-control"
              type="text"
              name="parentNo"
              placeholder="Enter Parent Phone Number"
              value={formData.parentNo}
              onChange={handleChange}
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
          <div className="student-submit">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
  );
};

export default AddStudent;
