// import React, { useState } from 'react';

// const AttendanceTable = () => {
//   const [filters, setFilters] = useState({
//     class: '',
//     section: '',
//     startDate: '',
//     endDate: '',
//     sorting: 'name',
//   });

//   const data = [
//     {
//       id: 1,
//       name: 'Aarzoo Maharjan',
//       roll: 'IMS-25124',
//       attendance: {
//         '2024-12-01': 'P',
//         '2024-12-02': 'P',
//         '2024-12-03': 'A',
//         '2024-12-04': 'H',
//         '2024-12-05': 'P',
//       },
//     },
//     {
//       id: 2,
//       name: 'Anjina Maharjan',
//       roll: 'IMS-24742',
//       attendance: {
//         '2024-12-01': 'P',
//         '2024-12-02': 'A',
//         '2024-12-03': 'P',
//         '2024-12-04': 'H',
//         '2024-12-05': 'A',
//       },
//     },
//     {
//       id: 3,
//       name: 'Cyrus Raj Bajracharya',
//       roll: 'IMS-25232',
//       attendance: {
//         '2024-12-01': 'A',
//         '2024-12-02': 'P',
//         '2024-12-03': 'H',
//         '2024-12-04': 'P',
//         '2024-12-05': 'P',
//       },
//     },
//   ];

