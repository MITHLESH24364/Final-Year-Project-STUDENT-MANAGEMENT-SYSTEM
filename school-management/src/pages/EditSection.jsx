import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const EditSection = () => {
  const [formData, setFormData] = useState({
    sectionName: "",
    classId: "",
  });
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { id } = useParams();  // Extract the section ID from the URL

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:8080/sms/classes/all", {
          headers: {
            Authorization: `Basic ${localStorage.getItem("authToken")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setClasses(data);
        } else {
          setError("Failed to fetch classes.");
        }
      } catch (error) {
        setError("An error occurred while fetching classes.");
      }
    };

    const fetchSectionDetails = async () => {
      if (id) {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          console.error("Authentication token not found. Please log in.");
          return;
        }

        try {
          const response = await fetch(`http://localhost:8080/sms/sections/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${authToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setFormData({
              sectionName: data.sectionName,
              classId: data.classId,
            });
          } else {
            const errorData = await response.json();
            setError(errorData.message || "Failed to fetch section details.");
          }
        } catch (error) {
          setError("An error occurred. Please check your connection and try again.");
        }
      }
    };

    fetchClasses();
    fetchSectionDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear error before making the request
    setSuccessMessage("");

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await fetch(`http://localhost:8080/sms/sections/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Section updated successfully!");
        setError(""); // Clear any residual error message
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Failed to update section. Please try again.";
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
                    <span>Edit Section Details</span>
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
                      Select Class <span className="login-danger">*</span>
                    </label>
                    <select
                      name="classId"
                      className="form-control"
                      value={formData.classId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select Class --</option>
                      {classes.map((classItem) => (
                        <option key={classItem.id} value={classItem.id}>
                          {classItem.className || "Class Name"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Section Name <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="sectionName"
                      className="form-control"
                      value={formData.sectionName}
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

export default EditSection;
