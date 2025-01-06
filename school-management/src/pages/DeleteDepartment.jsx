import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteDepartment = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = async () => {
        try {
            const authToken = localStorage.getItem("authToken");

            if (!authToken) {
                console.error("Authentication token not found. Please log in.");
                return;
            }

            const response = await fetch(`http://localhost:8080/sms/departments/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Basic ${authToken}`,
                },
            });

            if (response.ok) {
                alert("Department deleted successfully!");
                navigate("/view-department"); // Redirect to the departments list
            } else {
                throw new Error("Failed to delete the department.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while deleting the department.");
        }
    };

    return (
        // <div className="page-wrapper">
        //     <div className="content container-fluid">
        //         <div className="row justify-content-center">
        //             <div className="col-md-6">
        //                 <div className="card">
        //                     <div className="card-body text-center">
        //                         <h4>Are you sure you want to delete this department?</h4>
        //                         <p>ID: {id}</p>
        //                         <div className="mt-4">
        //                             <button
        //                                 onClick={handleDelete}
        //                                 className="btn btn-danger me-2"
        //                             >
        //                                 Confirm Delete
        //                             </button>
        //                             <button
        //                                 onClick={() => navigate("/view-department")}
        //                                 className="btn btn-secondary"
        //                             >
        //                                 Cancel
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div className="page-wrapper">
    <div className="content container-fluid">
        <div className="page-header">
            <div className="row align-items-center">
                <div className="col">
                    <h3 className="page-title">Departments</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Delete Department</a></li>
                        <li className="breadcrumb-item active">Departments</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body text-center">
                        <h4>Are you sure you want to delete this department?</h4>
                        <p>ID: {id}</p>
                        <div className="mt-4">
                            <button
                                onClick={handleDelete}
                                className="btn btn-danger me-2"
                            >
                                Confirm Delete
                            </button>
                            <button
                                onClick={() => navigate("/view-department")}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default DeleteDepartment;
