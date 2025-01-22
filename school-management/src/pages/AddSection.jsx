import React, { useState, useEffect } from "react";

const AddSection = () => {
  const [formData, setFormData] = useState({
    classId: "",
    sectionName: "",
  });
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]); // Store existing sections
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch the list of classes to populate the dropdown
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

    // Fetch the existing sections to check for duplicates
    const fetchSections = async () => {
      try {
        const response = await fetch("http://localhost:8080/sms/sections/all", {
          headers: {
            Authorization: `Basic ${localStorage.getItem("authToken")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setSections(data); // Store existing sections
        } else {
          setError("Failed to fetch sections.");
        }
      } catch (error) {
        setError("An error occurred while fetching sections.");
      }
    };

    fetchClasses();
    fetchSections();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    // Check if the class-section combination already exists
    const existingSection = sections.find(
      (section) =>
        section.classId === formData.classId &&
        section.sectionName.trim().toLowerCase() === formData.sectionName.trim().toLowerCase()
    );

    console.log("Existing Section:", existingSection); // Log the found section for debugging
    console.log("Form Data:", formData); // Log the form data for debugging

    if (existingSection) {
      setError("This section already exists for the selected class.");
      setLoading(false);
      return;
    }

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await fetch("http://localhost:8080/sms/sections/add", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Section added successfully!");
        setFormData({ classId: "", sectionName: "" });
        // Fetch sections again to include the newly added section
        const response = await fetch("http://localhost:8080/sms/sections/all", {
          headers: {
            Authorization: `Basic ${localStorage.getItem("authToken")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setSections(data);
        } else {
          setError("Failed to fetch sections.");
        }
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Failed to add section. Please try again.";
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
                    <span>Section Details</span>
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
                      {loading ? "Submitting..." : "Submit"}
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

export default AddSection;
