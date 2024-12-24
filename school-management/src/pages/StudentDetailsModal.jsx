// const StudentDetailsModal = ({ student, isOpen, onClose, onEdit }) => {
//   console.log(student);
//   if (!isOpen || !student) return null;

//   const defaultStudent = {
//     image: "/assets/img/img-1.jpg",
//     accountId: "N/A",
//     fullname: "N/A",
//     class: "N/A",
//     number: "N/A",
//     rollNo: "N/A",
//     fatherPhone: "N/A",
//     motherPhone: "N/A",
//   };

//   const currentStudent = student || defaultStudent;

//   return (
//     <div
//       className="modal-backdrop"
//       onClick={onClose}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1050,
//       }}
//     >
//       <div
//         className="modal-dialog"
//         style={{
//           backgroundColor: "white",
//           borderRadius: "8px",
//           width: "50%",
//           boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">
//               {currentStudent.fullname}'s Details
//             </h5>
//             <button
//               type="button"
//               className="btn-close"
//               onClick={onClose}
//             ></button>
//           </div>
//           <div className="modal-body">
//             <img
//               src={currentStudent.image}
//               alt="Student"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//               }}
//             />
       

// <p>
//                <strong>ID:</strong> {student.accountId}
//              </p>
//              <p>
//                <strong>Name:</strong> {student.fullname}
//              </p>
//              <p>
//                <strong>Class:</strong> {student.studentClass}
//              </p>
//              <p>
//                <strong>Section:</strong> {student.section}
//              </p>
//              <p>
//                <strong>Father's Phone:</strong> {student.number}
//              </p>
//              <p>
//                <strong>Mother's Phone:</strong> {student.parentNo}
//              </p>
//           </div>
//           <div className="modal-footer">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={onClose}
//             >
//               Close
//             </button>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => onEdit(currentStudent)}
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDetailsModal;






const StudentDetailsModal = ({ student, isOpen, onClose, onEdit }) => {
  if (!isOpen || !student) return null;

  const defaultStudent = {
    image: "/assets/img/img-1.jpg",
    accountId: "N/A",
    fullname: "N/A",
    class: "N/A",
    number: "N/A",
    rollNo: "N/A",
    fatherPhone: "N/A",
    motherPhone: "N/A",
  };

  const currentStudent = student || defaultStudent;

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
            <h5 className="modal-title">
              {currentStudent.fullname}'s Details
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={currentStudent.image}
              alt="Student"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            />
            <p>
              <strong>ID:</strong> {currentStudent.accountId}
            </p>
            <p>
              <strong>Name:</strong> {currentStudent.fullname}
            </p>
            <p>
              <strong>Class:</strong> {currentStudent.studentClass}
            </p>
            <p>
              <strong>Section:</strong> {currentStudent.section || "N/A"}
            </p>
            <p>
              <strong>Father's Phone:</strong> {currentStudent.fatherPhone}
            </p>
            <p>
              <strong>Mother's Phone:</strong> {currentStudent.motherPhone}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onEdit(currentStudent)}
            >
              <a href="/edit-student">
              Edit
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsModal;
