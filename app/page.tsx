import React, { useState } from "react";
import Header from "./components/Header";
import ImageDropzone from "./components/ImageDropzone";

export default function Home() {
  // State to store the JSON response
  const [apiResponse, setApiResponse] = useState(null);

  // Function to handle image upload and API request
  const handleImageUpload = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      // Replace 'https://api.example.com/analyze-skin' with your actual API endpoint
      const response = await fetch("http://127.0.0.1:8000/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch API");
      }

      const data = await response.json();
      setApiResponse(data); // Save the JSON response to state
    } catch (error) {
      console.error("Error uploading image:", error);
      setApiResponse({ error: "Failed to analyze the image." });
    }
  };

  return (
    <>
      <main>
        <h1 className="text-[clamp(1.5rem,4vw+1rem,4.5rem)] font-medium text-center mt-[clamp(2rem,8vh,13vh)] font-[family-name:var(--font-eb-garamond)]">
          Gain insight into your skin
        </h1>
        <p className="md:max-w-[64vw] text-center text-base-content/70 mt-6 font-[family-name:var(--font-work-sans)] mx-auto">
          Upload a photo of your skin, and our AI will analyze it to identify
          any conditions. You'll receive a detailed report along with
          recommendations for treatments and medications.
        </p>

        {/* Pass the handleImageUpload function to ImageDropzone */}
        <ImageDropzone onImageUpload={handleImageUpload} />

        {/* Display the JSON response */}
        {apiResponse && (
          <div className="mt-8 p-4 border rounded">
            <h2 className="font-bold text-lg">API Response:</h2>
            <pre className="text-sm bg-gray-100 p-2 rounded">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </>
  );
}