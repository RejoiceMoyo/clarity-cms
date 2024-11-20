import React from 'react';

const ProjectsPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">Project Name</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Team Members</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row */}
                    <tr>
                        <td className="py-2 px-4 border-b">Project Alpha</td>
                        <td className="py-2 px-4 border-b">Description of project alpha.</td>
                        <td className="py-2 px-4 border-b">Alice, Bob</td>
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

export default ProjectsPage;
