// StudentDetailsModal.js
import React from "react";

const StudentDetailsModal = ({ student, isOpen, onClose }) => {
  if (!isOpen || !student) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          width: "50%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{student.name}'s Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={student.image || "assets/img/img-1.jpg"}
              alt="Student"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            />
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Section:</strong> {student.section}</p>
            <p><strong>Roll No:</strong> {student.roll}</p>
            <p><strong>Father's Phone:</strong> {student.fatherPhone}</p>
            <p><strong>Mother's Phone:</strong> {student.motherPhone}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsModal;
