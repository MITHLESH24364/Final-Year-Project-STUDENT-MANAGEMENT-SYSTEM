import React, { useState } from "react";

const AddClass = () => {
  const [formData, setFormData] = useState({
    className: "",
    section: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await fetch("http://localhost:8080/sms/classes/add", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Class added successfully!");
        setFormData({ className: "", section: "" });
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Failed to add class. Please try again.";
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
                    <span>Class Details</span>
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

export default AddClass;
