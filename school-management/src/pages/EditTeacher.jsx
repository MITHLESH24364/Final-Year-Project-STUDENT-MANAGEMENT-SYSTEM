// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useParams, Link } from "react-router-dom";

// const EditTeacher = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     gender: "",
//     dateOfBirth: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     department: "",
//     qualification: "",
//     joiningDate: "",
//     teacherPhoto: null,
//   });

//   const { id } = useParams();
//   const [error, setError] = useState("");

//   // Fetch teacher data based on ID
//   useEffect(() => {
//     const fetchTeacherData = async () => {
//       if (id) {
//         const authToken = localStorage.getItem("authToken");
//         if (!authToken) {
//           console.error("Authentication token not found. Please log in.");
//           return;
//         }

//         try {
//           const response = await fetch(`http://localhost:8080/sms/user/staff/get/${id}`, {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Basic ${authToken}`,
//             },
//           });

//           if (response.ok) {
//             const data = await response.json();
//             setFormData({
//               fullname: data.fullname || "",
//               gender: data.gender || "",
//               dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : "",
//               email: data.email || "",
//               phoneNumber: data.phoneNumber || "",
//               address: data.address || "",
//               department: data.department || "",
//               qualification: data.qualification || "",
//               joiningDate: data.joiningDate ? new Date(data.joiningDate) : "",
//               teacherPhoto: null, // Handle photo separately
//             });
//           } else if (response.status === 404) {
//             throw new Error("Teacher not found.");
//           } else {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Error fetching teacher data.");
//           }
//         } catch (error) {
//           console.error("Error:", error);
//           setError(error.message);
//         }
//       }
//     };

//     fetchTeacherData();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleDateChange = (name, date) => {
//     setFormData({ ...formData, [name]: date });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//       console.error("Authentication token not found. Please log in.");
//       return;
//     }

//     try {
//       const formDataObject = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataObject.append(key, value);
//       });

//       const endpoint = id
//         ? `http://localhost:8080/sms/user/teacher/update/${id}`
//         : "http://localhost:8080/sms/user/teacher/add";

//       const method = id ? "PUT" : "POST";

//       const response = await fetch(endpoint, {
//         method,
//         body: formDataObject,
//         headers: {
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(`${id ? "Teacher updated" : "Teacher added"} successfully:`, data);
//         alert(`${id ? "Teacher updated" : "Teacher added"} successfully!`);
//         if (!id) {
//           setFormData({
//             fullname: "",
//             gender: "",
//             dateOfBirth: "",
//             email: "",
//             phoneNumber: "",
//             address: "",
//             department: "",
//             qualification: "",
//             teacherPhoto: null,
//           });
//         }
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || `Error ${id ? "updating" : "adding"} teacher.`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError(error.message);
//     }
//   };

//   return (
//     // <div>
//     //   <div className="page-header">
//     //     <h3 className="page-title">{id ? "Edit Teacher" : "Add Teacher"}</h3>
//     //   </div>
//     //   <div className="card">
//     //     <div className="card-body">
//     //       {error && <div className="alert alert-danger">{error}</div>}
//     //       <form onSubmit={handleSubmit}>
//     //         <div className="row">
//     //           {[
//     //             { label: "Full Name", name: "fullname", type: "text", placeholder: "Enter Full Name" },
//     //             { label: "Email", name: "email", type: "email", placeholder: "Enter Email Address" },
//     //             { label: "Phone Number", name: "phoneNumber", type: "text", placeholder: "Enter Phone Number" },
//     //             { label: "Address", name: "address", type: "text", placeholder: "Enter Address" },
//     //             { label: "Department", name: "department", type: "text", placeholder: "Enter Department" },
//     //             { label: "Qualification", name: "qualification", type: "text", placeholder: "Enter Qualification" },
//     //           ].map((field, index) => (
//     //             <div key={index} className="col-sm-6">
//     //               <div className="form-group">
//     //                 <label>{field.label}</label>
//     //                 <input
//     //                   className="form-control"
//     //                   type={field.type}
//     //                   name={field.name}
//     //                   placeholder={field.placeholder}
//     //                   value={formData[field.name] || ""}
//     //                   onChange={handleChange}
//     //                 />
//     //               </div>
//     //             </div>
//     //           ))}
//     //           <div className="col-sm-6">
//     //             <div className="form-group">
//     //               <label>Gender</label>
//     //               <select
//     //                 className="form-control"
//     //                 name="gender"
//     //                 value={formData.gender || ""}
//     //                 onChange={handleChange}
//     //               >
//     //                 <option value="">Select Gender</option>
//     //                 <option value="Male">Male</option>
//     //                 <option value="Female">Female</option>
//     //                 <option value="Other">Other</option>
//     //               </select>
//     //             </div>
//     //           </div>
//     //           <div className="col-sm-6">
//     //             <div className="form-group">
//     //               <label>Date of Birth</label>
//     //               <DatePicker
//     //                 selected={formData.dateOfBirth}
//     //                 onChange={(date) => handleDateChange("dateOfBirth", date)}
//     //                 className="form-control"
//     //                 dateFormat="dd-MM-yyyy"
//     //               />
//     //             </div>
//     //           </div>
//     //           <div className="col-sm-6">
//     //             <div className="form-group">
//     //               <label>Joining Date</label>
//     //               <DatePicker
//     //                 selected={formData.joiningDate}
//     //                 onChange={(date) => handleDateChange("joiningDate", date)}
//     //                 className="form-control"
//     //                 dateFormat="dd-MM-yyyy"
//     //               />
//     //             </div>
//     //           </div>
//     //           <div className="col-sm-6">
//     //             <div className="form-group">
//     //               <label>Upload Photo</label>
//     //               <input
//     //                 type="file"
//     //                 name="teacherPhoto"
//     //                 className="form-control"
//     //                 onChange={handleChange}
//     //               />
//     //             </div>
//     //           </div>
//     //           <div className="col-12">
//     //             <button type="submit" className="btn btn-primary">
//     //               Submit
//     //             </button>
//     //           </div>
//     //         </div>
//     //       </form>
//     //     </div>
//     //   </div>
//     // </div>


