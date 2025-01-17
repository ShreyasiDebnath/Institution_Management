import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
// import { useCookies } from 'react-cookie'
import AdminHome from './pages/Admin/AdminHome';
// import AdminContainer from './container/AdminContainer';
// import Dashboard from './components/Dashboard';
import TeacherDashboard from './pages/Teacher/TeacherSidebar';
import StudentDashboard from './pages/Student/StudentDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminLogin from './pages/Admin/AdminLogin';
import { Toaster } from 'react-hot-toast';
import AdminRegister from './pages/Admin/AdminRegister';
// import { AuthProvider } from './AuthContext';
import TeacherHome from './pages/Teacher/TeacherHome';

function App() {
  // const [cookie, setCookie] = useCookies(["token"])
  return (
    <>
      <Router>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminDashboard/>}/>

          <Route exact path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="/teacher/*" element={<TeacherHome />} />

          <Route exact path="/AdminLogin" element={<AdminLogin/>}/>
          <Route exact path="/AdminReg" element={<AdminRegister/>}/>
          <Route exact path="/student" element={<StudentDashboard />} />
          <Route path="*" element={<Navigate to="/" />}></Route>
          
        </Routes>
        <Toaster />
      </Router>
    </>
  )
}

export default App
