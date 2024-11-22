// import React, { useState } from "react";

// const AddTeacher = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     email: "",
//     phoneNumber: "",
//     username: "",
//     password: "",
//     gender: "",
//     dob: new Date(),
//     location: "",
//     bloodGroup: "",
//     teacherPhoto: null,
//     classTeacher: false,
//     blockHead: false,
//     department: "",
//     joinedDate: new Date().toISOString().split("T")[0], // Default to today's date
//   });

//   const handleChange = (e) => {
//     const { name, value, files, type, checked } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div>
//       {/* Page Header */}
//       <div className="page-header">
//         <div className="row align-items-center">
//           <div className="col-sm-12">
//             <div className="page-sub-header">
//               <h3 className="page-title">Add Teacher</h3>
//               <ul className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <a href="teachers.html">Teacher</a>
//                 </li>
//                 <li className="breadcrumb-item active">Add Teacher</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="card comman-shadow">
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   {/* Teacher Info Header */}
//                   <div className="col-12">
//                     <h5 className="form-title student-info">Teacher Information</h5>
//                   </div>

//                   {/* Teacher ID
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Teacher ID <span className="login-danger">*</span></label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         name="id"
//                         placeholder="Enter Teacher ID"
//                         value={formData.id}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div> */}

//                   {/* Teacher Name */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Full Name <span className="login-danger">*</span></label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         name="name"
//                         placeholder="Enter Full Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Gender */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Gender <span className="login-danger">*</span></label>
//                       <select
//                         className="form-control select"
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                       >
//                         <option>Select Gender</option>
//                         <option>Female</option>
//                         <option>Male</option>
//                         <option>Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Date of Birth */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms calendar-icon">
//                       <label>Date of Birth <span className="login-danger">*</span></label>
//                       <input
//                         className="form-control datetimepicker"
//                         type="date"
//                         name="dob"
//                         value={formData.dob}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Email <span className="login-danger">*</span></label>
//                       <input
//                         className="form-control"
//                         type="email"
//                         name="email"
//                         placeholder="Enter Email Address"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Phone Number */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Phone Number <span className="login-danger">*</span></label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         name="phoneNumber"
//                         placeholder="Enter Phone Number"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Location</label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         name="location"
//                         placeholder="Enter Location"
//                         value={formData.location}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                 {/* Username */}
//                 <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                         <label>Username <span className="login-danger">*</span></label>
//                         <input
//                             className="form-control"
//                             type="text"
//                             name="username"
//                             placeholder="Enter Username"
//                             value={formData.username}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>

//                 {/* Password */}
//                 <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                         <label>Password <span className="login-danger">*</span></label>
//                         <input
//                             className="form-control"
//                             type="password"
//                             name="password"
//                             placeholder="Enter Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>

//                   {/* Blood Group */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Blood Group <span className="login-danger">*</span></label>
//                       <select
//                         className="form-control select"
//                         name="bloodGroup"
//                         value={formData.bloodGroup}
//                         onChange={handleChange}
//                       >
//                         <option>Please Select Group</option>
//                         <option>A+</option>
//                         <option>B+</option>
//                         <option>O+</option>
//                         <option>A-</option>
//                         <option>B-</option>
//                         <option>O-</option>
//                         <option>AB+</option>
//                         <option>AB-</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Department */}
//                   <div className="col-12 col-md-6 col-lg-4">
//                     <div className="form-group local-forms">
//                       <label>Department <span className="login-danger">*</span></label>
//                       <select
//                         className="form-control select"
//                         name="department"
//                         value={formData.department}
//                         onChange={handleChange}
//                       >
//                         <option>Please Select Department</option>
//                         <option>English</option>
//                         <option>Nepali</option>
//                         <option>Maths</option>
//                         <option>Science</option>
//                         <option>Social</option>
//                         <option>Computer</option>
//                         <option>Accountancy</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Joined Date */}
//                   <div className="col-12 col-md-6 col-lg-4">
//                     <div className="form-group local-forms calendar-icon">
//                       <label>Joined Date <span className="login-danger">*</span></label>
//                       <input
//                         className="form-control datetimepicker"
//                         type="date"
//                         name="joinedDate"
//                         value={formData.joinedDate}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                     {/* Class Teacher */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Class Teacher <span className="login-danger"></span></label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         name="classTeacher"
//                         placeholder="Enter Class"
//                         value={formData.class}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                     {/* Block Head */}
//                     <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms">
//                       <label>Block Head <span className="login-danger"></span></label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         name="blockHead"
//                         placeholder="Enter Block"
//                         value={formData.block}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>                 

//                   {/* Upload Teacher Photo */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group">
//                       <label>Upload Teacher Photo (150px X 150px)</label>
//                       <input
//                         type="file"
//                         name="teacherPhoto"
//                         className="form-control"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="col-12">
//                     <div className="student-submit">
//                       <button type="submit" className="btn btn-primary">Submit</button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTeacher;





import React, { useState } from "react";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    gender: "",
    dob: "",
    location: "",
    bloodGroup: "",
    teacherPhoto: null,
    classTeacher: "",
    blockHead: "",
    department: "",
    joinedDate: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

                  {/* Teacher ID */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>Teacher ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="id"
                        placeholder="Enter Teacher ID"
                        value={formData.id}
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
                        name="name"
                        placeholder="Enter Full Name"
                        value={formData.name}
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
                        <option>Other</option>
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
                        name="dob"
                        value={formData.dob}
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

export default AddTeacher;
