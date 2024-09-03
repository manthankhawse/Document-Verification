"use client";
import axios from 'axios';
import React, { useState } from 'react';

function Page() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const pinataMetadata = {
        name: 'File name',
      };

      const pinataOptions = {
        cidVersion: 0,
      };

      formData.append('pinataMetadata', JSON.stringify(pinataMetadata));
      formData.append('pinataOptions', JSON.stringify(pinataOptions));

      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_KEY}`,
          },
        }
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Upload File</h1>
      <input
        type="file"
        name="fileInput"
        id="input"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={upload}>Upload to IPFS</button>
    </>
  );
}

export default Page;
