import React, { useState } from "react";

const R3 = () => {
  const [selectedButtons, setSelectedButtons] = useState([]); // State to track selected buttons

  // Array of button texts and their corresponding images
  const buttonsData = [
    { text: "Iron", imageUrl: "https://img3.exportersindia.com/product_images/bc-full/dir_122/3646887/iron-scrap-1974902.jpg" },
    { text: "Aluminium", imageUrl: "https://etimg.etb2bimg.com/photo/92956384.cms" },
    { text: "Newspaper", imageUrl: "https://5.imimg.com/data5/QX/TW/MY-36710290/vhgf-500x500.jpg" },
    { text: "Sole", imageUrl: "https://5.imimg.com/data5/RG/SK/AS/SELLER-13192772/white-pvc-scrap-500x500.jpg" },
  ];

  // Function to handle button click
  const handleButtonClick = (index) => {
    // Toggle the selected state of the button
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter(item => item !== index)); // Deselect if already selected
    } else {
      setSelectedButtons([...selectedButtons, index]); // Select if not selected
    }
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
        <div style={{ color: "#7F7F7F", marginBottom: 5, marginTop: "25px", fontSize: '1.2rem', fontFamily: 'DMSB' }}>
          Select Materials
        </div>

        <div style={{ width: "100%", backgroundColor: "transparent", display: 'flex', flexWrap: 'wrap' }}>
          {buttonsData.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              style={{
                backgroundColor: selectedButtons.includes(index) ? "#4CAF50" : "#f4f4f4",
                color: selectedButtons.includes(index) ? "#ffffff" : "#666666",
                border: selectedButtons.includes(index) ? "1px solid #FF5733" : "1px solid #CBC7C7",
                padding: "8px 20px",
                borderRadius: 5,
                fontFamily: "DMR",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                fontSize: '1.1rem',
                margin: '10px',
              }}
            >
              {button.text}
              <div
                style={{
                  width: '40px',
                  height: '40px', // Adjusted height to fully wrap the image
                  borderRadius: '50%',
                  marginLeft: '10px'
                }}
              >
                <img
                  src={button.imageUrl}
                  alt={button.text}
                  style={{
                    width: '100%',
                    height: '100%', // Ensure the image fills the wrapper
                    borderRadius: '50%',
                    objectFit: 'cover', // Maintain aspect ratio and cover the div
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Submit buttons */}
      <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: '0.7rem' }}>
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
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default R3;
