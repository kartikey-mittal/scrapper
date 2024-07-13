import React from 'react';

function RightMaterials({ materials }) {
  return (
    <div style={{ 
      width: "12vw", 
      backgroundColor: "#f4f4f4", 
      height: "25vh", 
      marginTop: "5rem", 
      borderRadius: 10,
      border: ".5px solid grey",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Add box shadow here
    }}>
      <h3 style={{ textAlign: "center", color: "#33333b", fontFamily: "DMB" }}>My Materials</h3>
      {materials.map((material, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0px 0.5rem", marginBottom: "1rem" }}>
          <h3 style={{ color: "#74b7a0", margin: 0, fontSize: "1rem", fontWeight: "lighter" }}>{material.name}</h3>
          <h3 style={{ color: "#33333b", margin: 0, fontSize: "1rem", fontWeight: "lighter" }}>{material.weight}</h3>
        </div>
      ))}
    </div>
  );
}

export default RightMaterials;
