import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex  items-center justify-between px-4 py-2 bg-transparent border rounded border-green-500 shadow-sm w-full">
            <div className="flex items-center">
                <h1 className="text-lg font-bold">WabiSabi</h1>
            </div>
            <div className="flex items-center">
                <button className="px-4 py-2 mr-2 text-white bg-green-500 rounded">Register</button>
                <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
