import React from 'react';

function RightMaterials({ materials }) {
  return (
    <div style={{ 
      width: "20vw", 
      backgroundColor: "#f4f4f4", 
      height: "25vh", 
      marginTop: "5rem", 
      borderRadius: 10,
      border: ".5px solid grey",
      overflowY: "auto"  // Add overflowY to handle scrolling if the content exceeds the height
    }}>
      <h3 style={{  color: "#33333b", fontFamily: "DMB",marginLeft:"1.3rem" }}>My Materials</h3>
      {materials.map((material, index) => (
        <div 
          key={index} 
          style={{ 
            borderBottom: "1px solid #ccc", // Add bottom border
            padding: "0 1rem", // Add padding to the left and right
            marginBottom: "1rem"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <h3 style={{ color: "#74b7a0", margin: 0, fontSize: "1rem", fontWeight: "lighter" }}>{material.name}</h3>
            <h3 style={{ color: "#33333b", margin: 0, fontSize: "1rem", fontWeight: "lighter" }}>{material.weight}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightMaterials;
