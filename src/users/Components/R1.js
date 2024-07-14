import React, { useState } from "react";

const R1 = ({ setComponentID }) => {
  const boxStyle = (isSelected, imageUrl) => ({
    backgroundColor: "#fafafa",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "8.5rem",
    height: "8rem",
    borderRadius: "15px",
    borderWidth: isSelected ? "3px" : "2px",
    borderStyle: 'solid',
    borderColor: isSelected ? "#4ab526" : "#a0a0a0",
    overflow: "hidden",
    marginRight: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  });

  const images = [
    "https://s12.gifyu.com/images/St67y.png",
    "https://s12.gifyu.com/images/St6IT.png",
    "https://s10.gifyu.com/images/St6IC.png",
    "https://s10.gifyu.com/images/St6lm.png",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          borderRadius: "1.2rem",
          marginLeft: "20px",
          marginRight: '20px',
          padding: "20px",
          flex: 1, // Take remaining vertical space
        }}
      >
        <div style={{ color: "#7F7F7F", marginBottom: 5, marginTop: "25px", fontSize: '1.2rem', fontFamily: 'DMSB' }}>
          Select Vehicles
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "1.2rem",
            justifyContent: "flex-start",
          }}
        >
          {images.map((imageUrl, index) => (
            <div
              key={index}
              style={boxStyle(selectedIndex === index, imageUrl)}
              onClick={() => handleClick(index)}
            >
              {/* Background image is applied via inline styling */}
            </div>
          ))}
        </div>
      </div>

      {/* Submit button fixed to the bottom */}
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
          onClick={() => setComponentID(2)} // Change to component 2 on click
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default R1;
