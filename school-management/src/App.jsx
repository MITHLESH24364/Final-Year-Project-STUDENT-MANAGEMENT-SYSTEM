import React, { useState } from 'react';
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
import PrivateRout from './pages/routes/PrivateRoute';
import ContactPage from './pages/ContactPage';
import AttendanceTable from './pages/AttendanceTable';
import AddEditStudent from './pages/AddEditStudent'

// Protected Route Component
const PrivateRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                {/* Login Route */}
                <Route
                    path="/login"
                    element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />

                {/* Protected Routes */}
                {/* <Route
                    path="/"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Layout />
                        </PrivateRoute>
                    } */}
                    <Route path="/" element={<PrivateRout component= {Layout} />}>
                    <Route path="/" element={<PrivateRout component= {AdminDashboard} />} />
                    <Route path="teacher-dashboard" element={<PrivateRout component= {TeacherDashboard} />} />
                    <Route path="student-dashboard" element={<PrivateRout component= {AdminDashboard} />} />
                    <Route path="add-students" element={<PrivateRout component= {AddStudent} /> } />
                    <Route path="add-marks" element={<PrivateRout component= {AddMarks} />} />
                    <Route path="add-attendance" element={<PrivateRout component= {AddAttendance} />} />
                    <Route path="view-students" element={<PrivateRout component= {ViewStudents} />} />
                    <Route path="marks-report" element={<PrivateRout component= {MarksReport} />} />
                    <Route path="student-details" element={<PrivateRout component= {StudentDetailsModal} />} />
                    <Route path="report-card" element={<PrivateRout component= {ReportCard} />} />
                    <Route path="absent-students" element={<PrivateRout component= {AbsentStudents} />} />
                    <Route path="add-teachers" element={<PrivateRout component= {AddTeacher} />} />
                    <Route path="view-teachers" element={<PrivateRout component= {ViewTeachers} />} />
                    <Route path="contact" element={<PrivateRout component= {ContactPage} />} />
                    <Route path="attendance-table" element={<PrivateRout component= {AttendanceTable} />} />
                    <Route path="edit-student/:id" element={<PrivateRout component= {AddEditStudent} />} />
                    <Route path="edit-student" element={<PrivateRout component= {AddEditStudent} />} />


                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
