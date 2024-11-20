import React from 'react';

const DashboardPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Total Clients</h3>
                    <p className="text-2xl">150</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Total Projects</h3>
                    <p className="text-2xl">75</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Active Users</h3>
                    <p className="text-2xl">30</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

