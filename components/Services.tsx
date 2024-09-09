import React from 'react';

function Services() {
  return (
    <div className="pt-16 pb-8 bg-gray-50" id='services'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 mx-auto text-gray-800 border-b-4 border-blue-500 w-fit">
          Our Services
        </h2>
        <div className="flex flex-col space-y-12">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Secure and Decentralized Document Storage on IPFS</h3>
              <p className="text-gray-600">
                Our platform leverages IPFS (InterPlanetary File System) to securely and decentralize document storage. This ensures that your documents are not only safely stored but also distributed across multiple nodes, making them highly resistant to tampering and loss.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center p-4">
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center p-4">
            </div>
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Exclusive Access to Documents and Privacy</h3>
              <p className="text-gray-600">
                We offer exclusive access controls to ensure that only authorized individuals can view or manage documents. This guarantees that sensitive information remains private and is only accessible to those with the proper permissions.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Document Verification using Machine Learning and Computer Vision</h3>
              <p className="text-gray-600">
                Our advanced verification system employs machine learning and computer vision techniques to analyze and authenticate documents. This approach enhances accuracy and efficiency in detecting fraudulent or altered documents.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center p-4">
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center p-4">
            </div>
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Verification Based on OCR</h3>
              <p className="text-gray-600">
                Our Optical Character Recognition (OCR) technology allows us to extract and verify text from scanned documents or images. This feature is crucial for accurate document processing and ensures that text-based information is correctly interpreted and validated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
