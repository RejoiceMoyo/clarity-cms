import React, { useState } from 'react';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project Alpha', description: 'Description of project alpha.', teamMembers: 'Alice, Bob' },
        { id: 2, name: 'Project Beta', description: 'Description of project beta.', teamMembers: 'Charlie, Dave' },
        // Add more initial projects if needed
    ]);

    const handleAddProject = () => {
        // Logic to add a new project
        const newProject = { id: projects.length + 1, name: 'New Project', description: 'New project description.', teamMembers: 'New Member' };
        setProjects([...projects, newProject]);
        console.log("Add Project button clicked");
    };

    const handleEditProject = (projectId) => {
        // Logic to edit the project with the given projectId
        console.log(`Edit project with ID: ${projectId}`);
    };

    const handleDeleteProject = (projectId) => {
        // Logic to delete the project with the given projectId
        setProjects(projects.filter(project => project.id !== projectId));
        console.log(`Delete project with ID: ${projectId}`);
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <button 
                onClick={handleAddProject} 
                className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Add Project
            </button>
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
                    {projects.map(project => (
                        <tr key={project.id}>
                            <td className="py-2 px-4 border-b">{project.name}</td>
                            <td className="py-2 px-4 border-b">{project.description}</td>
                            <td className="py-2 px-4 border-b">{project.teamMembers}</td>
                            <td className="py-2 px-4 border-b">
                                <button 
                                    onClick={() => handleEditProject(project.id)} 
                                    className="text-blue-500 hover:underline"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDeleteProject(project.id)} 
                                    className="text-red-500 hover:underline ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsPage;
