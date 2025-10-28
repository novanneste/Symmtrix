import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p className="text-gray-600">
            Welcome to Symmtrix - Your symmetry analysis platform.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Quick Stats</h3>
              <p className="text-gray-600">View your project statistics here.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
              <p className="text-gray-600">Your recent symmetry analyses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
