import React from 'react';

const MyProjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-gray-600 mb-6">
            Manage and view all your symmetry analysis projects.
          </p>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Sample Project 1</h3>
              <p className="text-gray-600 text-sm">Created: Oct 28, 2025</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Sample Project 2</h3>
              <p className="text-gray-600 text-sm">Created: Oct 27, 2025</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Sample Project 3</h3>
              <p className="text-gray-600 text-sm">Created: Oct 26, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
