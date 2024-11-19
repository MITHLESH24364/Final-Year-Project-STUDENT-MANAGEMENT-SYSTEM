// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard'; 
import StudentDashboard from './pages/StudentDashboard';  
import Layout from './theme/Layout';
import TeacherDashboard from './pages/TeacherDashboard';
import AddStudent from './pages/AddStudent';
import AddMarks from './pages/AddMarks';
import AddAttendance from './pages/AddAttendance';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="teacher-dashboard" element={<TeacherDashboard />} />
                    <Route path="student-dashboard" element={<StudentDashboard />} />
                    <Route path="add-students" element={<AddStudent />} />
                    <Route path="add-marks" element={<AddMarks />} />
                    <Route path="add-attendance" element={<AddAttendance />} />            
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
