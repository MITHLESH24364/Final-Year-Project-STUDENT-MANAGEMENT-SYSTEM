import React, { useState } from 'react';
import axios from 'axios';

const AddDepartment = () => {
    const [formData, setFormData] = useState({
        departmentId: '',
        departmentName: '',
        headOfDepartment: '',
        startDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authToken = localStorage.getItem("authToken");

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
            formDataToSend.append(key, formData[key]);
            }

            const response = await fetch("http://localhost:8080/sms/departments", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${authToken}`,
            },
            });

            if (response.ok) {
            const data = await response.json();
            console.log("Department added successfully:", data);
            alert("Department added successfully!");
            } else {
            throw new Error("Error adding department: " + response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add department.");
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Add Department</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="departments.html">Department</a></li>
                                <li className="breadcrumb-item active">Add Department</li>
                            </ul>
                        </div>
                    </div>
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
        </div>
    );
};

export default AddDepartment;
