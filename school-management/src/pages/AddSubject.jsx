// import React from "react";

// const AddSubject = () => {
//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title">Add Subject</h3>
//               <ul className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <a href="subjects.html">Subject</a>
//                 </li>
//                 <li className="breadcrumb-item active">Add Subject</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-12">
//             <div className="card">
//               <div className="card-body">
//                 <form>
//                   <div className="row">
//                     <div className="col-12">
//                       <h5 className="form-title">
//                         <span>Subject Information</span>
//                       </h5>
//                     </div>
//                     <div className="col-12 col-sm-4">
//                       <div className="form-group local-forms">
//                         <label>
//                           Subject ID <span className="login-danger">*</span>
//                         </label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-12 col-sm-4">
//                       <div className="form-group local-forms">
//                         <label>
//                           Subject Name <span className="login-danger">*</span>
//                         </label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-12 col-sm-4">
//                       <div className="form-group local-forms">
//                         <label>
//                           Class <span className="login-danger">*</span>
//                         </label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>
//                     <div className="col-12">
//                       <div className="student-submit">
//                         <button type="submit" className="btn btn-primary">
//                           Submit
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddSubject;




import React, { useState } from "react";
import axios from "axios";

const AddSubject = () => {
  // State to manage form inputs
  const [subject, setSubject] = useState({
    subjectId: "",
    subjectName: "",
    subjectClass: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch("http://localhost:8080/sms/subjects/add", {
        method: "POST",
        body: JSON.stringify(subject),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Subject added successfully:", data);
        setSuccessMessage("Subject added successfully!");
      } else {
        throw new Error("Error adding subject: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to add subject.");
    }
     
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Add Subject</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="subjects.html">Subject</a>
                </li>
                <li className="breadcrumb-item active">Add Subject</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <h5 className="form-title">
                        <span>Subject Information</span>
                      </h5>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Subject ID <span className="login-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="subjectId"
                          value={subject.subjectId}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Subject Name <span className="login-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="subjectName"
                          value={subject.subjectName}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Class <span className="login-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="subjectClass"
                          value={subject.subjectClass}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
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
    </div>
  );
};

export default AddSubject;
