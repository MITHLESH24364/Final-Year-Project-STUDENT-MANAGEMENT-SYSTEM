import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const EditClass = ({ classId }) => {
  const [formData, setFormData] = useState({
    className: "",
    section: "",
  });

    const { id } = useParams();


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchClassDetails = async () => {
    if (id) {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
        console.error("Authentication token not found. Please log in.");
        return;
        }

      try {
        const response = await fetch(`http://localhost:8080/sms/classes/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFormData({
            className: data.className,
            section: data.section,
          });
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch class details.");
        }
      } catch (error) {
        setError("An error occurred. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    }
    };

    fetchClassDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccessMessage("");

//     const authToken = localStorage.getItem("authToken");

//     try {
//       const response = await fetch(`http://localhost:8080/sms/classes/update/${id}`, {
//         method: "PUT",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Basic ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSuccessMessage("Class updated successfully!");
//       } else {
//         const errorData = await response.json();
//         const errorMessage =
//           errorData.message || "Failed to update class. Please try again.";
//         setError(errorMessage);
//       }
//     } catch (error) {
//       setError("An error occurred. Please check your connection and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };


const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear error before making the request
    setSuccessMessage("");
  
    const authToken = localStorage.getItem("authToken");
  
    try {
      const response = await fetch(`http://localhost:8080/sms/classes/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Class updated successfully!");
        setError(""); // Clear any residual error message
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Failed to update class. Please try again.";
        setError(errorMessage);
      }
    } catch (error) {
      setError("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <h5 className="form-title">
                    <span>Edit Class Details</span>
                  </h5>
                </div>

                {error && (
                  <div className="col-12">
                    <div className="alert alert-danger">{error}</div>
                  </div>
                )}

                {successMessage && (
                  <div className="col-12">
                    <div className="alert alert-success">{successMessage}</div>
                  </div>
                )}

                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Class Name <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="className"
                      className="form-control"
                      value={formData.className}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Section <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="section"
                      className="form-control"
                      value={formData.section}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="student-submit">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClass;
