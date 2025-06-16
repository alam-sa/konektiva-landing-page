import React from 'react';

const ConnectionCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ConnectionCard;
