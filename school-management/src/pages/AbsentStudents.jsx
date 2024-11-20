// import React, { useState } from 'react';

// const AbsentStudents = () => {
//   const [activeTab, setActiveTab] = useState('Absentee'); // Set 'Absentee' as the default active tab
//   const [students, setStudents] = useState([
//     { sno: 1, name: 'AADHYA LAMICHHANE', rollno: 'IMS-72243', class: 2, section: 'D', phone: '9851065224', guardianPhone: '9841970507' },
//     { sno: 2, name: 'AADITYA THARU', rollno: 'IMS-71287', class: 9, section: 'B', phone: '9813742794', guardianPhone: '9841970507' },
//     { sno: 3, name: 'AALIYA ADHIKARI', rollno: 'IMS-70562', class: 7, section: 'E', phone: '9841949609', guardianPhone: '9843416382' },
//     { sno: 4, name: 'AARAV NADAFF', rollno: 'IMS-72162', class: 8, section: 'E', phone: '9851013041', guardianPhone: '9843421255' },
//     { sno: 5, name: 'AAROHI SHRESTHA', rollno: 'IMS-72321', class: 4, section: 'D', phone: '9842324308', guardianPhone: '9842474735' },
//     { sno: 6, name: 'AASHIK BARAILI', rollno: 'IMS-72417', class: 8, section: 'C', phone: '9846584646', guardianPhone: '9806609264' }
//   ]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Student Attendance</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Student</a>
//                     </li>
//                     <li className="breadcrumb-item active">Attendance</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Tabs */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <ul className="nav nav-tabs">
//               {[
//                 "Add/Edit",
//                 "Recent",
//                 "Absentee",
//                 "Absentee Range",
//                 "Attendance Record",
//                 "Download",
//                 "Daily(Student)",
//                 "Monthly",
//                 "Attendance Chart",
//               ].map((tab, index) => (
//                 <li className="nav-item" key={index}>
//                   <a
//                     className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                     href="#"
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Tab Content - Absentee Data */}
//           {activeTab === "Absentee" && (
//             <div className="absentee-table">
//               <h4>Absentee List</h4>
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>S.no</th>
//                     <th>Name</th>
//                     <th>Roll no.</th>
//                     <th>Class</th>
//                     <th>Section</th>
//                     <th>Phone</th>
//                     <th>Guardian's Phone</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {students.map((student) => (
//                     <tr key={student.sno}>
//                       <td>{student.sno}</td>
//                       <td>{student.name}</td>
//                       <td>{student.rollno}</td>
//                       <td>{student.class}</td>
//                       <td>{student.section}</td>
//                       <td>{student.phone}</td>
//                       <td>{student.guardianPhone}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AbsentStudents;





// import React, { useState } from 'react';
// import studentData from "../Data/studentData";


// const AbsentStudents = () => {
//   const [activeTab, setActiveTab] = useState('Absentee');


