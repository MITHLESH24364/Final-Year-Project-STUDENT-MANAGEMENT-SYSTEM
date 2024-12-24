// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const AddEditStudent = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     gender: "",
//     dateOfBirth: "",
//     rollNo: "",
//     location: "",
//     bloodGroup: "",
//     religion: "",
//     email: "",
//     studentClass: "",
//     section: "",
//     phoneNumber: "",
//     parentName: "",
//     parentNo: "",
//     studentPhoto: null,
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleDateChange = (date) => {
//     setFormData({ ...formData, dateOfBirth: date });
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

//       const response = await fetch("http://localhost:8080/sms/user/student/add", {
//         method: "POST",
//         body: formDataObject,
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Student added successfully:", data);
//         alert("Student added successfully!");
//         setFormData({
//           fullname: "",
//           gender: "",
//           dateOfBirth: "",
//           rollNo: "",
//           location: "",
//           bloodGroup: "",
//           religion: "",
//           email: "",
//           studentClass: "",
//           section: "",
//           phoneNumber: "",
//           parentName: "",
//           parentNo: "",
//           studentPhoto: null,
//         });
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Error adding student.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       {/* Page Header */}
//       <div className="page-header">
//         <div className="row align-items-center">
//           <div className="col-sm-12">
//             <div className="page-sub-header">
//               <h3 className="page-title">Add/Edit Student</h3>
//               <ul className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <a href="students.html">Student</a>
//                 </li>
//                 <li className="breadcrumb-item active">Add/Edit Student</li>
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
//               {error && <div className="alert alert-danger">{error}</div>}
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   {/* Student Info Header */}
//                   <div className="col-12">
//                     <h5 className="form-title student-info">Student Information</h5>
//                   </div>

//                   {/* Form Fields */}
//                   {[
//                     { label: "Full Name", name: "fullname", type: "text", placeholder: "Enter Full Name" },
//                     { label: "Roll No", name: "rollNo", type: "number", placeholder: "Enter Roll Number" },
//                     { label: "Location", name: "location", type: "text", placeholder: "Enter Location" },
//                     { label: "Email", name: "email", type: "email", placeholder: "Enter Email Address" },
//                     { label: "Phone Number", name: "phoneNumber", type: "text", placeholder: "Enter Phone Number" },
//                     { label: "Parent Name", name: "parentName", type: "text", placeholder: "Enter Parent Name" },
//                     { label: "Parent Number", name: "parentNo", type: "text", placeholder: "Enter Parent Phone Number" },
//                   ].map((field, index) => (
//                     <div key={index} className="col-12 col-sm-4">
//                       <div className="form-group local-forms">
//                         <label>{field.label} <span className="login-danger">*</span></label>
//                         <input
//                           className="form-control"
//                           type={field.type}
//                           name={field.name}
//                           placeholder={field.placeholder}
//                           value={formData[field.name] || ""}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                   ))}

//                   {/* Select Inputs */}
//                   {[
//                     { label: "Gender", name: "gender", options: ["Select Gender", "Female", "Male", "Others"] },
//                     { label: "Blood Group", name: "bloodGroup", options: ["Select Group", "A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"] },
//                     { label: "Religion", name: "religion", options: ["Select Religion", "Hindu", "Christian", "Others"] },
//                     { label: "Class", name: "studentClass", options: ["Select Class", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
//                     { label: "Section", name: "section", options: ["Select Section", "A", "B", "C", "D", "E"] },
//                   ].map((field, index) => (
//                     <div key={index} className="col-12 col-sm-4">
//                       <div className="form-group local-forms">
//                         <label>{field.label} <span className="login-danger">*</span></label>
//                         <select
//                           className="form-control select"
//                           name={field.name}
//                           value={formData[field.name] || ""}
//                           onChange={handleChange}
//                         >
//                           {field.options.map((option, i) => (
//                             <option key={i} value={option === "Select Gender" || option === "Select Group" || option === "Select Religion" || option === "Select Class" || option === "Select Section" ? "" : option}>
//                               {option}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   ))}

//                   {/* Date Picker */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group local-forms calendar-icon">
//                       <label>Date Of Birth <span className="login-danger">*</span></label>
//                       <DatePicker
//                         selected={formData.dateOfBirth}
//                         onChange={handleDateChange}
//                         className="form-control"
//                         placeholderText="DD-MM-YYYY"
//                         dateFormat="dd-MM-yyyy"
//                       />
//                     </div>
//                   </div>

//                   {/* Upload Photo */}
//                   <div className="col-12 col-sm-4">
//                     <div className="form-group">
//                       <label>Upload Student Photo (150px X 150px)</label>
//                       <input
//                         type="file"
//                         name="studentPhoto"
//                         className="form-control"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="col-12">
//                     <div className="student-submit">
//                       <button type="submit" className="btn btn-primary">
//                         Submit
//                       </button>
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

// export default AddEditStudent;







import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEditStudent = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    gender: "",
    dateOfBirth: "",
    rollNo: "",
    location: "",
    bloodGroup: "",
    religion: "",
    email: "",
    studentClass: "",
    section: "",
    phoneNumber: "",
    parentName: "",
    parentNo: "",
    studentPhoto: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      const formDataObject = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObject.append(key, value);
      });

      const response = await fetch("http://localhost:8080/sms/user/student/add", {
        method: "POST",
        body: formDataObject,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Student added successfully:", data);
        alert("Student added successfully!");
        setFormData({
          fullname: "",
          gender: "",
          dateOfBirth: "",
          rollNo: "",
          location: "",
          bloodGroup: "",
          religion: "",
          email: "",
          studentClass: "",
          section: "",
          phoneNumber: "",
          parentName: "",
          parentNo: "",
          studentPhoto: null,
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error adding student.");
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
              <h3 className="page-title">Edit Student</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="students.html">Student</a>
                </li>
                <li className="breadcrumb-item active">Edit Student</li>
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
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Student Info Header */}
                  <div className="col-12">
                    <h5 className="form-title student-info">Student Information</h5>
                  </div>

                  {/* Form Fields */}
                  {[ 
                    { label: "Full Name", name: "fullname", type: "text", placeholder: "Enter Full Name" }, 
                    { label: "Roll No", name: "rollNo", type: "number", placeholder: "Enter Roll Number" }, 
                    { label: "Location", name: "location", type: "text", placeholder: "Enter Location" }, 
                    { label: "Email", name: "email", type: "email", placeholder: "Enter Email Address" }, 
                    { label: "Phone Number", name: "phoneNumber", type: "text", placeholder: "Enter Phone Number" }, 
                    { label: "Parent Name", name: "parentName", type: "text", placeholder: "Enter Parent Name" }, 
                    { label: "Parent Number", name: "parentNo", type: "text", placeholder: "Enter Parent Phone Number" }
                  ].map((field, index) => (
                    <div key={index} className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>{field.label} <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Select Inputs */}
                  {[ 
                    { label: "Gender", name: "gender", options: ["Select Gender", "Female", "Male", "Others"] }, 
                    { label: "Blood Group", name: "bloodGroup", options: ["Select Group", "A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"] }, 
                    { label: "Religion", name: "religion", options: ["Select Religion", "Hindu", "Christian", "Others"] }, 
                    { label: "Class", name: "studentClass", options: ["Select Class", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] }, 
                    { label: "Section", name: "section", options: ["Select Section", "A", "B", "C", "D", "E"] }
                  ].map((field, index) => (
                    <div key={index} className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>{field.label} <span className="login-danger">*</span></label>
                        <select
                          className="form-control select"
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                        >
                          {field.options.map((option, i) => (
                            <option key={i} value={option === "Select Gender" || option === "Select Group" || option === "Select Religion" || option === "Select Class" || option === "Select Section" ? "" : option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  {/* Date Picker */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms calendar-icon">
                      <label>Date Of Birth <span className="login-danger">*</span></label>
                      <DatePicker
                        selected={formData.dateOfBirth}
                        onChange={handleDateChange}
                        className="form-control"
                        placeholderText="DD-MM-YYYY"
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
                    <div className="student-submit">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
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

export default AddEditStudent;
