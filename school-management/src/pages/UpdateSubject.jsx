import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";


const UpdateSubject = () => {
  // State to manage form inputs and messages
  const [formData, setFormData] = useState({
    subjectId: "",
    subjectName: "",
    subjectClass: "",
  });
  const { id } = useParams();
    const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(true);


  // Fetch subject details
  useEffect(() => {
  const fetchSubjectDetails = async () => {
    if (id) {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
    console.error("Authentication token not found. Please log in.");
    return;
    }

    try {
      const response = await fetch(`http://localhost:8080/sms/subjects/${id}`, {
        headers: {
            "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({
            subjectId: data.subjectId,
            subjectName: data.subjectName,
            subjectClass: data.subjectClass,
        });
    } else if (response.status === 404) {
        throw new Error("Subject not found.");
        } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error fetching subject data.");
        }
    } catch (error) {
        console.error("Error:", error);
        setError(error.message);
    }
    }
    };


    fetchSubjectDetails();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
    };

  // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const authToken = localStorage.getItem("authToken");

//     if (!authToken) {
//     console.error("Authentication token not found. Please log in.");
//     return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8080/sms/subjects/update/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Basic ${authToken}`,
//         },
//         body: JSON.stringify(formData),

//       });

//       if (response.ok) {
//         const data = await response.json();
//         setFormData({
//             subjectId: data.subjectId,
//             subjectName: data.subjectName,
//             subjectClass: data.subjectClass,
//         })
//         console.log("Subject updated successfully:", data);
//         setSuccessMessage("Subject updated successfully!");
//         }
//         else {
//             const errorData = await response.json();
//         throw new Error("Error updating subject: " + response.statusText);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         setError(error.message);
//     }
//     };

const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
  
    if (!authToken) {
      console.error("Authentication token not found. Please log in.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/sms/subjects/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setSuccessMessage(data.message || "Subject updated successfully!");
        } else {
          const text = await response.text();
          setSuccessMessage(text || "Subject updated successfully!");
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error updating subject.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };
  

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Update Subject</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="subjects.html">Subjects</a>
                </li>
                <li className="breadcrumb-item active">Update Subject</li>
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
                          value={formData.subjectId}
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
                          value={formData.subjectName}
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
                          value={formData.subjectClass}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="student-submit">
                        <button type="submit" className="btn btn-primary">
                          Update
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

export default UpdateSubject;
