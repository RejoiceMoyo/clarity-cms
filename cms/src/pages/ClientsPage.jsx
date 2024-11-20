import React from 'react';

const ClientsPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-4">Clients</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">Profile Picture</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Contact Details</th>
                        <th className="py-2 px-4 border-b">Tags</th>
                        <th className="py-2 px-4 border-b">Notes</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row */}
                    <tr>
                        <td className="py-2 px-4 border-b">[Image]</td>
                        <td className="py-2 px-4 border-b">Rejo Moyo</td>
                        <td className="py-2 px-4 border-b">officialrejoicemoyo@outlook.com</td>
                        <td className="py-2 px-4 border-b">Client</td>
                        <td className="py-2 px-4 border-b">Notes here</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-blue-500 hover:underline">Edit</button>
                            <button className="text-red-500 hover:underline ml-2">Delete</button>
                        </td>
                    </tr>
                    {/* More rows can be added here */}
                </tbody>
            </table>
        </div>
    );
};

export default ClientsPage;
