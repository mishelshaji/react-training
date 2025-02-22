import React from 'react';
import { Link } from 'react-router';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl mt-4">Page Not Found</h2>
            <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
