// // src/App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AdminDashboard from './pages/AdminDashboard'; 
// import StudentDashboard from './pages/StudentDashboard';  
// import Layout from './theme/Layout';
// import TeacherDashboard from './pages/TeacherDashboard';
// import AddStudent from './pages/AddStudent';
// import AddMarks from './pages/AddMarks';
// import AddAttendance from './pages/AddAttendance';
// import ViewStudents from './pages/ViewStudents';
// import MarksReport from './pages/MarksReport';
// import StudentDetailsModal from './pages/StudentDetailsModal';
// import ReportCard from './pages/ReportCard';
// import AbsentStudents from './pages/AbsentStudents';
// import AddTeacher from './pages/AddTeacher';
// import Login from './pages/Login';




// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<AdminDashboard />} />
//                     <Route path="teacher-dashboard" element={<TeacherDashboard />} />
//                     <Route path="student-dashboard" element={<StudentDashboard />} />
//                     <Route path="add-students" element={<AddStudent />} />
//                     <Route path="add-marks" element={<AddMarks />} />
//                     <Route path="add-attendance" element={<AddAttendance />} />    
//                     <Route path="view-students" element={<ViewStudents />} />   
//                     <Route path="marks-report" element={<MarksReport />} />
//                     <Route parh="student-details" element={<StudentDetailsModal />} />
//                     <Route path="report-card" element={<ReportCard />} />
//                     <Route path="absent-students" element={<AbsentStudents />} />
//                     <Route parh="add-teachers" element={<AddTeacher />} />
//                     <Route path="login" element={<Login />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;




// src/App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AdminDashboard from './pages/AdminDashboard'; 
// import StudentDashboard from './pages/StudentDashboard';  
// import Layout from './theme/Layout';
// import TeacherDashboard from './pages/TeacherDashboard';
// import AddStudent from './pages/AddStudent';
// import AddMarks from './pages/AddMarks';
// import AddAttendance from './pages/AddAttendance';
// import ViewStudents from './pages/ViewStudents';
// import MarksReport from './pages/MarksReport';
// import StudentDetailsModal from './pages/StudentDetailsModal';
// import ReportCard from './pages/ReportCard';
// import AbsentStudents from './pages/AbsentStudents';
// import AddTeacher from './pages/AddTeacher';
// import Login from './pages/Login';

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 {/* Route for Login page (outside Layout) */}
//                 <Route path="/login" element={<Login />} />
                
//                 {/* Routes within the Layout */}
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<AdminDashboard />} />
//                     <Route path="teacher-dashboard" element={<TeacherDashboard />} />
//                     <Route path="student-dashboard" element={<StudentDashboard />} />
//                     <Route path="add-students" element={<AddStudent />} />
//                     <Route path="add-marks" element={<AddMarks />} />
//                     <Route path="add-attendance" element={<AddAttendance />} />    
//                     <Route path="view-students" element={<ViewStudents />} />   
//                     <Route path="marks-report" element={<MarksReport />} />
//                     <Route path="student-details" element={<StudentDetailsModal />} />
//                     <Route path="report-card" element={<ReportCard />} />
//                     <Route path="absent-students" element={<AbsentStudents />} />
//                     <Route path="add-teachers" element={<AddTeacher />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;




// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard'; 
import StudentDashboard from './pages/StudentDashboard';  
import Layout from './theme/Layout';
import TeacherDashboard from './pages/TeacherDashboard';
import AddStudent from './pages/AddStudent';
import AddMarks from './pages/AddMarks';
import AddAttendance from './pages/AddAttendance';
import ViewStudents from './pages/ViewStudents';
import MarksReport from './pages/MarksReport';
import StudentDetailsModal from './pages/StudentDetailsModal';
import ReportCard from './pages/ReportCard';
import AbsentStudents from './pages/AbsentStudents';
import AddTeacher from './pages/AddTeacher';
import Login from './pages/Login';
import ViewTeachers from './pages/ViewTeachers';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redirect the root path `/` to `/login` */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Route for the Login page */}
                <Route path="/login" element={<Login />} />

                {/* Routes that use the Layout (header, sidebar, footer) */}
                <Route path="/" element={<Layout />}>
                    <Route path="admin-dashboard" element={<AdminDashboard />} />
                    <Route path="teacher-dashboard" element={<TeacherDashboard />} />
                    <Route path="student-dashboard" element={<StudentDashboard />} />
                    <Route path="add-students" element={<AddStudent />} />
                    <Route path="add-marks" element={<AddMarks />} />
                    <Route path="add-attendance" element={<AddAttendance />} />
                    <Route path="view-students" element={<ViewStudents />} />
                    <Route path="marks-report" element={<MarksReport />} />
                    <Route path="student-details" element={<StudentDetailsModal />} />
                    <Route path="report-card" element={<ReportCard />} />
                    <Route path="absent-students" element={<AbsentStudents />} />
                    <Route path="add-teachers" element={<AddTeacher />} />
                    <Route path="view-teachers" element={<ViewTeachers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
