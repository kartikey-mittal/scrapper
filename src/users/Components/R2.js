import React, { useState, useRef } from "react";
import { storage, ref, uploadBytes, getDownloadURL } from "../../firebase";

const R2 = ({setComponentID}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // State to track upload status

  // Create a ref for the hidden file input
  const fileInputRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    setIsUploading(true); // Set uploading state to true

    const storageRef = ref(storage, `images/${file.name}`);

    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");

        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrl(downloadURL);
          setIsUploading(false); // Reset uploading state
        });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setIsUploading(false); // Reset uploading state on error
      });
  };

  // Function to trigger the file input
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          borderRadius: "1.2rem",
          marginLeft: "20px",
          marginRight: "20px",
          padding: "20px",
          flex: 1,
        }}
      >
        <div
          style={{
            borderRadius: "1.2rem",
            width: "100%",
            height: "80%",
            backgroundColor: "#d7ecff",
            border: "0.01rem solid #cccccc",
            backgroundImage: imageUrl ? `url(${imageUrl})` : "none", // Set background image
            backgroundSize: "cover", // Adjust as needed
          }}
        ></div>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }} // Hide the input element
          ref={fileInputRef} // Attach the ref
        />
      </div>

      {/* Submit buttons */}
      <div
        style={{
          textAlign: "center",
          marginTop: "auto",
          marginBottom: "0.7rem",
          gap: 10,
        }}
      >
        <button
          style={{
            padding: "15px 20px",
            borderRadius: "0.9rem",
            backgroundColor: "#fec400",
            color: "white",
            border: "none",
            fontFamily: "DMSB",
            fontSize: "1.3rem",
            cursor: "pointer",
            width: "30%",
          }}
          onClick={handleUploadButtonClick}
        >
          UPLOAD
        </button>
        <button
          style={{
            padding: "15px 20px",
            borderRadius: "0.9rem",
            backgroundColor: "#385aeb",
            color: "white",
            border: "none",
            fontFamily: "DMSB",
            fontSize: "1.3rem",
            cursor: "pointer",
            width: "50%",
            marginLeft: "1.5rem",
            opacity: imageUrl ? 1 : 0.5, // Reduce opacity if no image is uploaded
            pointerEvents: imageUrl ? "auto" : "none", // Disable pointer events if no image is uploaded
          }}
          disabled={!imageUrl} // Disable the button if no image is uploaded
          onClick={() => setComponentID(3)} // Change to component 2 on click
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default R2;
