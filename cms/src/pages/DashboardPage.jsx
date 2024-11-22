import React from 'react';
import Navbar from '../components/Navbar';

const DashboardPage = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551733182-f43f932f3288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29wb3JhdGUlMjBlbnZpcm9ubm1lbnR8ZW58MHx8MHx8fDA%3D')" }}>
                <div className="container mx-auto p-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-6">Client Management Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h3 className="font-bold text-xl text-gray-700">Total Clients</h3>
                            <p className="text-3xl text-blue-600">150</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h3 className="font-bold text-xl text-gray-700">Total Projects</h3>
                            <p className="text-3xl text-blue-600">75</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h3 className="font-bold text-xl text-gray-700">Active Users</h3>
                            <p className="text-3xl text-blue-600">30</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;

