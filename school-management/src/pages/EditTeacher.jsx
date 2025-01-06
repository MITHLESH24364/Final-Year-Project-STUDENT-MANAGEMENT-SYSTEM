import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, Link } from "react-router-dom";

const EditTeacher = () => {
  const [formData, setFormData] = useState({
    staff_id: "",
    fullname: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    location: "",
    bloodGroup: "",
    department: "",
  });


  

  const { id } = useParams();
  const [error, setError] = useState("");

  // Fetch teacher data based on ID
  useEffect(() => {
    const fetchTeacherData = async () => {
      if (id) {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          console.error("Authentication token not found. Please log in.");
          return;
        }
  
        try {
          const response = await fetch(`http://localhost:8080/sms/user/staff/get/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${authToken}`,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setFormData({
              id: data.id || "",
              staffId: data.staffId || "",
              fullname: data.fullname || "",
              gender: data.gender || "",
              dateOfBirth: data.dateOfBirth ? formatDateToYYYYMMDD(new Date(data.dateOfBirth)) : "", // Format date here
              location: data.location || "",
              bloodGroup: data.bloodGroup || "",
              email: data.email || "",
              phoneNumber: data.phoneNumber || "",
              department: data.department || "",
              classTeacher: data.classTeacher || "",
              blockHead: data.blockHead || "",
            });
          } else if (response.status === 404) {
            throw new Error("teacher not found.");
          } else {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error fetching teacher data.");
          }
        } catch (error) {
          console.error("Error:", error);
          setError(error.message);
        }
      }
    };
  
    fetchTeacherData();
  }, [id]);
  

  const formatDateToYYYYMMDD = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // For dateOfBirth, value is already in YYYY-MM-DD
    }));
  };
  

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("Authentication token not found. Please log in.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/sms/user/staff/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({
          fullname: data.fullname || "",
          blockHead: data.blockHead || "",
          classTeacher: data.classTeacher || "",
          dateOfBirth: data.dateOfBirth || "",
          department: data.department || "",
          email: data.email || "",
          bloodGroup: data.bloodGroup || "",
          gender: data.gender || "",
          location: data.location || "",
          phoneNumber: data.phoneNumber || "",
          staffId: data.staffId || "",
          username: data.username || "",
          password: data.password || "",
          
        })
        console.log("Teacher updated successfully:", data);
        alert("Teacher updated successfully!");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error updating teacher.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
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
      <div>
      <br />
          <div className="col-15 col-sm-3">
            <div className="form-group local-forms">
              <label>Account ID <span className="login-danger">*</span></label>
              <input
                className="form-control"
                type="text"
                name="accountId"
                placeholder="Enter Account ID"
                value={formData.accountId || ""}
                onChange={handleChange}
              />
              <br />
              <button
                    type="submit"
                    className="btn btn-primary"
                    
                  >
                            <Link to={`/edit-teacher/${formData.accountId}`} style={{ color: "white", textDecoration: "none" }}>Submit
                            </Link>
      
                  </button>
            </div>
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
                    name="staff_id"
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
                    dateFormat="dd-MM-yyyy"
                    onChange={handleDateChange}
                    value={formData.dateOfBirth}
                    // onChange={handleChange}
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
              <div className="col-12 col-sm-4">
                <div className="form-group">
                  <label>Upload Teacher Photo</label>
                  <input
                    type="file"
                    name="teacherPhoto"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Login Details Section */}
            {/* <div className="row">
              <div className="col-12">
                <h5 className="form-title student-info">Login Details</h5>
              </div> */}

              {/* Username */}
              {/* <div className="col-12 col-sm-4">
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
              </div> */}

              {/* Password */}
              {/* <div className="col-12 col-sm-4">
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
            </div> */}

              {/* Upload Photo */}
             
            {/* </div> */}

            {/* Submit Button */}
            <div className="row">
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

export default EditTeacher;
