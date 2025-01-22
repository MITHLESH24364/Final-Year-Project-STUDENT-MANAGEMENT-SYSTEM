import React, { useState, useEffect } from "react";

const AddMarks = () => {
  const [term, setTerm] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [marks, setMarks] = useState({});
  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return console.error("Authentication token not found.");

    try {
      const response = await fetch("http://localhost:8080/sms/user/student/all", {
        headers: { Authorization: `Basic ${authToken}` },
      });

      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        throw new Error(`Error fetching students: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const getMaxMarks = () => (term.includes("pr") ? 25 : 75);

  const handleMarksChange = (studentId, value) => {
    const maxMarks = getMaxMarks();
    const numericValue = Number(value);

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (numericValue < 0 || numericValue > maxMarks) {
        updatedErrors[studentId] = `Marks must be between 0 and ${maxMarks}`;
      } else {
        delete updatedErrors[studentId];
      }
      return updatedErrors;
    });

    setMarks((prevMarks) => ({
      ...prevMarks,
      [studentId]: value,
    }));
    console.log(marks);
  };



  // const fetchExistingMarks = async () => {
  //   const authToken = localStorage.getItem("authToken");
  //   if (!authToken) return console.error("Authentication token not found.");
  
  //   try {
  //     const response = await fetch(`http://localhost:8080/sms/mark/get/${term}/${year}/${subject}`, {
  //       headers: { Authorization: `Basic ${authToken}` },
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       const marksMap = {};
  //       data.forEach((record) => {
  //         console .log(record);
  //         marksMap[record.student] = record.marks; // Ensure marksMap is keyed by studentId
  //         setMarks(marksMap); // Set marks state with the marksMap
  //         console.log(marks);

  //       });
  //     } else {
  //       throw new Error(`Error fetching marks: ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  

  const fetchExistingMarks = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("Authentication token not found.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/sms/mark/get/${term}/${year}/${subject}`, {
        headers: { Authorization: `Basic ${authToken}` },
      });
  
      if (response.ok) {
        const data = await response.json();
        const marksMap = {};
        data.forEach((record) => {
          marksMap[record.student.accountId] = record.marks; // Ensure marksMap is keyed by studentId
        });
        setMarks(marksMap); // Set marks state with the complete marksMap
      } else {
        throw new Error(`Error fetching marks: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

  useEffect(() => {
    if (classLevel && section && term && year && subject) {
      fetchExistingMarks();
    }
  }, [classLevel, section, term, year, subject]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!classLevel || !section || !term || !subject || !year) {
      alert("Please fill out all required fields.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }



    const resultData = students
      .filter((student) => student.studentClass === classLevel && student.section === section)
      .map((student) => ({
        marks: marks[student.accountId] || 0,
        subject,
        term,
        year,
        student: student.accountId,
      }));

    try {
      const response = await fetch("http://localhost:8080/sms/mark/add-or-update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(resultData),
      });

      if (response.ok) {
        alert("Marks updated successfully.");
        setMarks({});
        setErrors({});
      } else {
        throw new Error(`Error updating marks: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating marks. Please try again.");
    }
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

          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              {[
                { label: "Class", value: classLevel, options: [...Array(10)].map((_, i) => 10 - i), handler: setClassLevel },
                { label: "Section", value: section, options: ["A", "B", "C", "D", "E"], handler: setSection },
                {
                  label: "Exam Term",
                  value: term,
                  options: ["First Term Examination", "Second Term Examination", "Final Examination"].flatMap((term) => [
                    { label: `${term} (TH)`, value: `${term.toLowerCase().replace(/ /g, "_")}_th` },
                    { label: `${term} (PR)`, value: `${term.toLowerCase().replace(/ /g, "_")}_pr` },
                  ]),
                  handler: setTerm,
                },
                { label: "Year", value: year, options: ["2081", "2080"], handler: setYear },
                { label: "Subject", value: subject, options: ["Science", "Math", "English", "Nepali", "Social", "Computer"], handler: setSubject },
                { label: "Sort By", value: sortBy, options: [{ label: "ID", value: "id" }, { label: "Name", value: "name" }, { label: "Roll Number", value: "rollNumber" }], handler: setSortBy },
              ].map(({ label, value, options, handler }, index) => (
                <div className="col-md-2" key={index}>
                  <label className="form-label">{label}</label>
                  <select className="form-control text-center" value={value} onChange={(e) => handler(e.target.value)}>
                    <option value="">Select {label}</option>
                    {options.map((option, i) => (
                      <option key={i} value={option.value || option}>
                        {option.label || option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {classLevel && section && term && subject && year && (
              <div className="table-container">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Student ID</th>
                      <th>Roll Number</th>
                      <th>Marks (Max {getMaxMarks()})</th>
                    </tr>
                  </thead>
                

<tbody>
  {students
    .filter((student) => student.studentClass === classLevel && student.section === section)
    .sort((a, b) => {
      switch (sortBy) {
        case "id":
          return a.accountId - b.accountId;
        case "name":
          return a.fullname.localeCompare(b.fullname);
        case "rollNumber":
          return a.rollNo - b.rollNo;
        default:
          return a.accountId - b.accountId;
      }
    })
    .map((student) => (
      <tr key={student.accountId}>
        <td>{student.fullname}</td>
        <td>{student.accountId}</td>
        <td>{student.rollNo}</td>
        <td>
          <input
            type="number"
            className="form-control text-center"
            value={marks[student.accountId] || ""} // Display fetched marks here
            onChange={(e) => handleMarksChange(student.accountId, e.target.value)}
            min={0}
            max={getMaxMarks()}
          />
          {errors[student.accountId] && <small className="text-danger">{errors[student.accountId]}</small>}
        </td>
      </tr>
    ))}
</tbody>

                </table>
              </div>
            )}

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
