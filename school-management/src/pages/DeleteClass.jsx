import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteClass = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = async () => {
        try {
            const authToken = localStorage.getItem("authToken");

            if (!authToken) {
                console.error("Authentication token not found. Please log in.");
                return;
            }

            const response = await fetch(`http://localhost:8080/sms/classes/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Basic ${authToken}`,
                },
            });

            if (response.ok) {
                alert("Class deleted successfully!");
                navigate("/view-class"); // Redirect to the class list
            } else {
                throw new Error("Failed to delete the class.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while deleting the class.");
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Classes</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Delete Class</a></li>
                                <li className="breadcrumb-item active">Classes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body text-center">
                                <h4>Are you sure you want to delete this class?</h4>
                                <p>ID: {id}</p>
                                <div className="mt-4">
                                    <button
                                        onClick={handleDelete}
                                        className="btn btn-danger me-2"
                                    >
                                        Confirm Delete
                                    </button>
                                    <button
                                        onClick={() => navigate("/view-class")}
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

export default DeleteClass;
