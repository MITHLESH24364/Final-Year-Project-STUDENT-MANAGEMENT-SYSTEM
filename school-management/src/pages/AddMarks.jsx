import React, { useState } from "react";
import studentData from "../Data/studentData"; // Import the student data file

const AddMarks = () => {
  // States for form controls
  const [exam, setExam] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");

  // State to store marks input values and errors
  const [marks, setMarks] = useState({});
  const [errors, setErrors] = useState({});

  // Determine max marks based on exam term
  const getMaxMarks = () => {
    if (exam.includes("pr")) return 25; // Practical exam
    return 75; // Theory exam
  };

  // Filter students based on class and section
  const filteredStudents = studentData.filter(
    (student) =>
      (student.class === classLevel && student.section === section) ||
      !classLevel ||
      !section
  );

  


  // Handle marks input change
const handleMarksChange = (id, value) => {
  const maxMarks = getMaxMarks();
  const numericValue = Number(value);

  // Check if the value is less than 0 or greater than the maxMarks
  if (numericValue < 0) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: `Marks cannot be less than 0`,
    }));
    return;
  } else if (numericValue > maxMarks) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: `Marks cannot exceed ${maxMarks}`,
    }));
    return;
  } else {
    // Remove error if the value is valid
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[id];
      return updatedErrors;
    });
  }

  // Update marks
  setMarks((prevMarks) => ({
    ...prevMarks,
    [id]: value,
  }));
};



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure no errors before submission
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      alert("Please fix the errors before submitting.");
      return;
    }

    const resultData = {
      exam,
      classLevel,
      section,
      year,
      subject,
      marks,
    };
    console.log(resultData);
    // Replace console.log with actual submission logic (e.g., API call)
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Student Marks</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="students.html">Student</a>
                    </li>
                    <li className="breadcrumb-item active">Marks Add/Edit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-2">
                <label htmlFor="classSelect" className="form-label">
                  Class
                </label>
                <select
                  className="form-control"
                  id="classSelect"
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                >
                  <option value="">Select Class</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={10 - i}>
                      {10 - i}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="sectionSelect" className="form-label">
                  Section
                </label>
                <select
                  className="form-control"
                  id="sectionSelect"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option value="">Select Section</option>
                  {["A", "B", "C", "D", "E"].map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="examSelect" className="form-label">
                  Exam Term
                </label>
                <select
                  className="form-control"
                  id="examSelect"
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                >
                  <option value="">Select Exam Term</option>
                  {["First Term Examination", "Second Term Examination"].map(
                    (term, idx) => (
                      <React.Fragment key={idx}>
                        <option value={`${term.toLowerCase()}_th`}>
                          {term} (TH)
                        </option>
                        <option value={`${term.toLowerCase()}_pr`}>
                          {term} (PR)
                        </option>
                      </React.Fragment>
                    )
                  )}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="yearSelect" className="form-label">
                  Year
                </label>
                <select
                  className="form-control"
                  id="yearSelect"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {["2081", "2080"].map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="subjectSelect" className="form-label">
                  Subject
                </label>
                <select
                  className="form-control"
                  id="subjectSelect"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Select Subject</option>
                  {[
                    "Science",
                    "Math",
                    "English",
                    "Nepali",
                    "Social",
                    "Computer",
                  ].map((sub) => (
                    <option key={sub.toLowerCase()} value={sub.toLowerCase()}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Render the table only if all filters are selected */}
            {classLevel && section && exam && subject && year && (
              <div className="table-container">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Student ID</th>
                      <th>Marks (Max {getMaxMarks()})</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.id}</td>
                        <td>
                        

                          <input
                            type="number"
                            className="form-control"
                            value={marks[student.id] || ""}
                            onChange={(e) => handleMarksChange(student.id, e.target.value)}
                            min={0} // Prevent entering marks less than 0
                            max={getMaxMarks()} // Restrict input directly in the field
                          />


                          {errors[student.id] && (
                            <small className="text-danger">
                              {errors[student.id]}
                            </small>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-4 text-end">
              <button type="submit" className="btn btn-primary">
                Save Results
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMarks;