//     <div>
//     {/* Page Header */}
//     <div className="page-header">
//       <div className="row align-items-center">
//         <div className="col-sm-12">
//           <div className="page-sub-header">
//             <h3 className="page-title">Add Teacher</h3>
//             <ul className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <a href="teachers.html">Teacher</a>
//               </li>
//               <li className="breadcrumb-item active">Add Teacher</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Form Section */}
//     <div className="row">
//       <div className="col-lg-12">
//         <div className="card comman-shadow">
//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               {/* Basic Details Section */}
//               <div className="row">
//                 <div className="col-12">
//                   <h5 className="form-title student-info">Basic Details</h5>
//                 </div>
//                 {/* Staff Id */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Staff Id <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="staffId"
//                       placeholder="Enter Staff ID"
//                       value={formData.staff_id}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Full Name */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Full Name <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="fullname"
//                       placeholder="Enter Full Name"
//                       value={formData.fullname}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Gender */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Gender <span className="login-danger">*</span></label>
//                     <select
//                       className="form-control select"
//                       name="gender"
//                       value={formData.gender}
//                       onChange={handleChange}
//                     >
//                       <option>Select Gender</option>
//                       <option>FEMALE</option>
//                       <option>MALE</option>
//                       <option>OTHER</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Date of Birth */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms calendar-icon">
//                     <label>Date of Birth <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control datetimepicker"
//                       type="date"
//                       name="dateOfBirth"
//                       value={formData.dateOfBirth}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Email <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control"
//                       type="email"
//                       name="email"
//                       placeholder="Enter Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Phone Number */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Phone Number <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="phoneNumber"
//                       placeholder="Enter Phone Number"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Location</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="location"
//                       placeholder="Enter Location"
//                       value={formData.location}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Blood Group */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Blood Group <span className="login-danger">*</span></label>
//                     <select
//                       className="form-control select"
//                       name="bloodGroup"
//                       value={formData.bloodGroup}
//                       onChange={handleChange}
//                     >
//                       <option>Please Select Group</option>
//                       <option>A_PLUS</option>
//                       <option>B_MINUS</option>
//                       <option>O_PLUS</option>
//                       <option>A_MINUS</option>
//                       <option>B_PLUS</option>
//                       <option>O_MINUS</option>
//                       <option>AB_PLUS</option>
//                       <option>AB_MINUS</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Department */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Department <span className="login-danger">*</span></label>
//                     <select
//                       className="form-control select"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleChange}
//                     >
//                       <option>Please Select Department</option>
//                       <option>English</option>
//                       <option>Nepali</option>
//                       <option>Maths</option>
//                       <option>Science</option>
//                       <option>Social</option>
//                       <option>Computer</option>
//                       <option>Accountancy</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Class Teacher */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Class Teacher</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="classTeacher"
//                       placeholder="Enter Class"
//                       value={formData.classTeacher}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Block Head */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Block Head</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="blockHead"
//                       placeholder="Enter Block"
//                       value={formData.blockHead}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Login Details Section */}
//               <div className="row">
//                 <div className="col-12">
//                   <h5 className="form-title student-info">Login Details</h5>
//                 </div>

//                 {/* Username */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Username <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="username"
//                       placeholder="Enter Username"
//                       value={formData.username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group local-forms">
//                     <label>Password <span className="login-danger">*</span></label>
//                     <input
//                       className="form-control"
//                       type="password"
//                       name="password"
//                       placeholder="Enter Password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Upload Photo */}
//                 <div className="col-12 col-sm-4">
//                   <div className="form-group">
//                     <label>Upload Teacher Photo</label>
//                     <input
//                       type="text"
//                       name="teacherPhoto"
//                       className="form-control"
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="row">
//                 <div className="col-12">
//                   <div className="student-submit">
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default EditTeacher;






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
              staff_id: data.staff_id || "",
              fullname: data.fullname || "",
              gender: data.gender || "",
              dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : "",
              email: data.email || "",
              phoneNumber: data.phoneNumber || "",
              location: data.location || "",
              bloodGroup: data.bloodGroup || "",
              department: data.department || "",
            });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      const response = await fetch(`http://localhost:8080/sms/user/teacher/update/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
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
                            <Link to={`/edit-teacher/${formData.staff_id}`} style={{ color: "white", textDecoration: "none" }}>Submit
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
                    value={formData.staff_id}
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
                    <option>English</option>
                    <option>Nepali</option>
                    <option>Maths</option>
                    <option>Science</option>
                    <option>Social</option>
                    <option>Computer</option>
                    <option>Accountancy</option>
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
                    type="file"
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
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default EditTeacher;
