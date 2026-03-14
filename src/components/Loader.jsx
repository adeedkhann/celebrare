import React from 'react';

const Loader = () => {

  return (
    <div className="flex flex-col items-center justify-center p-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
      <p className="text-gray-500 font-medium animate-pulse">Fetching your gallery...</p>
    </div>
  );
};

export default Loader;