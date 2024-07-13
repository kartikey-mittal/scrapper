import React from 'react';

function RightUp({ count1, count2, count3 }) {
  const boxStyle = {
    width: "15vw",
    backgroundColor: "#f4f4f4",
    border: "1px solid grey",
    marginTop: "2rem",
    borderRadius: 10,
    // paddingBottom: "-10rem",  
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <div style={boxStyle}>
        <h3 style={{ textAlign: "center", color: "#33333b", marginBottom: "0.5rem" }}>Completed</h3>
        <h1 style={{ textAlign: "center", color: "#33333b", fontSize: "2.6rem", fontFamily: "DMB", marginTop: "0.5rem"}}>{count1}</h1>
      </div>
      <div style={boxStyle}>
        <h3 style={{ textAlign: "center", color: "#33333b", marginBottom: "0.5rem" }}>Rejected</h3>
        <h1 style={{ textAlign: "center", color: "#33333b", fontSize: "2.6rem", fontFamily: "DMB", marginTop: "0.5rem" }}>{count2}</h1>
      </div>
      <div style={boxStyle}>
        <h3 style={{ textAlign: "center", color: "#33333b", marginBottom: "0.5rem" }}>Cancelled</h3>
        <h1 style={{ textAlign: "center", color: "#33333b", fontSize: "2.6rem", fontFamily: "DMB", marginTop: "0.5rem" }}>{count3}</h1>
      </div>
    </div>
  );
}

export default RightUp;