//   const [classFilter, setClassFilter] = useState('');
//   const [sectionFilter, setSectionFilter] = useState('');
//   const [orderBy, setOrderBy] = useState('sno');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   // Filter students based on class, section, and order
//   const filteredStudents = students
//     .filter(student => {
//       if (classFilter && student.class !== classFilter) return false;
//       if (sectionFilter && student.section !== sectionFilter) return false;
//       return true;
//     })
//     .sort((a, b) => {
//       if (orderBy === 'sno') {
//         return a.sno - b.sno;
//       } else if (orderBy === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (orderBy === 'class') {
//         return a.class - b.class;
//       }
//       return 0;
//     });

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Student Attendance</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/students">Student</a>
//                     </li>
//                     <li className="breadcrumb-item active">Attendance</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Tabs */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <ul className="nav nav-tabs">
//               {[
//                 "Add/Edit",
//                 "Recent",
//                 "Absentee",
//                 "Absentee Range",
//                 "Attendance Record",
//                 "Download",
//                 "Daily(Student)",
//                 "Monthly",
//                 "Attendance Chart",
//               ].map((tab, index) => (
//                 <li className="nav-item" key={index}>
//                   <a
//                     className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                     href="#"
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Filter Section */}
//           <div className="filter-section mb-4">
//             <h4>Filter Options</h4>
//             <div className="row">
//               <div className="col-md-3">
//                 <label>Class</label>
//                 <select
//                   className="form-control"
//                   value={classFilter}
//                   onChange={(e) => setClassFilter(e.target.value)}
//                 >
//                   <option value="">All</option>
//                   {[2, 4, 7, 8, 9].map((classItem) => (
//                     <option key={classItem} value={classItem}>
//                       Class {classItem}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label>Section</label>
//                 <select
//                   className="form-control"
//                   value={sectionFilter}
//                   onChange={(e) => setSectionFilter(e.target.value)}
//                 >
//                   <option value="">All</option>
//                   {['A', 'B', 'C', 'D', 'E'].map((section) => (
//                     <option key={section} value={section}>
//                       Section {section}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label>Order By</label>
//                 <select
//                   className="form-control"
//                   value={orderBy}
//                   onChange={(e) => setOrderBy(e.target.value)}
//                 >
//                   <option value="sno">S.no</option>
//                   <option value="name">Name</option>
//                   <option value="class">Class</option>
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label>&nbsp;</label>
//                 <button className="btn btn-primary w-100" onClick={() => {}}>
//                   Filter
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Tab Content - Absentee Data */}
//           {activeTab === "Absentee" && (
//             <div className="absentee-table">
//               <h4>Absentee List</h4>
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>S.no</th>
//                     <th>Name</th>
//                     <th>Roll no.</th>
//                     <th>Class</th>
//                     <th>Section</th>
//                     <th>Phone</th>
//                     <th>Guardian's Phone</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStudents.map((student) => (
//                     <tr key={student.sno}>
//                       <td>{student.sno}</td>
//                       <td>{student.name}</td>
//                       <td>{student.rollno}</td>
//                       <td>{student.class}</td>
//                       <td>{student.section}</td>
//                       <td>{student.phone}</td>
//                       <td>{student.guardianPhone}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AbsentStudents;





import React, { useState } from 'react';
import studentData from "../Data/studentData"; // Import the data from the studentData file

const AbsentStudents = () => {
  const [activeTab, setActiveTab] = useState('Absentee');

  // Filters and sorting options
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [orderBy, setOrderBy] = useState('sno');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter students based on class, section, and order
  const filteredStudents = studentData
    .filter(student => {
      if (classFilter && student.class !== classFilter) return false;
      if (sectionFilter && student.section !== sectionFilter) return false;
      return true;
    })
    .sort((a, b) => {
      if (orderBy === 'sno') {
        return a.sno - b.sno;
      } else if (orderBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (orderBy === 'class') {
        return a.class - b.class;
      }
      return 0;
    });

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Student Attendance</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/students">Student</a>
                    </li>
                    <li className="breadcrumb-item active">Attendance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <ul className="nav nav-tabs">
              {[
                "Add/Edit",
                "Recent",
                "Absentee",
                "Absentee Range",
                "Attendance Record",
                "Download",
                "Daily(Student)",
                "Monthly",
                "Attendance Chart",
              ].map((tab, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    href="#"
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter Section */}
          <div className="filter-section mb-4">
            <h4>Filter Options</h4>
            <div className="row">
              <div className="col-md-3">
                <label>Class</label>
                <select
                  className="form-control"
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                >
                  <option value="">All</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classItem) => (
                    <option key={classItem} value={classItem}>
                      {classItem}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Section</label>
                <select
                  className="form-control"
                  value={sectionFilter}
                  onChange={(e) => setSectionFilter(e.target.value)}
                >
                  <option value="">All</option>
                  {['A', 'B', 'C', 'D', 'E'].map((section) => (
                    <option key={section} value={section}>
                       {section}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Order By</label>
                <select
                  className="form-control"
                  value={orderBy}
                  onChange={(e) => setOrderBy(e.target.value)}
                >
                  <option value="sno">ID</option>
                  <option value="name">Name</option>
                  <option value="class">Class</option>
                </select>
              </div>

              <div className="col-md-3">
                <label>&nbsp;</label>
                <button className="btn btn-primary w-100" onClick={() => {}}>
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content - Absentee Data */}
          {activeTab === "Absentee" && (
            <div className="absentee-table">
              <h4>Absentee List</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Roll no.</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Phone</th>
                    <th>Guardian's Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.sno}>
                      <td>{student.sno}</td>
                        <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.rollno}</td>
                      <td>{student.class}</td>
                      <td>{student.section}</td>
                      <td>{student.phone}</td>
                      <td>{student.guardianPhone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbsentStudents;
