// import React from 'react';

// const ViewDepartment = () => {
//     return (
//         <div className="page-wrapper">
//             <div className="content container-fluid">

//                 <div className="page-header">
//                     <div className="row align-items-center">
//                         <div className="col">
//                             <h3 className="page-title">Departments</h3>
//                             <ul className="breadcrumb">
//                                 <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
//                                 <li className="breadcrumb-item active">Departments</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="student-group-form">
//                     <div className="row">
//                         <div className="col-lg-3 col-md-6">
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Search by ID ..." />
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Search by Name ..." />
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="form-group">
//                                 <input type="text" className="form-control" placeholder="Search by Year ..." />
//                             </div>
//                         </div>
//                         <div className="col-lg-2">
//                             <div className="search-student-btn">
//                                 <button type="button" className="btn btn-primary">Search</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-sm-12">
//                         <div className="card card-table">
//                             <div className="card-body">

//                                 <div className="page-header">
//                                     <div className="row align-items-center">
//                                         <div className="col">
//                                             <h3 className="page-title">Departments</h3>
//                                         </div>
//                                         <div className="col-auto text-end float-end ms-auto download-grp">
//                                             <a href="#" className="btn btn-outline-primary me-2"><i className="fas fa-download"></i> Download</a>
//                                             <a href="add-department.html" className="btn btn-primary"><i className="fas fa-plus"></i></a>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
//                                     <thead className="student-thread">
//                                         <tr>
//                                             <th>
//                                                 <div className="form-check check-tables">
//                                                     <input className="form-check-input" type="checkbox" value="something" />
//                                                 </div>
//                                             </th>
//                                             <th>ID</th>
//                                             <th>Name</th>
//                                             <th>HOD</th>
//                                             <th>Started Year</th>
//                                             <th className="text-end">Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {[
//                                             { id: 'PRE2209', name: 'Computer Science Engg', hod: 'Aaliyah', year: 1995},
//                                             { id: 'PRE2213', name: 'Mechanical Engg', hod: 'Malynne', year: 1999},
//                                             { id: 'PRE2143', name: 'Electrical Engg', hod: 'Levell Scott', year: 1994},
//                                             { id: 'PRE2431', name: 'Civil Engg', hod: 'Minnie', year: 2000},
//                                             { id: 'PRE1534', name: 'MCA', hod: 'Lois A', year: 1992},
//                                             { id: 'PRE2153', name: 'BCA', hod: 'Calvin', year: 1992 }
//                                         ].map((department, index) => (
//                                             <tr key={index}>
//                                                 <td>
//                                                     <div className="form-check check-tables">
//                                                         <input className="form-check-input" type="checkbox" value="something" />
//                                                     </div>
//                                                 </td>
//                                                 <td>{department.id}</td>
//                                                 <td>
//                                                     <h2>
//                                                         <a href="#">{department.name}</a>
//                                                     </h2>
//                                                 </td>
//                                                 <td>{department.hod}</td>
//                                                 <td>{department.year}</td>
//                                                 <td>{department.students}</td>
//                                                 <td className="text-end">
//                                                     <div className="actions">
//                                                         <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
//                                                             <i className="feather-eye"></i>
//                                                         </a>
//                                                         <a href="edit-department.html" className="btn btn-sm bg-danger-light">
//                                                             <i className="feather-edit"></i>
//                                                         </a>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewDepartment;




import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDepartments = async () => {
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
            console.error("Authentication token not found. Please log in.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/sms/departments/all", {
                headers: {
                    Authorization: `Basic ${authToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setDepartments(data);
            } else {
                throw new Error("Error fetching departments: " + response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Departments</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Departments</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="student-group-form">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search by ID ..." />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search by Name ..." />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search by Year ..." />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="search-student-btn">
                                <button type="button" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="page-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h3 className="page-title">Departments</h3>
                                        </div>
                                        <div className="col-auto text-end float-end ms-auto download-grp">
                                            <a href="#" className="btn btn-outline-primary me-2">
                                                <i className="fas fa-download"></i> Download
                                            </a>
                                            <a href="add-department.html" className="btn btn-primary">
                                                <i className="fas fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {loading ? (
                                    <p>Loading departments...</p>
                                ) : (
                                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                                        <thead className="student-thread">
                                            <tr>
                                                <th>
                                                    <div className="form-check check-tables">
                                                        <input className="form-check-input" type="checkbox" value="something" />
                                                    </div>
                                                </th>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>HOD</th>
                                                <th>Started Year</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {departments.map((department, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="form-check check-tables">
                                                            <input className="form-check-input" type="checkbox" value="something" />
                                                        </div>
                                                    </td>
                                                    <td>{department.departmentId}</td>
                                                    <td>
                                                        <h2>
                                                            <a href="#">{department.departmentName}</a>
                                                        </h2>
                                                    </td>
                                                    <td>{department.headOfDepartment}</td>
                                                    <td>{new Date(department.startDate).getFullYear()}</td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <a href={`edit-department/${department.id}`} className="btn btn-sm bg-danger-light">
                                                                <i className="feather-edit"></i>
                                                            </a>
                                                            <a href={`delete-department/${department.id}`} className="btn btn-sm bg-success-light me-2">
                                                                <i className="feather-trash-2"></i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDepartment;
