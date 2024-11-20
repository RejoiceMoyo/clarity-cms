import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import ClientsPage from './pages/ClientsPage';
import ProjectsPage from './pages/ProjectsPage';
import Auth from './components/Auth';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="/auth" element={<Auth />} />
                
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route element={<Navbar />}>
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
