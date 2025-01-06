import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";


const EditDepartment = () => {
    const [formData, setFormData] = useState({
        departmentId: '',
        departmentName: '',
        headOfDepartment: '',
        startDate: '',
    });
    const { id } = useParams();
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchDepartmentDetails = async () => {
            if (id) {
                const authToken = localStorage.getItem("authToken");
                if (!authToken) {
                console.error("Authentication token not found. Please log in.");
                    return;
                }

            try {
                const response = await fetch(`http://localhost:8080/sms/departments/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Basic ${authToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        departmentId: data.departmentId,
                        departmentName: data.departmentName,
                        headOfDepartment: data.headOfDepartment,
                        startDate: data.startDate,
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
            
        fetchDepartmentDetails();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
            console.error("Authentication token not found. Please log in.");
            return;
          }
      
        try {
            const response = await fetch(`http://localhost:8080/sms/departments/update/${id}`, {
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
                    departmentId: data.departmentId,
                    departmentName: data.departmentName,
                    headOfDepartment: data.headOfDepartment,
                    startDate: data.startDate,
                })
                console.log("Department updated successfully:", data);
                alert("Department updated successfully!");
            }
            else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error updating department.");
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
                    <h3 className="page-title">Edit Department</h3>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="form-title"><span>Department Details</span></h5>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="form-group local-forms">
                                                <label>Department ID <span className="login-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    name="departmentId"
                                                    className="form-control"
                                                    value={formData.departmentId}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="form-group local-forms">
                                                <label>Department Name <span className="login-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    name="departmentName"
                                                    className="form-control"
                                                    value={formData.departmentName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="form-group local-forms">
                                                <label>Head of Department <span className="login-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    name="headOfDepartment"
                                                    className="form-control"
                                                    value={formData.headOfDepartment}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="form-group local-forms calendar-icon">
                                                <label>Department Start Date <span className="login-danger">*</span></label>
                                                <input
                                                    className="form-control"
                                                    type="date"
                                                    name="startDate"
                                                    value={formData.startDate}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="student-submit">
                                                <button type="submit" className="btn btn-primary">Update</button>
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

export default EditDepartment;
