"use client";
import axios from 'axios';
import React, { useState } from 'react';

function Page() {
  const [file, setFile] = useState(null);
  const [docName, setDocName] = useState('');
  const [reciever, setReciever] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [loading, setLoading] = useState(false);
  const upload = async () => {
    try {
      if (!file) {
        alert("Please select a file first!");
        return;
      }

      // Upload file to IPFS via Pinata
      const formData = new FormData();
      formData.append('file', file);

      const pinataMetadata = {
        name: docName || 'File name',
      };

      const pinataOptions = {
        cidVersion: 0,
      };

      formData.append('pinataMetadata', JSON.stringify(pinataMetadata));
      formData.append('pinataOptions', JSON.stringify(pinataOptions));

      setLoading(true);

      const pinataResponse = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_KEY}`,
          },
        }
      );

      setIpfsHash(pinataResponse.data.IpfsHash);
      console.log(`IPFS Hash: ${ipfsHash}`);

      setLoading(false);
      
    } catch (error) {
      console.error('Transaction Error:', error);
      alert(`Error: ${error.message}`);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Upload File and Document Details</h1>
      
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="docName" className="block text-sm font-medium text-gray-700 mb-1">Document Name</label>
          <input
            type="text"
            id="docName"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter document name"
          />

        </div>
        <div className="mb-4">
<label htmlFor="reciever" className="block text-sm font-medium text-gray-700 mb-1">Reciever Address</label>
          <input
            type="text"
            id="reciever"
            value={reciever}
            onChange={(e) => setReciever(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter Reciever Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700 mb-1">Select File</label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="button"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={upload}
        >
          Upload to IPFS
        </button>
      </form>
    {
      !loading?
      <div className='my-4'>
        <a href={`https://gateway.pinata.cloud/ipfs/${ipfsHash}`}>{ipfsHash}</a>
      </div>: <div className='my-4'>
        Loading.....
      </div>
    }
    </div>
  );
}

export default Page;
