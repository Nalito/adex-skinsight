import React from "react";

export default function ImageDropzone({ onImageUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageUpload(file); // Call the function passed as a prop
    }
  };

  return (
    <div className="mt-6 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
    </div>
  );
}
