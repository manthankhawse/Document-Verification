"use client";
import React, { useState } from 'react';

function Page() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div className="my-48 flex flex-col items-center ">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">Upload Document to Verify</h2>
        
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-500 
                     file:mr-4 file:border-0 file:bg-blue-50 
                     file:px-4 
                     file:py-2 file:text-sm 
                     file:font-semibold file:text-blue-700 
                     hover:file:bg-blue-100"
        />
        
        <button 
          onClick={handleUpload}
          className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 
                     font-semibold text-white 
                     shadow-md hover:bg-blue-700 focus:outline-none 
                     focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Page;