//   const getAttendanceClass = (status) => {
//     switch (status) {
//       case 'P':
//         return 'present';
//       case 'A':
//         return 'absent';
//       case 'H':
//         return 'holiday';
//       default:
//         return '';
//     }
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleApplyFilter = () => {
//     console.log('Filters Applied:', filters);
//   };

//   const generateDateColumns = () => {
//     const startDate = new Date(filters.startDate);
//     const endDate = new Date(filters.endDate);
//     const columns = [];

//     if (!isNaN(startDate) && !isNaN(endDate) && startDate <= endDate) {
//       let currentDate = new Date(startDate);
//       while (currentDate <= endDate) {
//         columns.push(currentDate.toISOString().split('T')[0]);
//         currentDate.setDate(currentDate.getDate() + 1);
//       }
//     }

//     return columns;
//   };

//   const dateColumns = generateDateColumns();

//   const countAttendance = (attendance, dates, type) => {
//     return dates.reduce((count, date) => {
//       return count + (attendance[date] === type ? 1 : 0);
//     }, 0);
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
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

//           <form>
//             <div className="row mb-4">
//               <div className="col-md-2">
//                 <label htmlFor="classFilter">Select Class</label>
//                 <select
//                   className="form-control"
//                   name="class"
//                   id="classFilter"
//                   value={filters.class}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Class</option>
//                   {['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((cls) => (
//                     <option key={cls} value={cls}>
//                       {cls}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sectionFilter">Select Section</label>
//                 <select
//                   className="form-control"
//                   name="section"
//                   id="sectionFilter"
//                   value={filters.section}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="">Select Section</option>
//                   {['A', 'B', 'C', 'D', 'E'].map((sec) => (
//                     <option key={sec} value={sec}>
//                       {sec}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="startDate">Select Starting Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="startDate"
//                   id="startDate"
//                   value={filters.startDate}
//                   onChange={handleFilterChange}
//                 />
//               </div>

//               <div className="col-md-3">
//                 <label htmlFor="endDate">Select End Date</label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   name="endDate"
//                   id="endDate"
//                   value={filters.endDate}
//                   onChange={handleFilterChange}
//                 />
//               </div>

//               <div className="col-md-2">
//                 <label htmlFor="sortingFilter">Sorting</label>
//                 <select
//                   className="form-control"
//                   name="sorting"
//                   id="sortingFilter"
//                   value={filters.sorting}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="name">Order By Name</option>
//                   <option value="roll">Order By Roll</option>
//                 </select>
//               </div>

//               <div className="col-md-12 mt-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleApplyFilter}
//                 >
//                   Apply Filter
//                 </button>
//               </div>
//             </div>
//           </form>

//           <div className="table-responsive">
//             <table className="table table-striped mt-4 attendance-table">
//               <thead>
//                 <tr>
//                   <th className="fixed-column">S.no</th>
//                   <th className="fixed-column">Name</th>
//                   <th>Roll</th>
//                   {dateColumns.map((date) => (
//                     <th key={date}>{date}</th>
//                   ))}
//                   <th>Present Days</th>
//                   <th>Absent Days</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((student, index) => {
//                   const presentCount = countAttendance(student.attendance, dateColumns, 'P');
//                   const absentCount = countAttendance(student.attendance, dateColumns, 'A');

//                   return (
//                     <tr key={student.id}>
//                       <td className="fixed-column">{index + 1}</td>
//                       <td className="fixed-column">{student.name}</td>
//                       <td>{student.roll}</td>
//                       {dateColumns.map((date) => (
//                         <td key={date} className={getAttendanceClass(student.attendance[date] || '')}>
//                           {student.attendance[date] || ''}
//                         </td>
//                       ))}
//                       <td>{presentCount}</td>
//                       <td>{absentCount}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceTable;




import React, { useState } from 'react';

const AttendanceTable = () => {
  const [filters, setFilters] = useState({
    class: '',
    section: '',
    startDate: '',
    endDate: '',
    sorting: 'name',
  });
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const data = [
    {
      id: 1,
      name: 'Aarzoo Maharjan',
      roll: 'IMS-25124',
      attendance: {
        '2024-12-01': 'P',
        '2024-12-02': 'P',
        '2024-12-03': 'A',
        '2024-12-04': 'H',
        '2024-12-05': 'P',
      },
    },
    {
      id: 2,
      name: 'Anjina Maharjan',
      roll: 'IMS-24742',
      attendance: {
        '2024-12-01': 'P',
        '2024-12-02': 'A',
        '2024-12-03': 'P',
        '2024-12-04': 'H',
        '2024-12-05': 'A',
      },
    },
    {
      id: 3,
      name: 'Cyrus Raj Bajracharya',
      roll: 'IMS-25232',
      attendance: {
        '2024-12-01': 'A',
        '2024-12-02': 'P',
        '2024-12-03': 'H',
        '2024-12-04': 'P',
        '2024-12-05': 'P',
      },
    },
  ];

  const getAttendanceClass = (status) => {
    switch (status) {
      case 'P':
        return 'present';
      case 'A':
        return 'absent';
      case 'H':
        return 'holiday';
      default:
        return '';
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilter = () => {
    const startDate = new Date(filters.startDate);
    const endDate = new Date(filters.endDate);

    const filtered = data.filter((student) => {
      const matchesClass = !filters.class || student.class === filters.class;
      const matchesSection = !filters.section || student.section === filters.section;

      const matchesDateRange =
        !isNaN(startDate) &&
        !isNaN(endDate) &&
        Object.keys(student.attendance).some((date) => {
          const currentDate = new Date(date);
          return currentDate >= startDate && currentDate <= endDate;
        });

      return matchesClass && matchesSection && matchesDateRange;
    });

    const sortedData = filtered.sort((a, b) =>
      filters.sorting === 'name' ? a.name.localeCompare(b.name) : a.roll.localeCompare(b.roll)
    );

    setFilteredData(sortedData);
    setIsFiltered(true);
  };

  const generateDateColumns = () => {
    const startDate = new Date(filters.startDate);
    const endDate = new Date(filters.endDate);
    const columns = [];

    if (!isNaN(startDate) && !isNaN(endDate) && startDate <= endDate) {
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        columns.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return columns;
  };

  const dateColumns = generateDateColumns();

  const countAttendance = (attendance, dates, type) => {
    return dates.reduce((count, date) => {
      return count + (attendance[date] === type ? 1 : 0);
    }, 0);
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
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

          <form>
            <div className="row mb-4">
              <div className="col-md-2">
                <label htmlFor="classFilter">Select Class</label>
                <select
                  className="form-control"
                  name="class"
                  id="classFilter"
                  value={filters.class}
                  onChange={handleFilterChange}
                >
                  <option value="">Select Class</option>
                  {['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2">
                <label htmlFor="sectionFilter">Select Section</label>
                <select
                  className="form-control"
                  name="section"
                  id="sectionFilter"
                  value={filters.section}
                  onChange={handleFilterChange}
                >
                  <option value="">Select Section</option>
                  {['A', 'B', 'C', 'D', 'E'].map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="startDate">Select Starting Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  id="startDate"
                  value={filters.startDate}
                  onChange={handleFilterChange}
                />
              </div>

              <div className="col-md-3">
                <label htmlFor="endDate">Select End Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  id="endDate"
                  value={filters.endDate}
                  onChange={handleFilterChange}
                />
              </div>

              <div className="col-md-2">
                <label htmlFor="sortingFilter">Sorting</label>
                <select
                  className="form-control"
                  name="sorting"
                  id="sortingFilter"
                  value={filters.sorting}
                  onChange={handleFilterChange}
                >
                  <option value="name">Order By Name</option>
                  <option value="roll">Order By Roll</option>
                </select>
              </div>

              <div className="col-md-12 mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleApplyFilter}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </form>

          {isFiltered && (
            <div className="table-responsive">
              <table className="table table-striped mt-4 attendance-table">
                <thead>
                  <tr>
                    <th className="fixed-column">S.no</th>
                    <th className="fixed-column">Name</th>
                    <th>Roll</th>
                    {dateColumns.map((date) => (
                      <th key={date}>{date}</th>
                    ))}
                    <th>Present Days</th>
                    <th>Absent Days</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student, index) => {
                    const presentCount = countAttendance(student.attendance, dateColumns, 'P');
                    const absentCount = countAttendance(student.attendance, dateColumns, 'A');

                    return (
                      <tr key={student.id}>
                        <td className="fixed-column">{index + 1}</td>
                        <td className="fixed-column">{student.name}</td>
                        <td>{student.roll}</td>
                        {dateColumns.map((date) => (
                          <td key={date} className={getAttendanceClass(student.attendance[date] || '')}>
                            {student.attendance[date] || ''}
                          </td>
                        ))}
                        <td>{presentCount}</td>
                        <td>{absentCount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
