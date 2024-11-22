import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-pink-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">CLARITY CMS</h1>
                <div className="flex items-center justify-center flex-grow">
                    <div className="flex space-x-4">
                        <Link to="/" className="text-white hover:underline">Dashboard</Link>
                        <Link to="/clients" className="text-white hover:underline">Clients</Link>
                        <Link to="/projects" className="text-white hover:underline">Projects</Link>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1647202184957-45197fd6cb0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFmcmljYW4lMjBsYWR5fGVufDB8fDB8fHww" alt="Profile" className="w-10 h-10 rounded-full ml-4" />
            </div>
        </nav>
    );
};

export default NavbarPage;
