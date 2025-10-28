import React, { useState } from 'react';
import { mirrorImage } from '../utils/symmetry';

const SymmetryScanner = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [mirroredImage, setMirroredImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        setUploadedImage(imageDataUrl);
        
        // Apply symmetry transformation
        mirrorImage(imageDataUrl, (mirrored) => {
          setMirroredImage(mirrored);
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Symmetry Scanner</h1>
          <p className="text-gray-600 mb-6">
            Upload an image to analyze its symmetry properties.
          </p>
          
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Original Image</h3>
              {uploadedImage ? (
                <img src={uploadedImage} alt="Original" className="w-full rounded" />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-400">No image uploaded</p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Mirrored Image</h3>
              {mirroredImage ? (
                <img src={mirroredImage} alt="Mirrored" className="w-full rounded" />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-400">Mirror will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymmetryScanner;
